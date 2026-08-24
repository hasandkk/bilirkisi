export type ExpertiseArea = {
  slug: string;
  index: string;
  title: string;
  navTitle: string;
  shortTitle: string;
  icon: IconKey;
  summary: string;
  description: string;
  intro: string[];
  services: string[];
  questions: string[];
  documents: string[];
  scopeNote: string;
  ctaLabel: string;
  seoTitle: string;
  seoDescription: string;
  relatedPages: string[];
};

export type IconKey =
  | "vehicle"
  | "fire"
  | "building"
  | "estate"
  | "safety"
  | "digital"
  | "document";

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "trafik-kazalari-ve-otomotiv",
    index: "01",
    title: "Trafik Kazaları ve Otomotiv",
    navTitle: "Trafik Kazaları ve Otomotiv",
    shortTitle: "Trafik ve Otomotiv",
    icon: "vehicle",
    summary:
      "Kaza oluşumu, araç hasarı, mekanik arıza ve onarım süreçlerinin teknik incelenmesi.",
    description:
      "Trafik kazalarının oluşumu, araç hasarları, mekanik arızalar, onarım süreçleri ve otomotiv uyuşmazlıklarının teknik açıdan incelenmesi.",
    intro: [
      "Trafik kazası ve otomotiv uyuşmazlıklarında tartışma çoğu zaman hukuki değil tekniktir: kaza anlatıldığı şekilde gerçekleşebilir mi, hasarlar birbiriyle uyumlu mudur, arıza kullanım hatasından mı yoksa imalat veya servis kaynaklı bir sorundan mı doğmuştur?",
      "Teminat Rapor, bu soruları dosyadaki belgeler, fotoğraflar, ekspertiz kayıtları, servis ve onarım evrakları ile teknik veriler üzerinden ele alır; bulguları gerekçelendirilmiş bir teknik değerlendirmeye dönüştürür.",
    ],
    services: [
      "Trafik kazası teknik analizi",
      "Kaza rekonstrüksiyonu",
      "Araç hasar analizi",
      "Pert / total loss değerlendirmesi",
      "Araç rayiç analizi",
      "Hasar maliyet analizi",
      "Hatalı onarım incelemesi",
      "Gizli hasar incelemesi",
      "Ayıplı araç uyuşmazlıkları",
      "Servis hatası iddialarının incelenmesi",
      "Motor arızası incelemesi",
      "Şanzıman arızası incelemesi",
      "Teknik kusur değerlendirmesi",
      "Sigorta uyuşmazlıklarında teknik inceleme",
      "Sigorta tahkim dosyalarının teknik incelenmesi",
      "Mevcut teknik rapor incelemesi",
    ],
    questions: [
      "Kaza, dosyada anlatıldığı şekilde gerçekleşmiş olabilir mi?",
      "Araçtaki hasarlar birbiriyle ve olay yeri verileriyle uyumlu mu?",
      "Bu araç teknik ve ekonomik kriterler açısından pert kapsamında değerlendirilebilir mi?",
      "Onarım, tekniğine uygun biçimde yapılmış mı?",
      "Arızanın oluşum mekanizması nedir; bakım, kullanım ya da imalat ile ilişkilendirilebilir mi?",
      "Hasar maliyeti ve araç rayiç değeri hangi kriterlerle hesaplanmıştır?",
    ],
    documents: [
      "Kaza tespit tutanağı ve olay yeri fotoğrafları",
      "Araç hasar fotoğrafları ve ekspertiz raporları",
      "Servis, bakım ve onarım kayıtları, fatura ve iş emirleri",
      "Sigorta hasar dosyası ve varsa mevcut teknik raporlar",
      "Araç ruhsatı, kilometre ve tramer bilgileri",
    ],
    scopeNote:
      "İnceleme, dosyaya sunulan belge, fotoğraf ve verilerle sınırlıdır. Aracın fiziki muayenesinin mümkün olduğu durumlarda yerinde inceleme ayrıca planlanır.",
    ctaLabel: "Otomotiv İncelemelerini Gör",
    seoTitle: "Trafik Kazaları ve Otomotiv Teknik İnceleme",
    seoDescription:
      "Trafik kazası teknik analizi, kaza rekonstrüksiyonu, araç hasar ve pert değerlendirmesi, hatalı onarım ve servis hatası iddialarında dosya bazlı teknik inceleme ve uzman görüşü.",
    relatedPages: [
      "/trafik-kazasi-teknik-inceleme",
      "/kaza-rekonstruksiyonu",
      "/arac-hasar-teknik-inceleme",
      "/pert-total-inceleme",
      "/otomotiv-uzman-gorusu",
    ],
  },
  {
    slug: "yangin-ve-endustriyel-hasar",
    index: "02",
    title: "Yangın ve Endüstriyel Hasar İncelemeleri",
    navTitle: "Yangın ve Endüstriyel Hasar",
    shortTitle: "Yangın ve Endüstriyel Hasar",
    icon: "fire",
    summary:
      "Fabrika, tesis, depo ve makine hasarlarında kapsam, mekanizma ve maliyet değerlendirmesi.",
    description:
      "Fabrika, üretim tesisi, depo, işyeri, makine ve endüstriyel tesislerde meydana gelen yangın ve fiziksel hasarların teknik açıdan değerlendirilmesi.",
    intro: [
      "Endüstriyel yangın ve hasar dosyaları, hem hasarın kapsamı hem de oluşum mekanizması bakımından çok katmanlı teknik sorular içerir. Üretim durması, makine parkının kullanılabilirliği ve onarım maliyeti çoğu zaman ayrı ayrı incelenmesi gereken başlıklardır.",
      "Teminat Rapor bu dosyalarda; hasar kapsamını, etkilenen ekipmanın durumunu, yangının olası oluşum mekanizmalarını ve onarım/yenileme maliyetlerini ilgili uzmanlık alanları kapsamında sistematik biçimde değerlendirir.",
    ],
    services: [
      "Fabrika yangınlarının teknik incelenmesi",
      "İşyeri yangınları",
      "Depo yangınları",
      "Üretim tesisi yangınları",
      "Makine yangınları",
      "Elektrik kaynaklı yangın iddialarının değerlendirilmesi",
      "Endüstriyel tesis hasarları",
      "Yangının başlangıç bölgesinin teknik değerlendirilmesi",
      "Yangının olası oluşum mekanizmalarının incelenmesi",
      "Hasar kapsamının belirlenmesi",
      "Makine ve ekipman hasar incelemesi",
      "Yangın sonrası kullanılabilirlik değerlendirmesi",
      "Yangın sonrası onarım maliyet analizi",
      "Sigorta hasar dosyasının teknik incelenmesi",
      "Rücu dosyalarının teknik incelenmesi",
    ],
    questions: [
      "Yangın hangi bölgede başlamış olabilir?",
      "Hasarın kapsamı ve etkilediği üretim alanları nelerdir?",
      "Makine ve ekipman yangın sonrası kullanılabilir durumda mıdır?",
      "Onarım, yenileme ve devreye alma maliyetleri hangi kalemlerden oluşur?",
      "Hasar dosyasındaki teknik tespitler dosya verileriyle uyumlu mu?",
      "Rücu değerlendirmesine esas teknik bulgular nelerdir?",
    ],
    documents: [
      "İtfaiye raporu ve olay yeri fotoğraf/video kayıtları",
      "Tesis yerleşim planı, makine listesi ve üretim akışı",
      "Bakım kayıtları, periyodik kontrol ve muayene belgeleri",
      "Sigorta poliçesi, hasar dosyası ve varsa eksper raporları",
      "Onarım teklifleri, faturalar ve yenileme maliyet belgeleri",
    ],
    scopeNote:
      "Yangının kesin çıkış sebebinin tespiti; elektrik, kimya veya benzeri ayrı bir uzmanlık gerektiren konularda yalnızca ilgili uzman tarafından değerlendirilebilir. Teminat Rapor, her yangının kesin sebebinin tespit edileceği yönünde bir taahhütte bulunmaz; inceleme, mevcut bulgular ışığında olası oluşum mekanizmalarının teknik olarak değerlendirilmesi kapsamındadır.",
    ctaLabel: "Yangın ve Hasar İncelemesi",
    seoTitle: "Yangın ve Endüstriyel Hasar Teknik İncelemesi",
    seoDescription:
      "Fabrika, depo ve üretim tesisi yangınları ile makine ve ekipman hasarlarında hasar kapsamı, kullanılabilirlik ve onarım maliyetine yönelik teknik inceleme ve uzman görüşü.",
    relatedPages: [
      "/fabrika-yangini-teknik-inceleme",
      "/yangin-hasar-inceleme",
      "/endustriyel-yangin-inceleme",
      "/makine-hasar-inceleme",
    ],
  },
  {
    slug: "insaat-ve-yapi",
    index: "03",
    title: "İnşaat ve Yapı İncelemeleri",
    navTitle: "İnşaat ve Yapı",
    shortTitle: "İnşaat ve Yapı",
    icon: "building",
    summary:
      "Yapı hasarları, imalat kusurları, projeye aykırılık ve maliyet uyuşmazlıklarının incelenmesi.",
    description:
      "Yapı, imalat, uygulama ve inşaat uyuşmazlıklarında teknik inceleme ve değerlendirme.",
    intro: [
      "İnşaat uyuşmazlıklarında taraflar genellikle aynı yapıya bakar ancak farklı sonuçlara ulaşır. Çatlağın nedeni, imalatın projeye uygunluğu, eksik iş kalemleri ve onarım maliyeti; her biri ayrı ayrı gerekçelendirilmesi gereken teknik başlıklardır.",
      "Teminat Rapor; proje, metraj, hakediş ve yerinde tespit verilerini birlikte değerlendirerek uyuşmazlığın teknik çerçevesini ortaya koyar.",
    ],
    services: [
      "Yapı hasarlarının incelenmesi",
      "İnşaat kusurlarının değerlendirilmesi",
      "Eksik ve hatalı imalat tespiti",
      "Projeye aykırılık iddialarının incelenmesi",
      "İşçilik kusurlarının değerlendirilmesi",
      "Yapısal hasar incelemesi",
      "Yapıdaki çatlak ve deformasyonların değerlendirilmesi",
      "Su ve nem kaynaklı hasarların incelenmesi",
      "İnşaat maliyet değerlendirmeleri",
      "Hakediş uyuşmazlıklarının teknik incelenmesi",
      "Yapı onarım maliyeti hesaplaması",
      "İnşaat teknik dosya incelemesi",
    ],
    questions: [
      "Yapıdaki hasarın olası nedeni nedir?",
      "İmalat, projeye ve teknik gerekliliklere uygun mu?",
      "Çatlak ve deformasyonlar yapısal mı, yüzeysel mi olarak değerlendirilmelidir?",
      "Su ve nem kaynaklı hasarın kaynağı hangi imalat kalemiyle ilişkilidir?",
      "Eksik ve hatalı imalatın onarım maliyeti nedir?",
      "Hakediş ve metraj uyuşmazlığında teknik olarak hangi kalemler tartışmalıdır?",
    ],
    documents: [
      "Mimari ve statik projeler, teknik şartname ve detaylar",
      "Metraj, keşif, hakediş ve sözleşme ekleri",
      "Yapı denetim tutanakları ve malzeme deney raporları",
      "Hasar fotoğrafları, tespit tutanakları ve yazışmalar",
      "Onarım teklifleri ve maliyet belgeleri",
    ],
    scopeNote:
      "Yapının taşıyıcı sistem güvenliğine ilişkin değerlendirmeler, gerekli hâllerde yerinde inceleme ve ilgili uzmanlık alanının katılımı ile yapılandırılır. Laboratuvar deneyi gerektiren konular akredite kuruluşlarca yürütülür.",
    ctaLabel: "İnşaat ve Yapı İncelemeleri",
    seoTitle: "İnşaat ve Yapı Teknik İncelemesi",
    seoDescription:
      "Yapı hasarları, inşaat kusurları, eksik ve hatalı imalat, projeye aykırılık ve hakediş uyuşmazlıklarında teknik inceleme, maliyet değerlendirmesi ve uzman görüşü.",
    relatedPages: [
      "/insaat-teknik-inceleme",
      "/yapi-hasar-inceleme",
      "/hatali-imalat-inceleme",
    ],
  },
  {
    slug: "tasinmaz-degerleme",
    index: "04",
    title: "Taşınmaz Değerleme",
    navTitle: "Taşınmaz Değerleme",
    shortTitle: "Taşınmaz",
    icon: "estate",
    summary:
      "Gayrimenkullerin teknik ve ekonomik özelliklerinin incelenmesi ve değer analizi.",
    description:
      "Gayrimenkullerin teknik ve ekonomik özelliklerinin incelenmesi ve ilgili uzmanlık kapsamında değerleme çalışmaları.",
    intro: [
      "Taşınmaz uyuşmazlıklarında değer tartışması, çoğu zaman hangi kriterlerin dikkate alındığı tartışmasıdır. Konum, imar durumu, yapı özellikleri, kullanım şekli ve emsal seçimi sonucu doğrudan etkiler.",
      "Teminat Rapor, taşınmazın teknik ve ekonomik özelliklerini inceleyerek değer analizinde kullanılan kriterleri açık ve izlenebilir biçimde ortaya koyar.",
    ],
    services: [
      "Konut",
      "Arsa",
      "Tarla",
      "Ticari gayrimenkul",
      "Fabrika",
      "Depo",
      "Sanayi tesisi",
      "İş yeri",
      "Gayrimenkul değer analizi",
      "Kira değeri incelemesi",
      "Değer uyuşmazlıklarının teknik incelenmesi",
    ],
    questions: [
      "Taşınmaz değerlemesinde hangi kriterler dikkate alınmalıdır?",
      "Emsal seçimi hangi ölçütlere göre yapılmıştır?",
      "İmar durumu ve yapı özellikleri değeri nasıl etkiler?",
      "Kira değeri incelemesinde hangi veriler kullanılır?",
      "Mevcut değerleme çalışmasındaki teknik kabuller tutarlı mı?",
    ],
    documents: [
      "Tapu kaydı, imar durumu ve çap/plan örnekleri",
      "Yapı ruhsatı, yapı kullanma izin belgesi ve projeler",
      "Kira sözleşmeleri ve kullanım bilgileri",
      "Taşınmaz fotoğrafları ve konum bilgileri",
      "Varsa mevcut değerleme çalışmaları",
    ],
    scopeNote:
      "Sermaye piyasası mevzuatı uyarınca yetkili değerleme kuruluşlarınca düzenlenmesi zorunlu olan resmî değerleme raporları, ilgili lisans ve yetkiye sahip kuruluşlar tarafından hazırlanır. Teminat Rapor bu kapsamdaki çalışmalarda, gerekli yetkiye sahip uzmanlarla eşleştirme yapar ve kapsamı başvuru aşamasında açıkça belirtir.",
    ctaLabel: "Taşınmaz İncelemeleri",
    seoTitle: "Taşınmaz Değerleme ve Değer Analizi",
    seoDescription:
      "Konut, arsa, ticari gayrimenkul, fabrika ve depo taşınmazlarında teknik ve ekonomik özelliklerin incelenmesi, değer analizi ve kira değeri değerlendirmesi.",
    relatedPages: ["/tasinmaz-degerleme"],
  },
  {
    slug: "is-kazalari",
    index: "05",
    title: "İş Kazaları ve Çalışma Ortamı Teknik İncelemeleri",
    navTitle: "İş Kazaları",
    shortTitle: "İş Kazaları",
    icon: "safety",
    summary:
      "Kazanın teknik oluşum mekanizması, makine güvenliği ve çalışma ortamının incelenmesi.",
    description:
      "İş kazalarının teknik oluşum mekanizması, kullanılan makine ve ekipmanlar, çalışma ortamı ve iş güvenliği tedbirlerinin ilgili uzmanlık kapsamında incelenmesi.",
    intro: [
      "İş kazası dosyalarında teknik soru genellikle nettir: kaza hangi mekanizmayla oluşmuştur ve bu mekanizma hangi teknik koşullarla ilişkilidir? Makine koruyucuları, ekipman durumu, çalışma yöntemi ve ortam koşulları bu sorunun bileşenleridir.",
      "Teknik inceleme; olayın oluşumunu, ilgili ekipmanın durumunu ve alınan teknik tedbirleri belge ve bulgular üzerinden değerlendirir.",
    ],
    services: [
      "İş kazası oluşum analizi",
      "Makine kaynaklı kazaların incelenmesi",
      "Ekipman güvenliği değerlendirmesi",
      "İş güvenliği tedbirlerinin teknik incelemesi",
      "Fabrika kazaları",
      "Üretim hattı kazaları",
      "Yüksekte çalışma kazaları",
      "İş makinesi kazaları",
      "Teknik nedensellik analizi",
    ],
    questions: [
      "İş kazasının teknik oluşum mekanizması nedir?",
      "Makine ve ekipmanda koruyucu/emniyet sistemleri hangi durumdadır?",
      "Çalışma yöntemi ve ortam koşulları olayla nasıl ilişkilendirilebilir?",
      "Periyodik kontrol ve bakım kayıtları teknik açıdan ne göstermektedir?",
      "Olay öncesi ve sonrası teknik tespitler birbiriyle tutarlı mı?",
    ],
    documents: [
      "Kaza bildirim formu, tutanaklar ve olay yeri fotoğrafları",
      "Makine/ekipman kullanma kılavuzları ve periyodik kontrol raporları",
      "Risk değerlendirmesi, talimatlar ve eğitim kayıtları",
      "Bakım kayıtları ve iş emri belgeleri",
      "Tanık beyanları ve varsa kamera kayıtları",
    ],
    scopeNote:
      "Tıbbi maluliyet, hastalık teşhisi ve sağlık durumuna ilişkin değerlendirmeler bu incelemenin kapsamı dışındadır; bu konular yalnızca ilgili sağlık uzmanları tarafından değerlendirilebilir. İnceleme, olayın teknik oluşum mekanizması ve teknik koşullarla sınırlıdır.",
    ctaLabel: "İş Kazası Teknik İncelemesi",
    seoTitle: "İş Kazası Teknik İncelemesi",
    seoDescription:
      "İş kazalarının teknik oluşum mekanizması, makine ve ekipman güvenliği, çalışma ortamı ve teknik nedensellik analizine yönelik uzman incelemesi.",
    relatedPages: ["/is-kazasi-teknik-inceleme"],
  },
  {
    slug: "bilisim-ve-siber-guvenlik",
    index: "06",
    title: "Bilişim ve Dijital İnceleme",
    navTitle: "Bilişim ve Siber Güvenlik",
    shortTitle: "Bilişim",
    icon: "digital",
    summary:
      "Dijital veri, sistem kayıtları ve siber olayların teknik değerlendirilmesi.",
    description:
      "Dijital sistemler, bilişim altyapıları ve elektronik verilerle ilişkili teknik uyuşmazlıkların ilgili uzmanlar tarafından incelenmesi.",
    intro: [
      "Bilişim uyuşmazlıklarında dosyanın belirleyici unsuru çoğu zaman kayıtlardır: hangi işlem, hangi hesapla, hangi zaman damgasıyla ve hangi sistem üzerinden gerçekleşmiştir?",
      "Teminat Rapor; sistem kayıtları, log verileri ve dijital materyaller üzerinde, verinin bütünlüğünü gözeten bir yöntemle teknik değerlendirme yapılmasını sağlar.",
    ],
    services: [
      "Dijital veri inceleme",
      "Sistem kayıtlarının incelenmesi",
      "Log analizi",
      "Siber olayların teknik değerlendirilmesi",
      "Veri kaybı incelemeleri",
      "Bilgi sistemi uyuşmazlıkları",
      "Dijital delillerin teknik analizi",
      "Yetkisiz erişim iddialarının teknik incelenmesi",
      "Sistem ve yazılım kaynaklı teknik uyuşmazlıklar",
    ],
    questions: [
      "Dijital kayıtlarda hangi teknik veriler bulunmaktadır?",
      "Log kayıtları iddia edilen işlem akışını teknik olarak destekliyor mu?",
      "Yetkisiz erişim iddiası sistem kayıtlarıyla nasıl değerlendirilebilir?",
      "Veri kaybının teknik nedeni ve kapsamı nedir?",
      "Yazılım/sistem teslimi sözleşme ve teknik şartnameye uygun mu?",
    ],
    documents: [
      "Sistem ve uygulama log kayıtları",
      "Sunucu, ağ ve güvenlik cihazı yapılandırmaları",
      "Yedekleme kayıtları ve veri saklama politikaları",
      "Yazılım sözleşmesi, teknik şartname ve teslim tutanakları",
      "İnceleme konusu dijital materyal ve imaj kayıtları",
    ],
    scopeNote:
      "Dijital materyal incelemelerinde veri bütünlüğünün korunması esastır. İnceleme, hukuka uygun biçimde temin edilmiş ve incelenmesi için yetki verilmiş veriler üzerinde yapılır.",
    ctaLabel: "Bilişim İncelemesi",
    seoTitle: "Bilişim ve Dijital Teknik İnceleme",
    seoDescription:
      "Dijital veri inceleme, log analizi, siber olayların teknik değerlendirilmesi, veri kaybı ve yetkisiz erişim iddialarında teknik inceleme ve uzman görüşü.",
    relatedPages: ["/bilisim-teknik-inceleme", "/siber-guvenlik-teknik-inceleme"],
  },
  {
    slug: "imza-ve-belge-inceleme",
    index: "07",
    title: "İmza ve Belge İncelemeleri",
    navTitle: "İmza ve Belge İnceleme",
    shortTitle: "İmza ve Belge",
    icon: "document",
    summary:
      "İmza, el yazısı ve belgeler üzerinde karşılaştırmalı teknik inceleme.",
    description:
      "İmza, el yazısı ve belgelerle ilişkili teknik incelemelerin ilgili uzmanlık alanı kapsamında değerlendirilmesi.",
    intro: [
      "İmza ve belge incelemelerinde sonucun niteliği, karşılaştırmaya esas materyalin niteliğine ve sayısına bağlıdır. Yeterli ve uygun mukayese materyali bulunmayan dosyalarda değerlendirmenin sınırları açıkça belirtilir.",
      "Teminat Rapor, inceleme konusu belge ile mukayese materyalini karşılaştırmalı yöntemle ele alır ve bulguları gerekçeleriyle birlikte raporlar.",
    ],
    services: [
      "İmza incelemesi",
      "El yazısı incelemesi",
      "Belge incelemesi",
      "Belgedeki fiziki değişikliklerin değerlendirilmesi",
      "Karşılaştırmalı teknik inceleme",
    ],
    questions: [
      "Belge veya imza üzerinde teknik inceleme gerekiyor mu?",
      "Mukayese materyali inceleme için yeterli nitelikte mi?",
      "Belge üzerinde fiziki bir değişiklik izi bulunuyor mu?",
      "İnceleme konusu yazı ile mukayese yazıları arasında hangi teknik benzerlik ve farklılıklar vardır?",
    ],
    documents: [
      "İnceleme konusu belgenin aslı veya en iyi nüshası",
      "Uygun tarih aralığına ait mukayese imza/yazı örnekleri",
      "Belgenin düzenlenme koşullarına ilişkin bilgiler",
      "Varsa daha önce düzenlenmiş inceleme raporları",
    ],
    scopeNote:
      "İnceleme sonucunda ulaşılan değerlendirmeler, incelenen materyalin niteliği ve mukayese örneklerinin yeterliliği ile sınırlıdır. Mutlak nitelikte sonuç taahhüdü verilmez; bulguların yeterli olmadığı hâllerde bu durum raporda açıkça belirtilir.",
    ctaLabel: "Belge İnceleme Talebi",
    seoTitle: "İmza ve Belge İnceleme",
    seoDescription:
      "İmza incelemesi, el yazısı incelemesi, belge incelemesi ve belgedeki fiziki değişikliklerin karşılaştırmalı teknik yöntemle değerlendirilmesi.",
    relatedPages: ["/imza-inceleme", "/belge-inceleme"],
  },
];

export const expertiseBySlug = Object.fromEntries(
  expertiseAreas.map((area) => [area.slug, area]),
) as Record<string, ExpertiseArea>;

export function getExpertise(slug: string): ExpertiseArea | undefined {
  return expertiseBySlug[slug];
}
