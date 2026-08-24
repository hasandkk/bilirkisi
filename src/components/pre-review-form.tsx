"use client";

import Link from "next/link";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  applicantTypes,
  expertiseOptions,
  kvkkConsentText,
  kvkkContactConsentText,
  kvkkShortNotice,
  upload,
} from "@/content/form";
import { hasErrors, validatePreReview, type FieldErrors } from "@/lib/validation";
import { cn } from "@/lib/cn";
import { ArrowRightIcon, CheckIcon } from "./icons";

const fieldClass =
  "h-13 w-full border border-line bg-white px-4 text-[0.9375rem] text-ink transition-colors placeholder:text-ink-muted/70 hover:border-navy-300 focus:border-navy-600 focus:outline-none";

const labelClass =
  "mb-2 block font-mono text-[0.6875rem] tracking-[0.12em] text-ink-muted uppercase";

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-[0.8125rem] text-[#b4232a]">
      {message}
    </p>
  );
}

export function PreReviewForm({ defaultArea }: { defaultArea?: string }) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [referenceCode, setReferenceCode] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    const next: File[] = [...files];
    let fileError: string | undefined;

    for (const file of selected) {
      if (next.length >= upload.maxFiles) {
        fileError = `En fazla ${upload.maxFiles} dosya yükleyebilirsiniz.`;
        break;
      }
      if (!(upload.allowedMimeTypes as readonly string[]).includes(file.type)) {
        fileError = `${file.name}: yalnızca ${upload.acceptLabel} dosyaları kabul edilir.`;
        continue;
      }
      if (file.size > upload.maxFileBytes) {
        fileError = `${file.name}: dosya boyutu ${formatBytes(upload.maxFileBytes)} sınırını aşıyor.`;
        continue;
      }
      if (next.some((item) => item.name === file.name && item.size === file.size)) {
        continue;
      }
      next.push(file);
    }

    const total = next.reduce((sum, file) => sum + file.size, 0);
    if (total > upload.maxTotalBytes) {
      fileError = `Toplam dosya boyutu ${formatBytes(upload.maxTotalBytes)} sınırını aşıyor.`;
    } else {
      setFiles(next);
    }

    setErrors((current) => ({ ...current, files: fileError }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((current) => current.filter((_, i) => i !== index));
    setErrors((current) => ({ ...current, files: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const input = {
      fullName: String(data.get("fullName") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      applicantType: String(data.get("applicantType") ?? ""),
      expertiseArea: String(data.get("expertiseArea") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      kvkkConsent: data.get("kvkkConsent") === "on",
      contactConsent: data.get("contactConsent") === "on",
    };

    const nextErrors = validatePreReview(input);
    if (hasErrors(nextErrors)) {
      setErrors(nextErrors);
      setStatus("idle");
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`field-${firstKey}`)?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");
    setServerMessage(null);

    const payload = new FormData();
    Object.entries(input).forEach(([key, value]) => payload.append(key, String(value)));
    payload.append("website", String(data.get("website") ?? ""));
    files.forEach((file) => payload.append("files", file));

    try {
      const response = await fetch("/api/on-inceleme", { method: "POST", body: payload });
      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        reference?: string;
        errors?: FieldErrors;
      };

      if (!response.ok || !result.ok) {
        if (result.errors) setErrors(result.errors);
        setStatus("error");
        setServerMessage(
          result.message ??
            "Başvurunuz gönderilemedi. Lütfen tekrar deneyin veya bize doğrudan ulaşın.",
        );
        return;
      }

      setStatus("success");
      setReferenceCode(result.reference ?? null);
      setFiles([]);
      form.reset();
    } catch {
      setStatus("error");
      setServerMessage(
        "Bağlantı sırasında bir sorun oluştu. Lütfen tekrar deneyin veya bize doğrudan ulaşın.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border border-line bg-white p-8 shadow-card sm:p-12">
        <span className="inline-flex size-14 items-center justify-center border border-gold-500 bg-gold-500/10 text-gold-700">
          <CheckIcon className="size-6" />
        </span>
        <h2 className="mt-7 font-display text-2xl font-semibold text-navy-900">
          Başvurunuz alındı
        </h2>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
          Dosya ön inceleme talebiniz tarafımıza ulaştı. Başvurunuz, teknik soruların ve
          gereken uzmanlık alanlarının belirlenmesi amacıyla değerlendirilecek ve en kısa
          sürede tarafınıza dönüş yapılacaktır.
        </p>
        {referenceCode ? (
          <p className="mt-6 inline-flex items-center gap-3 border border-line bg-surface px-4 py-3 font-mono text-[0.8125rem] tracking-[0.08em] text-navy-900">
            <span className="text-ink-muted">Başvuru referansı:</span>
            {referenceCode}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center border border-navy-900/20 px-6 text-[0.9375rem] font-medium text-navy-900 transition-colors hover:bg-surface"
          >
            Ana Sayfaya Dön
          </Link>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setReferenceCode(null);
            }}
            className="inline-flex h-12 items-center justify-center bg-navy-900 px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-navy-700"
          >
            Yeni Başvuru Oluştur
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-line bg-white p-6 shadow-card sm:p-9"
    >
      {/* Bot tuzagi */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="field-website">Web sitesi</label>
        <input id="field-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="field-fullName" className={labelClass}>
            Ad Soyad <span className="text-gold-600">*</span>
          </label>
          <input
            id="field-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "error-fullName" : undefined}
            className={cn(fieldClass, errors.fullName && "border-[#b4232a]")}
            placeholder="Ad ve soyadınız"
          />
          <FieldError id="error-fullName" message={errors.fullName} />
        </div>

        <div>
          <label htmlFor="field-phone" className={labelClass}>
            Telefon <span className="text-gold-600">*</span>
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
            className={cn(fieldClass, errors.phone && "border-[#b4232a]")}
            placeholder="05XX XXX XX XX"
          />
          <FieldError id="error-phone" message={errors.phone} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-email" className={labelClass}>
            E-posta <span className="text-gold-600">*</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            className={cn(fieldClass, errors.email && "border-[#b4232a]")}
            placeholder="ornek@sirket.com"
          />
          <FieldError id="error-email" message={errors.email} />
        </div>

        <div>
          <label htmlFor="field-applicantType" className={labelClass}>
            Başvuru Türü <span className="text-gold-600">*</span>
          </label>
          <select
            id="field-applicantType"
            name="applicantType"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.applicantType)}
            aria-describedby={errors.applicantType ? "error-applicantType" : undefined}
            className={cn(fieldClass, "appearance-none pr-10", errors.applicantType && "border-[#b4232a]")}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236b7787' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "0.625rem",
            }}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {applicantTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError id="error-applicantType" message={errors.applicantType} />
        </div>

        <div>
          <label htmlFor="field-expertiseArea" className={labelClass}>
            Uzmanlık Alanı <span className="text-gold-600">*</span>
          </label>
          <select
            id="field-expertiseArea"
            name="expertiseArea"
            required
            defaultValue={defaultArea && (expertiseOptions as readonly string[]).includes(defaultArea) ? defaultArea : ""}
            aria-invalid={Boolean(errors.expertiseArea)}
            aria-describedby={errors.expertiseArea ? "error-expertiseArea" : undefined}
            className={cn(fieldClass, "appearance-none pr-10", errors.expertiseArea && "border-[#b4232a]")}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236b7787' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "0.625rem",
            }}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {expertiseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="error-expertiseArea" message={errors.expertiseArea} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-subject" className={labelClass}>
            Dosya Konusu <span className="text-gold-600">*</span>
          </label>
          <input
            id="field-subject"
            name="subject"
            type="text"
            required
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "error-subject" : undefined}
            className={cn(fieldClass, errors.subject && "border-[#b4232a]")}
            placeholder="Örn. Fabrika yangını hasar kapsamı incelemesi"
          />
          <FieldError id="error-subject" message={errors.subject} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-message" className={labelClass}>
            Kısa Açıklama <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={6}
            required
            maxLength={4000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "error-message" : "hint-message"}
            className={cn(
              "w-full resize-y border border-line bg-white px-4 py-3.5 text-[0.9375rem] leading-relaxed text-ink transition-colors placeholder:text-ink-muted/70 hover:border-navy-300 focus:border-navy-600 focus:outline-none",
              errors.message && "border-[#b4232a]",
            )}
            placeholder="Uyuşmazlığın konusunu, tarafların iddialarını ve dosyada cevaplanmasını istediğiniz teknik soruları kısaca açıklayın."
          />
          {!errors.message ? (
            <p id="hint-message" className="mt-2 text-[0.8125rem] text-ink-muted">
              Dosyanın hangi teknik soruyu içerdiğini belirtmeniz, ön incelemeyi hızlandırır.
            </p>
          ) : null}
          <FieldError id="error-message" message={errors.message} />
        </div>

        {/* Dosya yukleme */}
        <div className="sm:col-span-2">
          <span className={labelClass}>Dosya Yükleme</span>
          <label
            htmlFor="field-files"
            className="flex cursor-pointer flex-col items-center justify-center gap-3 border border-dashed border-line bg-surface px-6 py-9 text-center transition-colors hover:border-navy-300 hover:bg-surface-2"
          >
            <svg viewBox="0 0 32 32" className="size-8 text-navy-300" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden>
              <path d="M16 22V6M16 6l-6 6M16 6l6 6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 21v3a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-3" strokeLinecap="round" />
            </svg>
            <span className="text-[0.9375rem] font-medium text-navy-900">
              Dosya seçin veya buraya tıklayın
            </span>
            <span className="text-[0.8125rem] text-ink-muted">
              {upload.acceptLabel} · Dosya başına en fazla {formatBytes(upload.maxFileBytes)} ·
              Toplam {formatBytes(upload.maxTotalBytes)}
            </span>
          </label>
          <input
            ref={fileInputRef}
            id="field-files"
            name="files"
            type="file"
            multiple
            accept={upload.accept}
            onChange={onFilesSelected}
            className="sr-only"
          />
          <FieldError id="error-files" message={errors.files} />

          {files.length > 0 ? (
            <ul className="mt-4 divide-y divide-line border border-line">
              {files.map((file, index) => (
                <li key={`${file.name}-${index}`} className="flex items-center justify-between gap-4 px-4 py-3">
                  <span className="min-w-0 flex-1 truncate text-[0.875rem] text-navy-900">
                    {file.name}
                  </span>
                  <span className="shrink-0 font-mono text-[0.75rem] text-ink-muted">
                    {formatBytes(file.size)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="shrink-0 text-[0.75rem] text-ink-muted underline underline-offset-4 transition-colors hover:text-[#b4232a]"
                  >
                    Kaldır
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {/* KVKK */}
      <div className="mt-9 border-t border-line pt-8">
        <p className="eyebrow mb-4 text-gold-700">Kişisel Verilerin Korunması</p>
        <p className="mb-6 max-w-3xl text-[0.875rem] leading-relaxed text-ink-soft">
          {kvkkShortNotice}
        </p>

        <div className="space-y-4">
          <label htmlFor="field-kvkkConsent" className="flex cursor-pointer items-start gap-3.5">
            <input
              id="field-kvkkConsent"
              name="kvkkConsent"
              type="checkbox"
              required
              aria-invalid={Boolean(errors.kvkkConsent)}
              className="mt-0.5 size-4.5 shrink-0 cursor-pointer accent-[#163A5F]"
            />
            <span className="text-[0.875rem] leading-relaxed text-ink-soft">
              {kvkkConsentText.split("KVKK Aydınlatma Metni")[0]}
              <Link
                href="/kvkk-aydinlatma-metni"
                target="_blank"
                className="text-navy-600 underline underline-offset-4 transition-colors hover:text-gold-700"
              >
                KVKK Aydınlatma Metni
              </Link>
              {kvkkConsentText.split("KVKK Aydınlatma Metni")[1]}{" "}
              <span className="text-gold-600">*</span>
            </span>
          </label>
          <FieldError id="error-kvkkConsent" message={errors.kvkkConsent} />

          <label htmlFor="field-contactConsent" className="flex cursor-pointer items-start gap-3.5">
            <input
              id="field-contactConsent"
              name="contactConsent"
              type="checkbox"
              className="mt-0.5 size-4.5 shrink-0 cursor-pointer accent-[#163A5F]"
            />
            <span className="text-[0.875rem] leading-relaxed text-ink-soft">
              {kvkkContactConsentText}
            </span>
          </label>
        </div>
      </div>

      {status === "error" && serverMessage ? (
        <p role="alert" className="mt-7 border-l-2 border-[#b4232a] bg-[#b4232a]/[0.06] p-4 text-[0.875rem] text-[#8f1c22]">
          {serverMessage}
        </p>
      ) : null}

      <div className="mt-9 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-[0.8125rem] leading-relaxed text-ink-muted">
          Başvurunuz, teknik soruların belirlenmesi amacıyla değerlendirilir. Bu form bir
          hizmet sözleşmesi kurmaz.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 bg-navy-900 px-8 font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-white uppercase transition-colors hover:bg-navy-700 disabled:opacity-60"
        >
          {status === "sending" ? "Gönderiliyor…" : "Dosyayı Ön İncelemeye Gönder"}
          {status === "sending" ? (
            <span
              aria-hidden
              className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
          ) : (
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </button>
      </div>
    </form>
  );
}
