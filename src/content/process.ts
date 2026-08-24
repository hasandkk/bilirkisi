export type ProcessStep = {
  step: string;
  title: string;
  summary: string;
  detail: string;
  outputs: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Başvuru",
    summary: "Dosyanın temel konusu ve belgeleri iletilir.",
    detail:
      "Dosya ön inceleme formu üzerinden uyuşmazlığın konusu, tarafların iddiaları ve mevcut belgeler iletilir. Bu aşamada dosyanın hangi teknik alanla ilgili olduğu ana hatlarıyla belirlenir.",
    outputs: [
      "Dosya konusunun kısa özeti",
      "Mevcut belge ve görsellerin listesi",
      "İletişim ve dosya sorumlusu bilgisi",
    ],
  },
  {
    step: "2",
    title: "Ön İnceleme",
    summary: "Teknik sorular ve gereken uzmanlık alanları belirlenir.",
    detail:
      "İletilen bilgiler değerlendirilerek dosyanın cevaplanması gereken teknik soruları netleştirilir. İncelemenin mümkün olup olmadığı, eksik belgeler ve kapsam bu aşamada açıkça ortaya konur.",
    outputs: [
      "Teknik soru listesi",
      "İnceleme kapsamı ve sınırları",
      "Eksik belge ve bilgi talebi",
    ],
  },
  {
    step: "3",
    title: "Uzmanlık Eşleştirmesi",
    summary: "Dosya uygun teknik uzmanlık alanına yönlendirilir.",
    detail:
      "Belirlenen teknik sorular doğrultusunda dosya, ilgili uzmanlık alanına yönlendirilir. Birden fazla alanın gerektiği dosyalarda multidisipliner bir çalışma yapısı kurulur.",
    outputs: [
      "Görevlendirilecek uzmanlık alanları",
      "Çalışma planı ve zaman aralığı",
      "Kapsam ve çalışma koşullarının yazılı hâle getirilmesi",
    ],
  },
  {
    step: "4",
    title: "Teknik İnceleme",
    summary:
      "Belgeler, fotoğraflar, veriler ve gerekiyorsa fiziksel inceleme değerlendirilir.",
    detail:
      "Dosya kapsamındaki tüm materyal sistematik biçimde incelenir. Gerekli hâllerde yerinde inceleme, ölçüm veya ek veri talebi planlanır; bulgular kayıt altına alınır.",
    outputs: [
      "Belge ve veri incelemesi",
      "Gerekli hâllerde yerinde inceleme",
      "Bulgu ve tespit kayıtları",
    ],
  },
  {
    step: "5",
    title: "Raporlama",
    summary:
      "Teknik bulgular sistematik ve gerekçeli bir değerlendirmeye dönüştürülür.",
    detail:
      "Bulgular; yöntem, dayanak ve gerekçeleriyle birlikte yazılı bir teknik değerlendirmeye dönüştürülür. Değerlendirmenin sınırları ve varsayımları raporda açıkça belirtilir.",
    outputs: [
      "Gerekçeli teknik değerlendirme",
      "Kullanılan yöntem ve dayanaklar",
      "Kapsam, varsayım ve sınırların açıklanması",
    ],
  },
];

export type ReportPrinciple = {
  title: string;
  description: string;
};

/** "Raporlama yaklasimimiz" bolumu. */
export const reportPrinciples: ReportPrinciple[] = [
  {
    title: "Teknik soru odaklı",
    description:
      "Rapor, dosyanın cevaplanması gereken teknik sorularına göre kurgulanır; her başlık bir soruya karşılık gelir.",
  },
  {
    title: "Gerekçeli ve izlenebilir",
    description:
      "Her tespitin hangi belge, ölçüm veya bulguya dayandığı gösterilir; değerlendirmeye giden akış izlenebilir biçimde yazılır.",
  },
  {
    title: "Yöntemi açık",
    description:
      "İncelemede kullanılan yöntem, kabuller ve hesap esasları raporda ayrıca belirtilir.",
  },
  {
    title: "Sınırları belirtilmiş",
    description:
      "İncelenen materyalin kapsamı, eksik veriler ve değerlendirmenin sınırları açıkça ifade edilir; mutlak sonuç iddiasında bulunulmaz.",
  },
  {
    title: "Görsellerle desteklenmiş",
    description:
      "Fotoğraf, kroki, tablo ve hesap ekleriyle bulgular görünür hâle getirilir.",
  },
  {
    title: "Uzmanlık alanı içinde",
    description:
      "Değerlendirme, ilgili uzmanlık alanının sınırları içinde yapılır; başka bir uzmanlık gerektiren konular ayrıca belirtilir.",
  },
];
