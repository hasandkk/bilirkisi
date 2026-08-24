import { NextResponse } from "next/server";
import { upload } from "@/content/form";
import { hasErrors, validatePreReview, type FieldErrors } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Basit bellek ici hiz siniri (tek instance icin). */
const requestLog = new Map<string, number[]>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entries = (requestLog.get(key) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  entries.push(now);
  requestLog.set(key, entries);
  if (requestLog.size > 5000) requestLog.clear();
  return entries.length > RATE_MAX;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function referenceCode(): string {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `TR-${stamp}-${random}`;
}

type Attachment = { name: string; size: number; type: string };

/**
 * Basvuruyu iletir.
 * PRE_REVIEW_WEBHOOK_URL tanimliysa yapilandirilmis JSON o adrese POST edilir
 * (CRM, e-posta servisi veya otomasyon aracina baglamak icin).
 * Tanimli degilse basvuru yalnizca sunucu gunlugune yazilir.
 */
async function deliver(payload: Record<string, unknown>): Promise<boolean> {
  const webhook = process.env.PRE_REVIEW_WEBHOOK_URL;
  if (!webhook) {
    console.info("[on-inceleme] Yeni başvuru:", JSON.stringify(payload));
    return true;
  }
  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.PRE_REVIEW_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.PRE_REVIEW_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error("[on-inceleme] Webhook hatası:", response.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[on-inceleme] Webhook isteği başarısız:", error);
    return false;
  }
}

export async function POST(request: Request) {
  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Kısa sürede çok fazla başvuru gönderildi. Lütfen bir süre sonra tekrar deneyin.",
      },
      { status: 429 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Başvuru içeriği okunamadı." },
      { status: 400 },
    );
  }

  // Bot tuzagi doldurulmussa sessizce basarili don.
  if (String(form.get("website") ?? "").trim() !== "") {
    return NextResponse.json({ ok: true, reference: referenceCode() });
  }

  const input = {
    fullName: String(form.get("fullName") ?? "").trim(),
    phone: String(form.get("phone") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    applicantType: String(form.get("applicantType") ?? "").trim(),
    expertiseArea: String(form.get("expertiseArea") ?? "").trim(),
    subject: String(form.get("subject") ?? "").trim(),
    message: String(form.get("message") ?? "").trim(),
    kvkkConsent: String(form.get("kvkkConsent") ?? "") === "true",
    contactConsent: String(form.get("contactConsent") ?? "") === "true",
  };

  const errors: FieldErrors = validatePreReview(input);

  const rawFiles = form.getAll("files").filter((item): item is File => item instanceof File);
  const attachments: Attachment[] = [];
  let totalBytes = 0;

  if (rawFiles.length > upload.maxFiles) {
    errors.files = `En fazla ${upload.maxFiles} dosya yükleyebilirsiniz.`;
  } else {
    for (const file of rawFiles) {
      if (!(upload.allowedMimeTypes as readonly string[]).includes(file.type)) {
        errors.files = `${file.name}: yalnızca ${upload.acceptLabel} dosyaları kabul edilir.`;
        break;
      }
      if (file.size > upload.maxFileBytes) {
        errors.files = `${file.name}: dosya boyutu sınırı aşıldı.`;
        break;
      }
      totalBytes += file.size;
      attachments.push({ name: file.name, size: file.size, type: file.type });
    }
    if (!errors.files && totalBytes > upload.maxTotalBytes) {
      errors.files = "Toplam dosya boyutu sınırı aşıldı.";
    }
  }

  if (hasErrors(errors)) {
    return NextResponse.json(
      { ok: false, message: "Lütfen işaretli alanları kontrol edin.", errors },
      { status: 422 },
    );
  }

  const reference = referenceCode();
  const delivered = await deliver({
    reference,
    receivedAt: new Date().toISOString(),
    ...input,
    attachments,
    attachmentCount: attachments.length,
    totalAttachmentBytes: totalBytes,
    source: request.headers.get("referer") ?? null,
  });

  if (!delivered) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Başvurunuz şu anda iletilemedi. Lütfen tekrar deneyin veya bize doğrudan ulaşın.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, reference });
}
