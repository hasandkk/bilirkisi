import { applicantTypes, expertiseOptions } from "@/content/form";

export type PreReviewInput = {
  fullName: string;
  phone: string;
  email: string;
  applicantType: string;
  expertiseArea: string;
  subject: string;
  message: string;
  kvkkConsent: boolean;
  contactConsent?: boolean;
};

export type FieldErrors = Partial<Record<keyof PreReviewInput | "files", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
/** TR telefon: bosluk, parantez, tire ve +90 varyasyonlarina izin verir. */
const phonePattern = /^(\+?90[\s-]?)?0?[\s-]?\(?5\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
const anyPhonePattern = /^[+()\d\s-]{10,20}$/;

export function validatePreReview(input: Partial<PreReviewInput>): FieldErrors {
  const errors: FieldErrors = {};

  const fullName = (input.fullName ?? "").trim();
  if (fullName.length < 3) {
    errors.fullName = "Lütfen ad ve soyadınızı yazın.";
  } else if (fullName.length > 120) {
    errors.fullName = "Ad soyad en fazla 120 karakter olabilir.";
  }

  const phone = (input.phone ?? "").trim();
  if (!phone) {
    errors.phone = "Telefon numarası gereklidir.";
  } else if (!phonePattern.test(phone) && !anyPhonePattern.test(phone)) {
    errors.phone = "Geçerli bir telefon numarası girin.";
  }

  const email = (input.email ?? "").trim();
  if (!email) {
    errors.email = "E-posta adresi gereklidir.";
  } else if (!emailPattern.test(email) || email.length > 160) {
    errors.email = "Geçerli bir e-posta adresi girin.";
  }

  const applicantType = (input.applicantType ?? "").trim();
  if (!applicantType) {
    errors.applicantType = "Başvuru türünü seçin.";
  } else if (!(applicantTypes as readonly string[]).includes(applicantType)) {
    errors.applicantType = "Geçersiz başvuru türü.";
  }

  const expertiseArea = (input.expertiseArea ?? "").trim();
  if (!expertiseArea) {
    errors.expertiseArea = "Uzmanlık alanını seçin.";
  } else if (!(expertiseOptions as readonly string[]).includes(expertiseArea)) {
    errors.expertiseArea = "Geçersiz uzmanlık alanı.";
  }

  const subject = (input.subject ?? "").trim();
  if (subject.length < 3) {
    errors.subject = "Dosya konusunu kısaca yazın.";
  } else if (subject.length > 180) {
    errors.subject = "Dosya konusu en fazla 180 karakter olabilir.";
  }

  const message = (input.message ?? "").trim();
  if (message.length < 20) {
    errors.message = "Lütfen en az 20 karakterlik bir açıklama yazın.";
  } else if (message.length > 4000) {
    errors.message = "Açıklama en fazla 4000 karakter olabilir.";
  }

  if (!input.kvkkConsent) {
    errors.kvkkConsent = "Devam edebilmek için aydınlatma metnini onaylamanız gerekir.";
  }

  return errors;
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
