export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  updated: string;
  readingMinutes: number;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "teknik-inceleme-ile-uzman-gorusu-arasindaki-fark",
    title: "Teknik İnceleme, Uzman Görüşü ve Teknik Mütalaa Arasındaki Fark",
    category: "Temel Kavramlar",
    summary:
      "Uygulamada sıkça birbirinin yerine kullanılan üç kavramın kapsamı, çıktısı ve kullanım amacı bakımından farkları.",
    updated: "2025-01-15",
    readingMinutes: 6,
    body: [
      {
        type: "paragraph",
        text: "Teknik uyuşmazlıklarda hazırlanan çalışmalar farklı isimlerle anılır. Bu isimler yalnızca terminoloji farkı değildir; çalışmanın kapsamını, yöntemini ve nasıl kullanılabileceğini de belirler.",
      },
      { type: "heading", text: "Teknik inceleme" },
      {
        type: "paragraph",
        text: "Teknik inceleme, bir olay veya durumun teknik yönlerinin belirli bir yöntemle ele alınmasıdır. Amaç, bulguları tespit etmek ve kayıt altına almaktır. Hasar kapsamının belirlenmesi, bir makinenin durumunun tespiti veya bir yapıdaki çatlak deseninin haritalanması bu kapsamdadır.",
      },
      { type: "heading", text: "Uzman görüşü" },
      {
        type: "paragraph",
        text: "Uzman görüşü, tespit edilen bulgular üzerinden ilgili uzmanlık alanının bilgi birikimiyle yapılan değerlendirmedir. Burada yalnızca 'ne olduğu' değil, 'bunun teknik olarak ne anlama geldiği' de ortaya konur. Değerlendirme, dayanakları ve gerekçeleriyle birlikte açıklanır.",
      },
      { type: "heading", text: "Teknik mütalaa" },
      {
        type: "paragraph",
        text: "Teknik mütalaa, belirli teknik sorulara cevap üretmek üzere yapılandırılmış, kapsamı ve yöntemi baştan tanımlanmış bir çalışmadır. Genellikle mevcut bir dosya ve belirlenmiş sorular üzerinden hazırlanır.",
      },
      { type: "heading", text: "Pratikte nasıl ayrılır?" },
      {
        type: "list",
        items: [
          "Teknik inceleme: durumu tespit eder, bulguyu ortaya koyar.",
          "Uzman görüşü: bulgunun teknik anlamını değerlendirir.",
          "Teknik mütalaa: belirlenmiş sorulara yapılandırılmış cevap üretir.",
        ],
      },
      {
        type: "note",
        text: "Bu çalışmaların tamamı özel talep üzerine hazırlanan teknik çalışmalardır ve yargı mercilerince yapılan resmî görevlendirmelerden bağımsızdır.",
      },
    ],
  },
  {
    slug: "dosya-on-inceleme-icin-hangi-belgeler-gerekir",
    title: "Dosya Ön İnceleme İçin Hangi Belgeler Gerekir?",
    category: "Süreç",
    summary:
      "Başvuru aşamasında iletilen belgelerin niteliği, ön incelemenin hızını ve kapsamını doğrudan belirler.",
    updated: "2025-02-04",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "Ön inceleme, dosyanın teknik olarak neyi tartıştığını anlamak için yapılır. Bu aşamada eksiksiz bir belge seti gerekmez; ancak temel belgelerin bulunması değerlendirmeyi hızlandırır.",
      },
      { type: "heading", text: "Her dosyada faydalı olan belgeler" },
      {
        type: "list",
        items: [
          "Uyuşmazlığın konusunu anlatan kısa bir özet",
          "Tarafların iddialarını gösteren yazışma veya dilekçeler",
          "Olaya ilişkin fotoğraf ve görseller",
          "Varsa daha önce hazırlanmış teknik raporlar",
          "Sözleşme, fatura ve teknik dokümanlar",
        ],
      },
      { type: "heading", text: "Alan bazında öne çıkan belgeler" },
      {
        type: "list",
        items: [
          "Trafik ve otomotiv: kaza tespit tutanağı, hasar fotoğrafları, servis kayıtları",
          "Yangın ve endüstriyel hasar: itfaiye raporu, tesis planı, makine listesi, bakım kayıtları",
          "İnşaat: projeler, şartname, metraj ve hakediş belgeleri",
          "Taşınmaz: tapu kaydı, imar durumu, projeler",
          "İş kazası: kaza bildirim formu, periyodik kontrol raporları, risk değerlendirmesi",
          "Bilişim: log kayıtları, yapılandırma dosyaları, sözleşme ve şartname",
          "İmza ve belge: belge aslı ve uygun mukayese örnekleri",
        ],
      },
      {
        type: "paragraph",
        text: "Eksik belgeler ön inceleme sonrasında ayrıca bildirilir. Bazı dosyalarda tek bir belgenin eklenmesi, incelemenin kapsamını önemli ölçüde değiştirebilir.",
      },
    ],
  },
  {
    slug: "fabrika-yanginlarinda-teknik-degerlendirmenin-sinirlari",
    title: "Fabrika Yangınlarında Teknik Değerlendirmenin Sınırları",
    category: "Yangın ve Endüstriyel Hasar",
    summary:
      "Yangın dosyalarında hangi soruların teknik olarak yanıtlanabileceği, hangilerinin ayrı uzmanlık gerektirdiği.",
    updated: "2025-03-12",
    readingMinutes: 7,
    body: [
      {
        type: "paragraph",
        text: "Fabrika yangını dosyalarında en sık sorulan soru, yangının çıkış sebebidir. Ancak bu soru, her dosyada aynı kesinlikte yanıtlanamaz. Yangın sonrası ortamda bulguların büyük bölümü zarar görmüş olabilir.",
      },
      { type: "heading", text: "Genellikle değerlendirilebilen konular" },
      {
        type: "list",
        items: [
          "Hasarın kapsamı ve bölgesel dağılımı",
          "Yangının başlangıç bölgesine ilişkin teknik değerlendirme",
          "Yayılım yönüne ilişkin bulgular",
          "Makine ve ekipmanın yangın sonrası durumu",
          "Onarım, yenileme ve devreye alma maliyetleri",
        ],
      },
      { type: "heading", text: "Ayrı uzmanlık gerektirebilen konular" },
      {
        type: "list",
        items: [
          "Elektrik tesisatı kaynaklı iddiaların ayrıntılı incelenmesi",
          "Kimyasal madde davranışına ilişkin değerlendirmeler",
          "Laboratuvar analizi gerektiren numune incelemeleri",
          "Yapısal güvenlik değerlendirmeleri",
        ],
      },
      {
        type: "note",
        text: "Her yangın dosyasında kesin çıkış sebebinin tespit edileceği yönünde bir taahhüt verilmez. İnceleme, mevcut bulgular ışığında olası oluşum mekanizmalarının değerlendirilmesi kapsamındadır.",
      },
      {
        type: "paragraph",
        text: "Dosyanın erken aşamasında hangi soruların yanıtlanabileceğinin netleştirilmesi, hem zaman hem de maliyet açısından belirleyicidir. Bu nedenle ön inceleme aşamasında kapsam açıkça tanımlanır.",
      },
    ],
  },
  {
    slug: "arac-pert-degerlendirmesinde-kullanilan-kriterler",
    title: "Araç Pert Değerlendirmesinde Kullanılan Kriterler",
    category: "Trafik ve Otomotiv",
    summary:
      "Pert değerlendirmesi hasar maliyeti ile rayiç değer arasındaki ilişkiye dayanır; iki hesabın da dayanağı gösterilmelidir.",
    updated: "2025-04-02",
    readingMinutes: 6,
    body: [
      {
        type: "paragraph",
        text: "Bir aracın pert kapsamında değerlendirilip değerlendirilemeyeceği, iki ayrı hesabın sonucuna bağlıdır: onarım maliyeti ve kaza öncesi rayiç değer. Uyuşmazlıkların büyük bölümü bu iki hesabın dayanaklarından doğar.",
      },
      { type: "heading", text: "Onarım maliyeti tarafı" },
      {
        type: "list",
        items: [
          "Değişmesi gereken parçaların doğru belirlenmesi",
          "Onarılabilir parçaların gereksiz yere değişim listesine alınmaması",
          "İşçilik ve boya kalemlerinin ayrı ayrı hesaplanması",
          "Parça fiyatlarında hangi kaynağın esas alındığı",
        ],
      },
      { type: "heading", text: "Rayiç değer tarafı" },
      {
        type: "list",
        items: [
          "Aracın marka, model, yaş ve kilometre bilgileri",
          "Donanım seviyesi ve teknik özellikler",
          "Kaza öncesi bakım ve hasar geçmişi",
          "Emsal araç verilerinin seçim ölçütü",
        ],
      },
      {
        type: "paragraph",
        text: "Bu iki hesabın yanında sovtaj (kalıntı) değeri ve aracın taşıyıcı aksamının onarılabilirliği de değerlendirmeye girer. Şasi ve taşıyıcı elemanlardaki hasar, teknik onarılabilirlik açısından ayrıca ele alınır.",
      },
      {
        type: "note",
        text: "Değerlendirme, dosyaya sunulan belge ve fotoğraflarla sınırlıdır. Aracın fiziki incelenebildiği dosyalarda bulguların güvenilirliği artar.",
      },
    ],
  },
  {
    slug: "insaat-uyusmazliklarinda-hakedis-ve-metraj",
    title: "İnşaat Uyuşmazlıklarında Hakediş ve Metraj Tartışmaları",
    category: "İnşaat ve Yapı",
    summary:
      "Hakediş uyuşmazlıklarının çoğu, yapılan işin ölçülmesi ve sözleşmedeki karşılığının belirlenmesiyle çözülür.",
    updated: "2025-05-20",
    readingMinutes: 6,
    body: [
      {
        type: "paragraph",
        text: "İnşaat sözleşmelerinde hakediş, yapılan işin ölçülmesi ve birim fiyatlarla değerlendirilmesi esasına dayanır. Uyuşmazlıklar genellikle üç noktadan doğar: ölçüm, iş kaleminin tanımı ve birim fiyatın uygulanması.",
      },
      { type: "heading", text: "Ölçüm (metraj) tartışmaları" },
      {
        type: "paragraph",
        text: "Metraj, yapılan imalatın miktarıdır. Projeye göre hesaplanan teorik metraj ile sahada gerçekleşen imalat arasındaki fark, hakediş tartışmalarının başlıca kaynağıdır. İnceleme, her iki hesabı da ayrı ayrı ortaya koyar.",
      },
      { type: "heading", text: "İş kalemi tanımı" },
      {
        type: "paragraph",
        text: "Bir imalatın hangi iş kalemi kapsamında değerlendirileceği, doğrudan bedeli etkiler. Sözleşme ve şartname tanımları bu ayrımın referansıdır.",
      },
      { type: "heading", text: "Birim fiyat uygulaması" },
      {
        type: "list",
        items: [
          "Sözleşme birim fiyatlarının kapsamı",
          "Yeni birim fiyat gerektiren imalatlar",
          "Fiyat farkı hesabına esas veriler",
          "İş artışı ve iş eksilişi kalemleri",
        ],
      },
      {
        type: "paragraph",
        text: "Teknik inceleme, bu üç başlığı belge üzerinden ayrıştırarak uyuşmazlığın hangi kalemde ve ne ölçüde bulunduğunu tablo hâlinde gösterir.",
      },
    ],
  },
  {
    slug: "dijital-delil-incelemesinde-veri-butunlugu",
    title: "Dijital İnceleme Çalışmalarında Veri Bütünlüğü",
    category: "Bilişim",
    summary:
      "Dijital materyal üzerinde yapılan incelemenin değeri, verinin bütünlüğünün korunmuş olmasına bağlıdır.",
    updated: "2025-06-08",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "Dijital veriler, üzerinde yapılan her işlemle değişebilen bir yapıya sahiptir. Bu nedenle inceleme sürecinde verinin bütünlüğünün korunması, çalışmanın teknik değerini doğrudan belirler.",
      },
      { type: "heading", text: "Temel ilkeler" },
      {
        type: "list",
        items: [
          "İncelemenin mümkün olduğunca kopya (imaj) üzerinden yapılması",
          "İnceleme adımlarının kayıt altına alınması",
          "Kullanılan araç ve yöntemlerin raporda belirtilmesi",
          "Bulguların doğrulanabilir biçimde sunulması",
        ],
      },
      { type: "heading", text: "Log kayıtlarının değeri" },
      {
        type: "paragraph",
        text: "Sistem ve uygulama logları, olayların teknik kronolojisini kurar. Ancak logların saklama süresi, zaman damgası ayarları ve kayıt seviyesi bulguların yorumunu etkiler. İnceleme bu parametreleri de dikkate alır.",
      },
      {
        type: "note",
        text: "İnceleme yalnızca hukuka uygun biçimde temin edilmiş ve incelenmesi için yetki verilmiş veriler üzerinde yapılır.",
      },
    ],
  },
];

export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
) as Record<string, Article>;
