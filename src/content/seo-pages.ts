/**
 * Bagimsiz SEO sayfalari.
 * Her kayit /<slug> adresinde tekil bir landing sayfasi olusturur.
 */

export type SeoBlock = {
  title: string;
  items: string[];
};

export type SeoPage = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  area: string;
  intro: string[];
  blocks: SeoBlock[];
  questions: string[];
  documents: string[];
  note?: string;
  related: string[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "trafik-kazasi-teknik-inceleme",
    h1: "Trafik Kazası Teknik İnceleme",
    metaTitle: "Trafik Kazası Teknik İnceleme ve Uzman Görüşü",
    metaDescription:
      "Trafik kazalarının oluşumu, hasar uyumluluğu ve teknik nedensellik ilişkisinin dosya bazlı incelenmesi. Kaza dosyalarında gerekçeli teknik değerlendirme ve uzman görüşü.",
    eyebrow: "Trafik Kazaları ve Otomotiv",
    area: "trafik-kazalari-ve-otomotiv",
    intro: [
      "Trafik kazası dosyalarında tartışmanın merkezinde çoğu zaman tek bir soru vardır: olay, dosyada anlatıldığı biçimde gerçekleşmiş olabilir mi? Bu sorunun cevabı; araçlardaki hasar izleri, çarpışma geometrisi, olay yeri verileri ve tarafların beyanlarının birlikte değerlendirilmesini gerektirir.",
      "Trafik kazası teknik incelemesi, dosyadaki verileri sistematik biçimde ele alarak kazanın oluşumuna ilişkin teknik bulguları ortaya koyar ve bu bulguları gerekçeleriyle birlikte raporlar.",
    ],
    blocks: [
      {
        title: "İnceleme kapsamı",
        items: [
          "Kaza oluşum biçiminin teknik olarak değerlendirilmesi",
          "Araç hasarlarının birbiriyle ve olay yeri verileriyle uyumluluğu",
          "Çarpışma geometrisi ve temas bölgelerinin incelenmesi",
          "Beyan ile fiziki bulguların karşılaştırılması",
          "Teknik nedensellik değerlendirmesi",
          "Mevcut teknik raporların incelenmesi",
        ],
      },
      {
        title: "Hangi dosyalarda başvurulur?",
        items: [
          "Tarafların kaza oluşumunda anlaşamadığı dosyalar",
          "Hasar–beyan uyumsuzluğu iddiası bulunan sigorta dosyaları",
          "Rücu ve tazminat uyuşmazlıkları",
          "Sigorta tahkim dosyaları",
          "Mevcut rapora karşı teknik değerlendirme ihtiyacı",
        ],
      },
    ],
    questions: [
      "Kaza anlatıldığı şekilde gerçekleşmiş olabilir mi?",
      "Hasarlar hangi temas mekanizmasıyla açıklanabilir?",
      "Araçların çarpışma öncesi konum ve hareketleri hakkında hangi teknik bulgular vardır?",
      "Dosyadaki mevcut teknik rapor bulgularla tutarlı mı?",
    ],
    documents: [
      "Kaza tespit tutanağı",
      "Olay yeri ve araç fotoğrafları",
      "Ekspertiz ve hasar dosyası",
      "Varsa kamera kayıtları",
      "Mevcut teknik raporlar",
    ],
    related: ["/kaza-rekonstruksiyonu", "/arac-hasar-teknik-inceleme", "/otomotiv-uzman-gorusu"],
  },
  {
    slug: "otomotiv-uzman-gorusu",
    h1: "Otomotiv Uzman Görüşü",
    metaTitle: "Otomotiv Uzman Görüşü ve Teknik Mütalaa",
    metaDescription:
      "Ayıplı araç, servis hatası, hatalı onarım, motor ve şanzıman arızası uyuşmazlıklarında otomotiv alanında teknik inceleme ve gerekçeli uzman görüşü.",
    eyebrow: "Trafik Kazaları ve Otomotiv",
    area: "trafik-kazalari-ve-otomotiv",
    intro: [
      "Otomotiv uyuşmazlıklarında arızanın kaynağı; imalat, bakım, kullanım veya onarım süreçlerinden birine ya da birkaçına dayanabilir. Bu ayrımın yapılabilmesi, aracın teknik geçmişinin ve arıza belirtilerinin birlikte incelenmesine bağlıdır.",
      "Otomotiv uzman görüşü; servis kayıtları, arıza kodları, onarım evrakları ve fiziki bulgular üzerinden arızanın oluşum mekanizmasını teknik olarak değerlendirir.",
    ],
    blocks: [
      {
        title: "Başlıca inceleme konuları",
        items: [
          "Ayıplı araç iddialarının teknik değerlendirmesi",
          "Servis hatası ve hatalı onarım incelemesi",
          "Motor ve şanzıman arızalarının oluşum mekanizması",
          "Bakım ve kullanım kaynaklı arıza ayrımı",
          "Garanti kapsamı tartışmalarında teknik bulgular",
          "Gizli hasar tespiti",
        ],
      },
      {
        title: "Değerlendirmede kullanılan veriler",
        items: [
          "Servis ve bakım geçmişi",
          "Arıza kayıtları ve teşhis raporları",
          "Onarım iş emirleri ve parça faturaları",
          "Araç fotoğrafları ve fiziki bulgular",
          "Üretici teknik dokümanları",
        ],
      },
    ],
    questions: [
      "Arızanın teknik oluşum mekanizması nedir?",
      "Servis işlemi tekniğine uygun yapılmış mı?",
      "Arıza kullanım veya bakım eksikliğiyle açıklanabilir mi?",
      "Araç teslim edildiğinde gizli hasar bulunduğu söylenebilir mi?",
    ],
    documents: [
      "Servis ve bakım kayıtları",
      "Arıza teşhis çıktıları",
      "Fatura, iş emri ve garanti belgeleri",
      "Araç fotoğrafları",
      "Satış sözleşmesi ve yazışmalar",
    ],
    related: ["/arac-hasar-teknik-inceleme", "/trafik-kazasi-teknik-inceleme", "/pert-total-inceleme"],
  },
  {
    slug: "arac-hasar-teknik-inceleme",
    h1: "Araç Hasar Teknik İncelemesi",
    metaTitle: "Araç Hasar Teknik İncelemesi ve Maliyet Analizi",
    metaDescription:
      "Araç hasarlarının kapsamı, onarım yöntemi ve maliyetinin teknik olarak incelenmesi; hasar–beyan uyumu ve onarım kalitesinin değerlendirilmesi.",
    eyebrow: "Trafik Kazaları ve Otomotiv",
    area: "trafik-kazalari-ve-otomotiv",
    intro: [
      "Araç hasar incelemesinde iki başlık birlikte ele alınır: hasarın kapsamı ve bu hasarın giderilmesi için gereken teknik işlemler. Onarım yönteminin seçimi, doğrudan maliyeti ve aracın onarım sonrası durumunu etkiler.",
      "İnceleme; hasarlı parçaların tespiti, onarım/değişim ayrımı, işçilik kalemleri ve maliyet hesabını izlenebilir bir tabloya dönüştürür.",
    ],
    blocks: [
      {
        title: "İnceleme başlıkları",
        items: [
          "Hasar kapsamının belirlenmesi",
          "Onarım ve değişim ayrımının teknik değerlendirmesi",
          "İşçilik ve boya kalemlerinin incelenmesi",
          "Hasar maliyet analizi",
          "Onarım kalitesinin değerlendirilmesi",
          "Değer kaybına esas teknik verilerin ortaya konması",
        ],
      },
      {
        title: "Sık karşılaşılan uyuşmazlıklar",
        items: [
          "Onarım bedelinin fazla veya eksik hesaplandığı iddiası",
          "Değişmesi gereken parçanın onarıldığı iddiası",
          "Hasarın kaza ile ilişkisiz olduğu iddiası",
          "Onarım sonrası kalıcı kusur bulunduğu iddiası",
        ],
      },
    ],
    questions: [
      "Hasarın kapsamı teknik olarak nedir?",
      "Hangi parçalar onarılabilir, hangileri değişmelidir?",
      "Hesaplanan onarım maliyeti hangi kalemlerden oluşuyor?",
      "Onarım tekniğine uygun yapılmış mı?",
    ],
    documents: [
      "Hasar fotoğrafları (detaylı ve genel)",
      "Ekspertiz ve hasar dosyası",
      "Onarım teklifi ve faturalar",
      "Parça listeleri ve iş emirleri",
    ],
    related: ["/pert-total-inceleme", "/otomotiv-uzman-gorusu", "/trafik-kazasi-teknik-inceleme"],
  },
  {
    slug: "pert-total-inceleme",
    h1: "Pert / Total Loss İncelemesi",
    metaTitle: "Pert (Total Loss) Değerlendirmesi ve Teknik İnceleme",
    metaDescription:
      "Aracın pert kapsamında değerlendirilip değerlendirilemeyeceğinin teknik ve ekonomik kriterlerle incelenmesi; hasar maliyeti ve rayiç değer analizi.",
    eyebrow: "Trafik Kazaları ve Otomotiv",
    area: "trafik-kazalari-ve-otomotiv",
    intro: [
      "Pert değerlendirmesi, hasar maliyeti ile aracın kaza öncesi rayiç değeri arasındaki ilişkiye dayanır. Bu nedenle hem onarım kalemlerinin hem de rayiç değerin ayrı ayrı ve doğru biçimde belirlenmesi gerekir.",
      "İnceleme, iki hesabın da dayanaklarını göstererek aracın teknik ve ekonomik açıdan pert kapsamında değerlendirilip değerlendirilemeyeceğini ortaya koyar.",
    ],
    blocks: [
      {
        title: "İnceleme adımları",
        items: [
          "Hasar kapsamının belirlenmesi",
          "Onarım maliyetinin kalem bazında hesaplanması",
          "Kaza öncesi rayiç değerin analizi",
          "Sovtaj (hurda/kalıntı) değerinin değerlendirilmesi",
          "Teknik onarılabilirlik değerlendirmesi",
          "Sonuçların karşılaştırmalı tabloya dönüştürülmesi",
        ],
      },
      {
        title: "Tartışmalı noktalar",
        items: [
          "Rayiç değerin düşük veya yüksek belirlendiği iddiası",
          "Onarım maliyetine dâhil edilen kalemler",
          "Şasi ve taşıyıcı aksam hasarının değerlendirilmesi",
          "Aracın onarım sonrası kullanılabilirliği",
        ],
      },
    ],
    questions: [
      "Bu araç gerçekten pert midir?",
      "Onarım maliyeti hangi kalemlerden oluşmaktadır?",
      "Kaza öncesi rayiç değer hangi verilere göre belirlenmiştir?",
      "Aracın taşıyıcı aksamındaki hasar onarılabilir nitelikte mi?",
    ],
    documents: [
      "Hasar fotoğrafları",
      "Ekspertiz ve hasar dosyası",
      "Onarım teklifi ve parça listeleri",
      "Araç ruhsatı, kilometre ve donanım bilgileri",
    ],
    related: ["/arac-hasar-teknik-inceleme", "/otomotiv-uzman-gorusu", "/trafik-kazasi-teknik-inceleme"],
  },
  {
    slug: "kaza-rekonstruksiyonu",
    h1: "Kaza Rekonstrüksiyonu",
    metaTitle: "Kaza Rekonstrüksiyonu ve Teknik Analiz",
    metaDescription:
      "Trafik kazalarının oluş sırasının fiziki bulgular, hasar izleri ve olay yeri verileri üzerinden teknik olarak yeniden kurgulanması ve değerlendirilmesi.",
    eyebrow: "Trafik Kazaları ve Otomotiv",
    area: "trafik-kazalari-ve-otomotiv",
    intro: [
      "Kaza rekonstrüksiyonu, olayın nasıl geliştiğini fiziki bulgular üzerinden yeniden kurgulama çalışmasıdır. Fren ve kayma izleri, temas bölgeleri, deformasyon yönleri ve son konumlar bu kurgunun temel verileridir.",
      "Çalışma, elde edilen verilerle uyumlu olay akışlarını ortaya koyar; verilerin yetersiz kaldığı noktalarda bu sınır açıkça belirtilir.",
    ],
    blocks: [
      {
        title: "Kullanılan veriler",
        items: [
          "Olay yeri krokisi ve fotoğrafları",
          "Fren, kayma ve sürtünme izleri",
          "Araç deformasyon yönleri ve temas bölgeleri",
          "Araçların son konumları",
          "Kamera kayıtları ve varsa araç verileri",
          "Tanık ve taraf beyanları",
        ],
      },
      {
        title: "Çalışmanın çıktıları",
        items: [
          "Olay akışının teknik olarak kurgulanması",
          "Beyanlarla fiziki bulguların karşılaştırılması",
          "Çarpışma geometrisinin değerlendirilmesi",
          "Kroki ve şemalarla desteklenmiş açıklama",
        ],
      },
    ],
    questions: [
      "Kazanın oluş sırası fiziki bulgularla nasıl açıklanabilir?",
      "Beyan edilen akış bulgularla uyumlu mu?",
      "Temas bölgeleri hangi çarpışma geometrisine işaret ediyor?",
      "Mevcut veriler bir kurgu oluşturmak için yeterli mi?",
    ],
    documents: [
      "Olay yeri krokisi ve tutanaklar",
      "Detaylı olay yeri ve araç fotoğrafları",
      "Kamera kayıtları",
      "Ekspertiz raporları",
    ],
    note: "Rekonstrüksiyon çalışmasının güvenilirliği, olay yeri ve araç verilerinin niteliğine bağlıdır. Veri yetersizliği hâlinde bu durum raporda açıkça belirtilir.",
    related: ["/trafik-kazasi-teknik-inceleme", "/arac-hasar-teknik-inceleme", "/otomotiv-uzman-gorusu"],
  },
  {
    slug: "fabrika-yangini-teknik-inceleme",
    h1: "Fabrika Yangını Teknik İnceleme",
    metaTitle: "Fabrika Yangını Teknik İncelemesi ve Hasar Analizi",
    metaDescription:
      "Fabrika ve üretim tesisi yangınlarında hasar kapsamı, etkilenen makine ve ekipmanın durumu, olası oluşum mekanizmaları ve onarım maliyetinin teknik incelenmesi.",
    eyebrow: "Yangın ve Endüstriyel Hasar",
    area: "yangin-ve-endustriyel-hasar",
    intro: [
      "Fabrika yangınları, üretim hattının bütününü etkileyebilen ve çok sayıda teknik başlığı aynı anda gündeme getiren dosyalardır. Yapı, makine parkı, elektrik tesisatı, stok ve üretim kaybı ayrı ayrı değerlendirilmesi gereken kalemlerdir.",
      "Teknik inceleme; hasarın kapsamını, ekipmanın kullanılabilirlik durumunu, yangının olası oluşum mekanizmalarını ve onarım/yenileme maliyetlerini sistematik biçimde ele alır.",
    ],
    blocks: [
      {
        title: "İnceleme başlıkları",
        items: [
          "Hasar kapsamının bölge bölge belirlenmesi",
          "Yangının başlangıç bölgesinin teknik değerlendirilmesi",
          "Olası oluşum mekanizmalarının incelenmesi",
          "Makine ve ekipman hasarının değerlendirilmesi",
          "Yangın sonrası kullanılabilirlik incelemesi",
          "Onarım, yenileme ve devreye alma maliyet analizi",
        ],
      },
      {
        title: "Sigorta ve rücu boyutu",
        items: [
          "Hasar dosyasının teknik incelenmesi",
          "Eksper tespitlerinin teknik değerlendirmesi",
          "Rücu dosyalarında teknik nedensellik",
          "Hasar kalemlerinin poliçe kapsamıyla teknik ilişkisi",
        ],
      },
    ],
    questions: [
      "Yangın hangi bölgede başlamış olabilir?",
      "Hasarın kapsamı ve etkilenen üretim alanları nelerdir?",
      "Makineler yangın sonrası kullanılabilir durumda mı?",
      "Onarım ve yenileme maliyeti hangi kalemlerden oluşur?",
    ],
    documents: [
      "İtfaiye raporu",
      "Olay yeri fotoğraf ve video kayıtları",
      "Tesis yerleşim planı ve makine listesi",
      "Bakım ve periyodik kontrol kayıtları",
      "Sigorta poliçesi ve hasar dosyası",
    ],
    note: "Yangının kesin çıkış sebebi; elektrik, kimya veya benzeri ayrı bir uzmanlık gerektiren konularda yalnızca ilgili uzman tarafından değerlendirilebilir. Her dosyada kesin sebep tespiti yapılacağı yönünde bir taahhüt verilmez.",
    related: ["/yangin-hasar-inceleme", "/endustriyel-yangin-inceleme", "/makine-hasar-inceleme"],
  },
  {
    slug: "yangin-hasar-inceleme",
    h1: "Yangın Hasar İncelemesi",
    metaTitle: "Yangın Hasar İncelemesi ve Teknik Değerlendirme",
    metaDescription:
      "İşyeri, depo ve tesis yangınlarında hasarın kapsamı, etkilenen yapı ve ekipmanın durumu ile onarım maliyetinin teknik olarak incelenmesi.",
    eyebrow: "Yangın ve Endüstriyel Hasar",
    area: "yangin-ve-endustriyel-hasar",
    intro: [
      "Yangın hasar incelemesinde temel soru, hasarın gerçek kapsamıdır. Doğrudan yanma hasarının yanında ısı, duman, is ve söndürme suyu kaynaklı etkiler de hasar kapsamının parçasıdır.",
      "İnceleme, bu etkileri ayrı ayrı değerlendirerek onarılabilir ve yenilenmesi gereken kalemleri teknik gerekçeleriyle ortaya koyar.",
    ],
    blocks: [
      {
        title: "Hasar türleri",
        items: [
          "Doğrudan yanma hasarı",
          "Isı etkisiyle oluşan deformasyonlar",
          "Duman ve is kaynaklı hasar",
          "Söndürme suyu ve müdahale kaynaklı hasar",
          "Elektrik ve elektronik ekipmanda ikincil hasar",
          "Stok ve emtia hasarı",
        ],
      },
      {
        title: "Değerlendirme çıktıları",
        items: [
          "Hasar envanteri ve kapsam tablosu",
          "Onarım/yenileme ayrımı",
          "Maliyet analizi",
          "Kullanılabilirlik değerlendirmesi",
        ],
      },
    ],
    questions: [
      "Hasarın kapsamı ve türleri nelerdir?",
      "Hangi kalemler onarılabilir, hangileri yenilenmelidir?",
      "Duman ve su kaynaklı ikincil hasar nasıl değerlendirilmelidir?",
      "Toplam onarım maliyeti nasıl hesaplanmıştır?",
    ],
    documents: [
      "İtfaiye raporu ve tutanaklar",
      "Hasar fotoğrafları",
      "Emtia ve demirbaş listeleri",
      "Onarım teklifleri ve faturalar",
      "Sigorta hasar dosyası",
    ],
    related: ["/fabrika-yangini-teknik-inceleme", "/endustriyel-yangin-inceleme", "/makine-hasar-inceleme"],
  },
  {
    slug: "endustriyel-yangin-inceleme",
    h1: "Endüstriyel Yangın İncelemesi",
    metaTitle: "Endüstriyel Yangın İncelemesi ve Tesis Hasar Analizi",
    metaDescription:
      "Endüstriyel tesislerde yangın ve fiziksel hasarların kapsamı, üretim sürekliliğine etkisi ve teknik oluşum mekanizmalarının değerlendirilmesi.",
    eyebrow: "Yangın ve Endüstriyel Hasar",
    area: "yangin-ve-endustriyel-hasar",
    intro: [
      "Endüstriyel yangın dosyaları, üretim süreçlerinin kendine özgü koşulları nedeniyle standart bir hasar incelemesinden farklıdır. Proses ekipmanı, otomasyon sistemleri, enerji altyapısı ve depolama koşulları birlikte değerlendirilmelidir.",
      "İnceleme, tesisin işleyişini dikkate alarak hasarın teknik kapsamını ve üretim sürekliliğine etkisini ortaya koyar.",
    ],
    blocks: [
      {
        title: "Tesis bazlı inceleme konuları",
        items: [
          "Proses ekipmanı ve üretim hattı hasarı",
          "Otomasyon ve kontrol sistemlerinin durumu",
          "Enerji ve tesisat altyapısındaki hasar",
          "Depolama alanları ve stok hasarı",
          "Yapısal elemanlardaki ısı etkisi",
          "Üretim sürekliliğine ilişkin teknik tespitler",
        ],
      },
      {
        title: "Raporlama yaklaşımı",
        items: [
          "Bölge bazlı hasar haritası",
          "Ekipman envanteri ve durum değerlendirmesi",
          "Yenileme ve devreye alma maliyeti",
          "Teknik bulguların gerekçelendirilmesi",
        ],
      },
    ],
    questions: [
      "Tesisin hangi bölümleri ne ölçüde etkilenmiştir?",
      "Proses ekipmanı yeniden devreye alınabilir mi?",
      "Otomasyon ve elektrik altyapısındaki hasarın kapsamı nedir?",
      "Yeniden üretime geçiş için hangi teknik adımlar gerekir?",
    ],
    documents: [
      "Tesis yerleşim planı ve proses akış şemaları",
      "Makine ve ekipman envanteri",
      "Elektrik ve otomasyon projeleri",
      "Hasar fotoğrafları ve itfaiye raporu",
      "Bakım ve kontrol kayıtları",
    ],
    note: "Yangının kesin çıkış sebebinin belirlenmesi ayrı bir uzmanlık alanının değerlendirmesini gerektirebilir; bu husus dosya bazında açıkça belirtilir.",
    related: ["/fabrika-yangini-teknik-inceleme", "/makine-hasar-inceleme", "/yangin-hasar-inceleme"],
  },
  {
    slug: "makine-hasar-inceleme",
    h1: "Makine Hasar İncelemesi",
    metaTitle: "Makine ve Ekipman Hasar İncelemesi",
    metaDescription:
      "Makine ve ekipman hasarlarının oluşum nedeni, kullanılabilirlik durumu ve onarım maliyetinin teknik olarak incelenmesi ve raporlanması.",
    eyebrow: "Yangın ve Endüstriyel Hasar",
    area: "yangin-ve-endustriyel-hasar",
    intro: [
      "Makine hasarlarında tartışma genellikle hasarın nedeni üzerinde yoğunlaşır: kullanım hatası mı, bakım eksikliği mi, imalat kaynaklı bir sorun mu, yoksa dışarıdan gelen bir etki mi?",
      "İnceleme; hasar izleri, bakım geçmişi ve çalışma koşullarını birlikte değerlendirerek olası oluşum mekanizmalarını teknik gerekçeleriyle ortaya koyar.",
    ],
    blocks: [
      {
        title: "İnceleme konuları",
        items: [
          "Hasarın oluşum mekanizmasının değerlendirilmesi",
          "Bakım ve kullanım kaynaklı etkilerin ayrıştırılması",
          "Aşınma, yorulma ve kırılma izlerinin incelenmesi",
          "Kullanılabilirlik ve onarılabilirlik değerlendirmesi",
          "Onarım ve yenileme maliyet analizi",
          "Üretim kaybına ilişkin teknik tespitler",
        ],
      },
      {
        title: "Sık görülen uyuşmazlıklar",
        items: [
          "Garanti kapsamı tartışmaları",
          "Bakım sözleşmesinden doğan uyuşmazlıklar",
          "Yeni makine tesliminde ayıp iddiaları",
          "Sigorta makine kırılması dosyaları",
        ],
      },
    ],
    questions: [
      "Makine veya ekipmanda hasarın oluşum nedeni nedir?",
      "Hasar bakım eksikliğiyle ilişkilendirilebilir mi?",
      "Makine onarılabilir durumda mı?",
      "Onarım ve yenileme maliyeti nedir?",
    ],
    documents: [
      "Makine kullanma ve bakım kılavuzları",
      "Bakım, arıza ve iş emri kayıtları",
      "Periyodik kontrol raporları",
      "Hasar fotoğrafları ve varsa parça numuneleri",
      "Satın alma ve garanti belgeleri",
    ],
    related: ["/endustriyel-yangin-inceleme", "/fabrika-yangini-teknik-inceleme", "/is-kazasi-teknik-inceleme"],
  },
  {
    slug: "insaat-teknik-inceleme",
    h1: "İnşaat Teknik İnceleme",
    metaTitle: "İnşaat Teknik İncelemesi ve Uyuşmazlık Değerlendirmesi",
    metaDescription:
      "İnşaat uyuşmazlıklarında imalat, metraj, hakediş ve kusur iddialarının proje ve saha verileri üzerinden teknik olarak incelenmesi.",
    eyebrow: "İnşaat ve Yapı",
    area: "insaat-ve-yapi",
    intro: [
      "İnşaat uyuşmazlıklarında teknik inceleme, iddiaların proje ve sözleşme belgeleriyle karşılaştırılmasıyla başlar. İmalatın ne olduğu, ne olması gerektiği ve aradaki farkın maliyeti üç ayrı sorudur.",
      "İnceleme bu üç soruyu ayrı ayrı ele alır ve bulguları metraj ve maliyet tablolarıyla destekler.",
    ],
    blocks: [
      {
        title: "İnceleme kapsamı",
        items: [
          "İmalatın projeye ve şartnameye uygunluğu",
          "Eksik ve hatalı imalat tespiti",
          "Metraj ve hakediş incelemesi",
          "İşçilik kusurlarının değerlendirilmesi",
          "Onarım maliyeti hesabı",
          "Teslim ve kabul aşamasındaki teknik tespitler",
        ],
      },
      {
        title: "Kullanılan belgeler",
        items: [
          "Mimari, statik ve tesisat projeleri",
          "Teknik şartname ve sözleşme ekleri",
          "Metraj, keşif ve hakediş dosyaları",
          "Yapı denetim tutanakları",
          "Saha fotoğrafları ve tespit tutanakları",
        ],
      },
    ],
    questions: [
      "İmalat projeye ve teknik gerekliliklere uygun mu?",
      "Hangi iş kalemleri eksik veya hatalı yapılmıştır?",
      "Hakediş hesabındaki teknik uyuşmazlık nereden kaynaklanıyor?",
      "Eksikliklerin giderilme maliyeti nedir?",
    ],
    documents: [
      "Projeler ve teknik şartnameler",
      "Sözleşme ve ekleri",
      "Hakediş ve metraj belgeleri",
      "Saha fotoğrafları",
      "Yazışmalar ve tutanaklar",
    ],
    related: ["/yapi-hasar-inceleme", "/hatali-imalat-inceleme", "/tasinmaz-degerleme"],
  },
  {
    slug: "yapi-hasar-inceleme",
    h1: "Yapı Hasar İncelemesi",
    metaTitle: "Yapı Hasar İncelemesi ve Teknik Değerlendirme",
    metaDescription:
      "Yapılardaki çatlak, deformasyon, su ve nem kaynaklı hasarların olası nedenlerinin ve onarım maliyetinin teknik olarak incelenmesi.",
    eyebrow: "İnşaat ve Yapı",
    area: "insaat-ve-yapi",
    intro: [
      "Yapı hasarlarında görünen belirti ile hasarın nedeni çoğu zaman aynı yerde değildir. Bir çatlak; oturma, malzeme, uygulama veya çevresel etkilerden kaynaklanabilir.",
      "İnceleme, hasar deseninin teknik okumasını yaparak olası nedenleri değerlendirir ve onarım kapsamını belirler.",
    ],
    blocks: [
      {
        title: "İncelenen hasar türleri",
        items: [
          "Yapısal ve yüzeysel çatlaklar",
          "Oturma ve deformasyon kaynaklı hasarlar",
          "Su ve nem kaynaklı hasarlar",
          "Yalıtım kaynaklı sorunlar",
          "Cephe ve kaplama hasarları",
          "Komşu inşaat faaliyetiyle ilişkilendirilen hasarlar",
        ],
      },
      {
        title: "Değerlendirme yöntemi",
        items: [
          "Hasar deseninin haritalanması",
          "Yapı ve zemin verileriyle karşılaştırma",
          "Uygulama detaylarının incelenmesi",
          "Onarım yöntemi ve maliyetinin belirlenmesi",
        ],
      },
    ],
    questions: [
      "Yapıdaki hasarın olası nedeni nedir?",
      "Çatlaklar yapısal nitelikte mi?",
      "Su ve nem kaynaklı hasarın kaynağı hangi imalattır?",
      "Onarım yöntemi ve maliyeti nedir?",
    ],
    documents: [
      "Yapı projeleri ve detaylar",
      "Zemin etüt raporu",
      "Hasar fotoğrafları ve tespit tutanakları",
      "Yapı denetim kayıtları",
      "Onarım teklifleri",
    ],
    note: "Taşıyıcı sistem güvenliğine ilişkin değerlendirmeler yerinde inceleme ve gerekli hâllerde laboratuvar deneyleri gerektirebilir.",
    related: ["/insaat-teknik-inceleme", "/hatali-imalat-inceleme", "/tasinmaz-degerleme"],
  },
  {
    slug: "hatali-imalat-inceleme",
    h1: "Hatalı İmalat İncelemesi",
    metaTitle: "Hatalı ve Eksik İmalat İncelemesi",
    metaDescription:
      "Eksik ve hatalı imalat iddialarının proje, şartname ve uygulama verileri üzerinden incelenmesi; kusur tespiti ve giderme maliyetinin belirlenmesi.",
    eyebrow: "İnşaat ve Yapı",
    area: "insaat-ve-yapi",
    intro: [
      "Hatalı imalat iddiaları, ancak imalatın ne olması gerektiğinin belgeye dayalı olarak ortaya konmasıyla değerlendirilebilir. Referans; proje, teknik şartname ve ilgili uygulama esaslarıdır.",
      "İnceleme, iddia edilen her kalem için referans–uygulama karşılaştırması yapar ve farkın giderilme maliyetini hesaplar.",
    ],
    blocks: [
      {
        title: "İnceleme yöntemi",
        items: [
          "İmalat kalemlerinin tek tek ele alınması",
          "Proje ve şartname referanslarının belirlenmesi",
          "Uygulamanın yerinde veya belge üzerinden tespiti",
          "Farkların kusur niteliği bakımından değerlendirilmesi",
          "Giderme yöntemi ve maliyetinin hesaplanması",
        ],
      },
      {
        title: "Sık karşılaşılan konular",
        items: [
          "Malzeme değişikliği iddiaları",
          "Ölçü ve detay uyumsuzlukları",
          "İşçilik kusurları",
          "Eksik bırakılan iş kalemleri",
          "Kabul aşamasında tespit edilen kusurlar",
        ],
      },
    ],
    questions: [
      "İmalat hangi noktalarda projeden ayrılıyor?",
      "Bu farklar kusur olarak değerlendirilebilir mi?",
      "Giderme yöntemi teknik olarak nedir?",
      "Giderme maliyeti nasıl hesaplanmıştır?",
    ],
    documents: [
      "Projeler ve teknik şartname",
      "Sözleşme ve iş kalemi listeleri",
      "Saha fotoğrafları",
      "Tutanak ve yazışmalar",
      "Malzeme belgeleri ve deney raporları",
    ],
    related: ["/insaat-teknik-inceleme", "/yapi-hasar-inceleme", "/tasinmaz-degerleme"],
  },
  {
    slug: "tasinmaz-degerleme",
    h1: "Taşınmaz Değerleme",
    metaTitle: "Taşınmaz Değerleme ve Değer Analizi",
    metaDescription:
      "Konut, arsa, ticari gayrimenkul, fabrika ve depo taşınmazlarında teknik ve ekonomik özelliklerin incelenmesi, değer ve kira değeri analizi.",
    eyebrow: "Taşınmaz",
    area: "tasinmaz-degerleme",
    intro: [
      "Taşınmaz değer analizinde sonucu belirleyen şey, kullanılan kriterler ve emsal seçimidir. Konum, imar durumu, yapı özellikleri, kullanım şekli ve pazar verileri birlikte ele alınmalıdır.",
      "İnceleme, değere ulaşırken kullanılan tüm kriterleri ve kabulleri açıkça göstererek analizin izlenebilir olmasını sağlar.",
    ],
    blocks: [
      {
        title: "Taşınmaz türleri",
        items: [
          "Konut ve iş yeri",
          "Arsa ve tarla",
          "Ticari gayrimenkul",
          "Fabrika ve sanayi tesisi",
          "Depo ve lojistik tesis",
        ],
      },
      {
        title: "Analiz başlıkları",
        items: [
          "Konum ve çevresel faktörler",
          "İmar durumu ve yapılaşma koşulları",
          "Yapı özellikleri ve teknik durum",
          "Emsal karşılaştırma analizi",
          "Kira değeri incelemesi",
          "Değer uyuşmazlıklarında teknik değerlendirme",
        ],
      },
    ],
    questions: [
      "Taşınmaz değerlemesinde hangi kriterler dikkate alınmalıdır?",
      "Emsaller hangi ölçütlere göre seçilmiştir?",
      "İmar durumu değeri nasıl etkilemektedir?",
      "Kira değeri hangi verilere dayanmaktadır?",
    ],
    documents: [
      "Tapu kaydı ve imar durum belgesi",
      "Projeler ve yapı kullanma izin belgesi",
      "Kira sözleşmeleri",
      "Taşınmaz fotoğrafları",
      "Varsa mevcut değerleme çalışmaları",
    ],
    note: "Mevzuat uyarınca yetkili değerleme kuruluşlarınca düzenlenmesi zorunlu olan resmî raporlar, ilgili lisans ve yetkiye sahip kuruluşlarca hazırlanır. Çalışmanın kapsamı başvuru aşamasında açıkça belirlenir.",
    related: ["/insaat-teknik-inceleme", "/yapi-hasar-inceleme"],
  },
  {
    slug: "is-kazasi-teknik-inceleme",
    h1: "İş Kazası Teknik İnceleme",
    metaTitle: "İş Kazası Teknik İncelemesi ve Nedensellik Analizi",
    metaDescription:
      "İş kazalarının teknik oluşum mekanizması, makine ve ekipman güvenliği ile çalışma ortamı koşullarının teknik olarak incelenmesi.",
    eyebrow: "İş Kazaları",
    area: "is-kazalari",
    intro: [
      "İş kazası dosyalarında teknik inceleme, olayın nasıl oluştuğunu ortaya koymayı hedefler. Makine koruyucuları, ekipmanın durumu, çalışma yöntemi ve ortam koşulları bu mekanizmanın bileşenleridir.",
      "İnceleme, olay yeri ve ekipman verileri ile kayıtları birlikte değerlendirerek teknik nedensellik ilişkisini gerekçelendirir.",
    ],
    blocks: [
      {
        title: "İnceleme konuları",
        items: [
          "Kazanın teknik oluşum mekanizması",
          "Makine ve ekipman güvenlik sistemleri",
          "Çalışma yöntemi ve iş akışı",
          "Ortam koşullarının değerlendirilmesi",
          "Periyodik kontrol ve bakım kayıtlarının incelenmesi",
          "Teknik nedensellik analizi",
        ],
      },
      {
        title: "Kaza türleri",
        items: [
          "Makine ve üretim hattı kazaları",
          "Yüksekte çalışma kazaları",
          "İş makinesi kazaları",
          "Elektrik kaynaklı olaylar",
          "Malzeme taşıma ve istifleme kazaları",
        ],
      },
    ],
    questions: [
      "İş kazasının teknik oluşum mekanizması nedir?",
      "Koruyucu ve emniyet sistemleri hangi durumdaydı?",
      "Kullanılan çalışma yöntemi teknik açıdan nasıl değerlendirilmelidir?",
      "Periyodik kontrol kayıtları ne göstermektedir?",
    ],
    documents: [
      "Kaza bildirim formu ve tutanaklar",
      "Olay yeri ve ekipman fotoğrafları",
      "Periyodik kontrol ve bakım kayıtları",
      "Risk değerlendirmesi ve talimatlar",
      "Eğitim kayıtları ve tanık beyanları",
    ],
    note: "Tıbbi maluliyet, teşhis ve sağlık değerlendirmeleri bu incelemenin kapsamı dışındadır; bu konular yalnızca ilgili sağlık uzmanlarınca değerlendirilebilir.",
    related: ["/makine-hasar-inceleme", "/fabrika-yangini-teknik-inceleme"],
  },
  {
    slug: "bilisim-teknik-inceleme",
    h1: "Bilişim Teknik İnceleme",
    metaTitle: "Bilişim Teknik İncelemesi ve Dijital Veri Analizi",
    metaDescription:
      "Dijital veri, sistem kayıtları ve log analizine dayalı bilişim uyuşmazlıklarında teknik inceleme ve gerekçeli uzman görüşü.",
    eyebrow: "Bilişim",
    area: "bilisim-ve-siber-guvenlik",
    intro: [
      "Bilişim uyuşmazlıklarında kayıtlar, olayın teknik kronolojisini kuran temel veridir. Hangi işlemin hangi hesapla, hangi sistemde ve hangi zaman damgasıyla gerçekleştiği bu kayıtlardan okunur.",
      "İnceleme, verinin bütünlüğünü gözeten bir yöntemle yürütülür ve bulgular teknik gerekçeleriyle raporlanır.",
    ],
    blocks: [
      {
        title: "İnceleme konuları",
        items: [
          "Sistem ve uygulama loglarının analizi",
          "Dijital materyal üzerinde teknik inceleme",
          "Veri kaybının teknik nedeni ve kapsamı",
          "Yazılım ve sistem teslim uyuşmazlıkları",
          "Elektronik kayıtların teknik değerlendirilmesi",
          "İşlem kronolojisinin oluşturulması",
        ],
      },
      {
        title: "Yöntem",
        items: [
          "Veri bütünlüğünün korunması",
          "İnceleme adımlarının kayıt altına alınması",
          "Bulguların doğrulanabilir biçimde raporlanması",
          "Kapsam ve sınırların açıkça belirtilmesi",
        ],
      },
    ],
    questions: [
      "Dijital kayıtlarda hangi teknik veriler bulunmaktadır?",
      "Kayıtlar iddia edilen işlem akışını destekliyor mu?",
      "Veri kaybının teknik nedeni nedir?",
      "Teslim edilen yazılım şartnameye uygun mu?",
    ],
    documents: [
      "Sistem ve uygulama log kayıtları",
      "Sunucu ve ağ yapılandırmaları",
      "Yedekleme kayıtları",
      "Sözleşme, şartname ve teslim tutanakları",
      "İnceleme konusu dijital materyal",
    ],
    note: "İnceleme, hukuka uygun biçimde temin edilmiş ve incelenmesi için yetki verilmiş veriler üzerinde yapılır.",
    related: ["/siber-guvenlik-teknik-inceleme", "/belge-inceleme"],
  },
  {
    slug: "siber-guvenlik-teknik-inceleme",
    h1: "Siber Güvenlik Teknik İnceleme",
    metaTitle: "Siber Güvenlik Teknik İncelemesi ve Olay Değerlendirmesi",
    metaDescription:
      "Siber olayların teknik değerlendirilmesi, yetkisiz erişim iddialarının incelenmesi ve bilgi sistemleri uyuşmazlıklarında uzman görüşü.",
    eyebrow: "Bilişim",
    area: "bilisim-ve-siber-guvenlik",
    intro: [
      "Siber olay dosyalarında teknik değerlendirme; olayın nasıl gerçekleştiği, hangi sistemleri etkilediği ve mevcut teknik tedbirlerin durumu sorularını kapsar.",
      "İnceleme, sistem kayıtları ve yapılandırma verileri üzerinden olayın teknik çerçevesini ortaya koyar.",
    ],
    blocks: [
      {
        title: "İnceleme konuları",
        items: [
          "Yetkisiz erişim iddialarının teknik incelenmesi",
          "Olayın etki alanının belirlenmesi",
          "Güvenlik yapılandırmalarının teknik değerlendirmesi",
          "Log ve izleme kayıtlarının analizi",
          "Veri sızıntısı iddialarının teknik değerlendirilmesi",
          "Olay sonrası teknik tespitlerin raporlanması",
        ],
      },
      {
        title: "Kurumsal kullanım alanları",
        items: [
          "Sigorta ve sorumluluk dosyaları",
          "Tedarikçi ve hizmet sağlayıcı uyuşmazlıkları",
          "İç inceleme süreçleri",
          "Sözleşmesel yükümlülük tartışmaları",
        ],
      },
    ],
    questions: [
      "Olay teknik olarak nasıl gerçekleşmiş olabilir?",
      "Hangi sistemler ve veriler etkilenmiştir?",
      "Mevcut teknik tedbirler kayıtlarda nasıl görünmektedir?",
      "Kayıtlar iddiaları doğrulayacak nitelikte mi?",
    ],
    documents: [
      "Güvenlik cihazı ve sistem logları",
      "Ağ topolojisi ve yapılandırma dosyaları",
      "Olay müdahale kayıtları",
      "Hizmet sözleşmeleri ve SLA belgeleri",
      "Yedekleme ve saklama politikaları",
    ],
    related: ["/bilisim-teknik-inceleme", "/belge-inceleme"],
  },
  {
    slug: "imza-inceleme",
    h1: "İmza İnceleme",
    metaTitle: "İmza İncelemesi ve Karşılaştırmalı Teknik Değerlendirme",
    metaDescription:
      "İmza ve el yazısı üzerinde karşılaştırmalı teknik inceleme; mukayese materyalinin değerlendirilmesi ve bulguların gerekçeli raporlanması.",
    eyebrow: "İmza ve Belge",
    area: "imza-ve-belge-inceleme",
    intro: [
      "İmza incelemesi, inceleme konusu imza ile uygun mukayese örneklerinin karşılaştırılmasına dayanır. Değerlendirmenin niteliği, doğrudan mukayese materyalinin sayısına, tarihine ve kalitesine bağlıdır.",
      "İnceleme; grafik özellikler, çizgi karakteristikleri ve yapısal unsurlar üzerinden yürütülür ve bulgular gerekçeleriyle raporlanır.",
    ],
    blocks: [
      {
        title: "İnceleme kapsamı",
        items: [
          "İmza incelemesi",
          "El yazısı incelemesi",
          "Karşılaştırmalı teknik inceleme",
          "Mukayese materyalinin yeterlilik değerlendirmesi",
          "Bulguların gerekçelendirilmiş raporlanması",
        ],
      },
      {
        title: "Mukayese materyali",
        items: [
          "İnceleme konusu belgeyle yakın tarihli örnekler",
          "Farklı belge türlerinden alınmış örnekler",
          "Yeterli sayıda ve okunabilir nitelikte örnek",
          "Mümkünse belge asılları",
        ],
      },
    ],
    questions: [
      "Mukayese materyali inceleme için yeterli mi?",
      "İnceleme konusu imza ile mukayese imzalar arasında hangi teknik benzerlik ve farklılıklar vardır?",
      "Belge üzerinde inceleme yapılmasına engel bir durum var mı?",
    ],
    documents: [
      "İnceleme konusu belgenin aslı veya en iyi nüshası",
      "Mukayese imza ve yazı örnekleri",
      "Belgenin düzenlenme koşullarına ilişkin bilgiler",
      "Varsa önceki inceleme raporları",
    ],
    note: "Bulguların yeterli olmadığı hâllerde bu durum raporda açıkça belirtilir; mutlak nitelikte sonuç taahhüdü verilmez.",
    related: ["/belge-inceleme", "/bilisim-teknik-inceleme"],
  },
  {
    slug: "belge-inceleme",
    h1: "Belge İnceleme",
    metaTitle: "Belge İncelemesi ve Fiziki Değişiklik Değerlendirmesi",
    metaDescription:
      "Belgeler üzerinde teknik inceleme; fiziki değişiklik izlerinin, ekleme ve silinti iddialarının karşılaştırmalı yöntemle değerlendirilmesi.",
    eyebrow: "İmza ve Belge",
    area: "imza-ve-belge-inceleme",
    intro: [
      "Belge incelemesi, belgenin fiziki yapısı üzerinden yürütülen teknik bir çalışmadır. Yazı unsurlarının ilişkisi, kâğıt ve mürekkep izleri ile belge üzerindeki müdahale belirtileri incelemenin konusudur.",
      "Çalışma, incelenen belgenin niteliğiyle sınırlı olarak bulguları ortaya koyar ve gerekçeleriyle raporlar.",
    ],
    blocks: [
      {
        title: "İnceleme konuları",
        items: [
          "Belge üzerindeki fiziki değişiklik izleri",
          "Ekleme ve silinti iddialarının değerlendirilmesi",
          "Yazı unsurlarının birbiriyle ilişkisi",
          "Belge bütünlüğünün teknik incelenmesi",
          "Karşılaştırmalı belge incelemesi",
        ],
      },
      {
        title: "İnceleme koşulları",
        items: [
          "Belge aslının incelemeye sunulması tercih edilir",
          "Fotokopi ve tarama üzerinden yapılan incelemelerde sınırlar belirtilir",
          "İnceleme adımları kayıt altına alınır",
          "Belge, incelemeden sonra teslim edilir",
        ],
      },
    ],
    questions: [
      "Belge üzerinde fiziki bir değişiklik izi bulunuyor mu?",
      "Yazı unsurları arasındaki ilişki teknik olarak ne göstermektedir?",
      "Belge aslı olmadan inceleme mümkün mü?",
    ],
    documents: [
      "İnceleme konusu belgenin aslı",
      "Belge ile ilişkili diğer nüshalar",
      "Düzenlenme sürecine ilişkin bilgi ve belgeler",
    ],
    related: ["/imza-inceleme", "/bilisim-teknik-inceleme"],
  },
  {
    slug: "hmk-293-uzman-gorusu",
    h1: "HMK 293 Kapsamında Uzman Görüşü",
    metaTitle: "HMK 293 Uzman Görüşü — Teknik Mütalaa",
    metaDescription:
      "HMK m.293 kapsamında tarafların dosyaya sunabildiği uzman görüşü; teknik soruların belirlenmesi, inceleme yöntemi ve gerekçeli teknik mütalaa hazırlanması.",
    eyebrow: "Tüm Uzmanlık Alanları",
    area: "trafik-kazalari-ve-otomotiv",
    intro: [
      "6100 sayılı Hukuk Muhakemeleri Kanunu'nun 293. maddesi, tarafların dava konusuyla ilgili olarak uzmanından bilimsel mütalaa alabilmesine imkân tanır. Bu görüş, tarafın kendi talebiyle hazırlatılan özel bir teknik çalışmadır.",
      "Teminat Rapor, bu kapsamda hazırlanan çalışmalarda dosyanın teknik sorularını belirler, incelemeyi ilgili uzmanlık alanı içinde yapılandırır ve bulguları gerekçeli bir teknik mütalaaya dönüştürür.",
    ],
    blocks: [
      {
        title: "Çalışmanın kapsamı",
        items: [
          "Dosyanın teknik sorularının belirlenmesi",
          "İnceleme yönteminin ve kapsamının tanımlanması",
          "Belge, veri ve bulguların değerlendirilmesi",
          "Mevcut raporlara ilişkin teknik değerlendirme",
          "Gerekçeli teknik mütalaanın hazırlanması",
          "Kapsam, varsayım ve sınırların açıkça belirtilmesi",
        ],
      },
      {
        title: "Hangi alanlarda hazırlanır?",
        items: [
          "Trafik kazaları ve otomotiv",
          "Yangın ve endüstriyel hasar",
          "İnşaat ve yapı",
          "Taşınmaz ve değer analizi",
          "İş kazaları",
          "Bilişim ve dijital inceleme",
          "İmza ve belge inceleme",
        ],
      },
    ],
    questions: [
      "Dosyada cevaplanması gereken teknik sorular nelerdir?",
      "Mevcut rapordaki teknik kabuller tutarlı mı?",
      "Hangi ek belge ve veriler incelemeyi güçlendirir?",
      "Değerlendirmenin teknik sınırları nelerdir?",
    ],
    documents: [
      "Dava dosyasının ilgili bölümleri",
      "Varsa mevcut teknik raporlar",
      "Uyuşmazlığa konu belge, fotoğraf ve veriler",
      "Sözleşme ve teknik dokümanlar",
    ],
    note: "Teminat Rapor tarafından hazırlanan çalışmalar özel teknik inceleme ve uzman görüşü niteliğindedir; yargı mercileri tarafından gerçekleştirilen resmî görevlendirmelerden bağımsızdır. Çalışmanın dosyada hangi usulle kullanılacağı, tarafın ve vekilinin hukuki değerlendirmesine bağlıdır.",
    related: ["/trafik-kazasi-teknik-inceleme", "/fabrika-yangini-teknik-inceleme", "/insaat-teknik-inceleme"],
  },
];

export const seoPageBySlug = Object.fromEntries(
  seoPages.map((page) => [page.slug, page]),
) as Record<string, SeoPage>;

export const seoSlugs = seoPages.map((page) => page.slug);
