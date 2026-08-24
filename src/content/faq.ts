export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Teminat Rapor tam olarak hangi hizmeti veriyor?",
    answer:
      "Teminat Rapor; trafik kazaları ve otomotiv, yangın ve endüstriyel hasar, inşaat ve yapı, taşınmaz, iş kazaları, bilişim ve belge inceleme alanlarında özel teknik inceleme, uzman görüşü, teknik mütalaa ve teknik raporlama hizmeti sunar. Çalışma, dosyanın teknik sorularının belirlenmesi ve bu soruların ilgili uzmanlık alanı kapsamında gerekçeli biçimde değerlendirilmesi esasına dayanır.",
  },
  {
    question:
      "Bu hizmet, yargı mercilerinin yaptığı görevlendirmelerle aynı şey mi?",
    answer:
      "Hayır. Teminat Rapor tarafından sunulan özel teknik inceleme, uzman görüşü ve danışmanlık hizmetleri; mahkeme, savcılık veya diğer yargı mercileri tarafından gerçekleştirilen resmî bilirkişi görevlendirmelerinden bağımsızdır. Teminat Rapor, talep eden tarafın başvurusu üzerine özel teknik inceleme yapar ve teknik değerlendirmesini raporlar.",
  },
  {
    question: "Raporun dosyada nasıl kullanılacağına kim karar verir?",
    answer:
      "Teknik değerlendirmenin dosyada nasıl ve hangi usulle kullanılacağı, tamamen başvuru sahibinin ve varsa vekilinin hukuki değerlendirmesine bağlıdır. Teminat Rapor teknik inceleme yapar; usule ve hukuki stratejiye ilişkin bir yönlendirmede bulunmaz.",
  },
  {
    question: "İnceleme ne kadar sürer?",
    answer:
      "Süre; dosyanın kapsamına, belge sayısına, gereken uzmanlık alanlarına ve yerinde inceleme ihtiyacına göre değişir. Ön inceleme aşamasında dosyanın kapsamı değerlendirilir ve öngörülen çalışma süresi başvuru sahibine yazılı olarak bildirilir.",
  },
  {
    question: "Hangi belgeleri göndermem gerekiyor?",
    answer:
      "Başlangıç için uyuşmazlığın konusunu anlatan kısa bir özet ile elinizdeki temel belgeler yeterlidir: fotoğraflar, tutanaklar, sözleşmeler, faturalar, mevcut raporlar ve varsa teknik çizimler. Ön inceleme sonrasında dosyanın ihtiyaç duyduğu ek belgeler ayrıca bildirilir.",
  },
  {
    question: "Yerinde inceleme yapılıyor mu?",
    answer:
      "Dosyanın niteliği gerektiriyorsa yerinde inceleme planlanır. Özellikle yangın ve endüstriyel hasar, inşaat ve yapı ile iş kazası dosyalarında fiziki inceleme, değerlendirmenin dayanağını güçlendirir. Yerinde inceleme kapsamı ve koşulları çalışma öncesinde belirlenir.",
  },
  {
    question: "Sonuç garantisi veriliyor mu?",
    answer:
      "Hayır. Teknik inceleme, mevcut belge, veri ve bulgular üzerinden yürütülen bir değerlendirmedir. Bulguların yeterli olmadığı durumlarda bu husus raporda açıkça belirtilir. Teminat Rapor, sonuca ilişkin herhangi bir taahhütte bulunmaz; incelemenin kapsamını ve sınırlarını açıkça ifade eder.",
  },
  {
    question: "Birden fazla uzmanlık alanı gerektiren dosyalarda ne yapılıyor?",
    answer:
      "Dosyanın teknik soruları belirlenir, hangi uzmanlık alanlarının gerektiği tespit edilir ve inceleme bu alanların birlikte çalışacağı bir yapıda kurgulanır. Örneğin bir fabrika yangını dosyasında yangın, elektrik, makine, inşaat ve hasar maliyeti başlıkları birlikte değerlendirilebilir.",
  },
  {
    question: "Türkiye genelinde çalışıyor musunuz?",
    answer:
      "Evet. Dosya incelemeleri Türkiye genelinden kabul edilir. Belge ve veri üzerinden yürütülen incelemeler uzaktan yapılabilir; yerinde inceleme gerektiren dosyalarda çalışma programı ayrıca planlanır.",
  },
  {
    question: "Gönderdiğim belgeler gizli tutuluyor mu?",
    answer:
      "İletilen tüm bilgi ve belgeler gizlilik esasına göre işlenir; yalnızca dosyanın incelenmesi amacıyla ve ilgili uzmanlar tarafından kullanılır. Kişisel verilerin işlenmesine ilişkin ayrıntılar KVKK Aydınlatma Metni'nde açıklanmıştır.",
  },
];
