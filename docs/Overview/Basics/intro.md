# Temel Bileşenler

Notus Network Platformu belirlediği temel sorunlara çözüm olarak farklı teknik, mimari yöntem ve geliştirmeler ekleyerek sistemi daha güncel ve erişilebilir hale getirmek üzere çalışmaktadır.

## İşlem Havuzları

Notus Mimarisinin temelde odaklandığı sorunlardan birisi olan madencilerin ölçeklenme sorununa çözüm olarak ağın içerisinde yer alan madencilerin görev dağılım mimarisi tasarlanmıştır. Ölçeklenme sorunlarının temelinde bulunan ağ yoğunluğunu dağıtmanın en etkin yolu olarak işlem havuzlarının çoklanması ön görülmüştür.

Çoklu işlem havuzları platform için;

- Sınırsız işlem havuzu,
- Madenciler / Validatörlerin işlemlere hızlı erişimi,
- Ağ trafik yoğunluğunun dağıtılması gibi farklı avantajlar sağlamaktadır.

## Karma Blok

Günümüzde blok zinciri ağlarında ödeme işlemleri ve akıllı kontratlar olmak üzere 2 blok türü bulunmaktadır. Tüm ağ bu blokları işlemek üzere tasarlanmış olmasına karşın bu yapı farklı seviyedeki farklı ihtiyaçları karşılayamamaktadır. Notus mimarisi tasarlanırken hem kapalı ağ için hem de online kurulan bir ağın blok zinciri ihtiyaçlarını tek bir ağ ile çözülmesi düşünülerek tasarlanmıştır.

Notus mimarisinde her halka farklı bir işlem türünü temsil edebilmektedir. Bu zorunlu olmamakla birlikte işlem durumuna göre bu şekilde olabilmektedir.

Örnek olarak;

- 1 numaralı blok; ödeme işlemlerini alabilir,
- 2 numaralı blok; NFT görselinin saklandığı meta data’yı içerebilir,
- 3 numaralı blok; akıllı kontratları içerebilir,
- 4 numaralı blok; hesap güvenlik datası vb. içerebilmektedir.

Notus network, dosya ve benzeri büyük ham verileri Mainnet’in yoğunluğunu azaltmak için farklı mikro zincirlerde barındırabilecek şekilde tasarlandı.

Blok oluşturma esnasında işlemlerin gruplandırılması süreci şu şekilde çalışmaktadır: Blok türü aynı ise belirlenenen süre aşılmadan havuzdan çekilebilecek olan maximum işlem çekilerek blok oluşturulur. Ya da farklı türde işlemler gelmiş ise ilk gelen türdeki işlem öncelikle yapılarak bir bloğun içerisinde aynı türde işlem olması sağlanmaktadır. Daha sonra diğer tür yapılmaktadır.

Yukarıdaki koşullardan biri karşılandığı durumda blok havuzundan çekilen işlemler blok oluşturma sürecine alınır.

![Blok Mimarisi](/img/whitepaper/blok_yapisi.jpg)

## Nonce Hesaplaması

Blok zincirinde oluşturulan her blok için hesaplanması gereken sayı nonce değeri olarak bilinmektedir. Bu değer Hash algoritması ile hesaplanmakta olup, blok doğruluğunu sağlamaktadır. Nonce değeri her blok için özel olarak hesaplandığı için içerik bütünlüğünü garanti etmektedir. Bu sayede özet algoritmalarının “_Collision_” olarak adlandırılan çakışma sonuçlarından da etkilenmemesi sağlanmaktadır.

Notus mimarisinde nonce sayısı yerine nonce dizisi hesaplanmaktadır. Nonce dizisi hesaplanırken 2 farklı yöntem(Patent Aşamasında) kullanılarak oluşturulmaktadır. Bunlardan birincisi “_Kayar Hesaplama_” olarak adlandırılan yöntemdir. Nonce dizisi hesaplanırken kullanılan ikinci yöntem ise “_Atlamalı Hesaplama_” olarak adlandırılan yöntemdir.

Nonce hesaplama yönteminde farklılığa gidilmesindeki temel motivasyon, blok güvenliğini sağlamanın en bilinen yolu olan zorluk derecesini arttırmaktır. Ancak zorluk derecesini arttırdığımızda ise işlem süresi, işlemci gücü ve enerji ihtiyacı artış göstermektedir. Blok güvenliğinden ödün vermeden daha az işlemci gücü, daha hızlı ve daha az enerji sarfiyatı ile blok oluşturmayı mümkün kılmaktadır.

### Kayar Hesaplama

SHA-256 Kayar hesaplamalı yöntem için adım sayısı (N) değerinin hesaplanması aşağıdaki formül ile hesaplanmaktadır.

N = (α – β) + 1

α = Hash algoritmasının hex uzunluğu

β = zorluk derecesi uzunluğu

---

Kayar nonce hesaplaması için örneğin;

Oluşturulacak blok için SHA-256 özet algoritmasının kullanıldığı senaryoda

![Kayar Hesaplama](/img/whitepaper/kayar.jpg)

Bulunan sayı

1.Adım için: 8.325

2.Adım için: 7.965

3.Adım için: 4.862

…….

……

(N-2). Adım için: 3.258

(N-1). Adım için: 1.542

(N). Adım için: 9.104

Sonuc listesi bir ayraç ile birleştirilecek. Ayraç olarak: # gibi bir değer kullanılabilecektir.

8325 # 7965 # 4862 # …………………..……………… # 3258 # 1542 # 9104

### Atlamalı Hesaplama

SHA-256 Kayar hesaplamalı yöntem için adım sayısı (N) değerinin hesaplanması aşağıdaki formül ile hesaplanmaktadır.

N = Ceil(α – β)

α = Hash algoritmasının hex uzunluğu

β = Zorluk derecesi uzunluğu

![Atlamali Hesaplama](/img/whitepaper/atlamalı.jpg)

Bulunan sayı

1.Adım için: 8.325

2.Adım için: 7.965

3.Adım için: 4.862

…….

……

(N-2). Adım için: 3.258

(N-1). Adım için: 1.542

(N). Adım için: 9.104

Sonuç listesi bir ayraç ile birleştirilecek. Ayraç olarak: # gibi bir değer kullanılabilecektir.

8325 # 7965 # 4862 # …………………..……………… # 3258 # 1542 # 9104

## Madenci / Onaylayıcı

Notus Mimarisinde kilit niteliğini taşıyan geliştirmelerden biri de madenci görev dağılımı yapısıdır. Ölçeklenme sorununa çözüm olarak ağın içerisinde yer alan madencilerin görev dağılım mimarisi tasarlanmıştır. Ölçeklenme sorunlarının temelinde bulunan ağ yoğunluğunu dağıtmanın en etkin yolu olarak işlem havuzlarının çoklanması ön görülmüştür.

![Blok Node Mimarisi](/img/whitepaper/blok_node_mimarisi.jpg)

Mimari 3 halka şeklinde tasarlanmış olup içten dışa doğru şu şekilde sıralanmaktadır:

1. Master Node

   Notus Network tarafından kurulan madencileri temsil eder. Bu düğümlerin IP adresleri kaynak kodun içerisinde gömülü olarak gelmektedir.

2. Main Node

   Tanımlanmış sistem konfigürasyonuna sahip madencileri temsil eder. Bu madencilerin IP adresleri her düğüm tarafından yerel düğümlerin içinde saklanmaktadır.

3. Replicant Node

   a. Full Node

   Network içerisinde üretilen tüm blok kopyalarını tutan ancak yeni blok oluşturmayan düşük sistem konfigürasyonuna sahip düğüm türünü temsil etmektedir.

   b. Light Node

   Network içerisinde üretilen tüm blok imzalarını tutan ancak yeni blok oluşturmayan düğüm türünü temsil etmektedir.

## Madenci / Validator Sıralaması

Notus Network ağına işlem doğrulama amacıyla katılan her düğüm bir cüzdan adresi sahibi olmak zorundadır. Bu cüzdan adresi birinci olarak işlem doğrulayıcının, yaptığı işlemler sonucunda elde ettiği Coin’lerin aktarılacağı hesabı belirler. Bir diğer kullanım yeri ise doğrulayıcıların hangi sıra ile işlem yapacağının belirlenmesidir.

Notus Network işlem doğrulayıcılarının verimli çalışmalarını sağlamak için tüm işlemleri doğrulayıcıların sırayla doğrulama yapacağı şekilde tasarlanmıştır. Bu işlem şu adımlar halinde gerçekleşir.

Her düğüm, kendi cüzdan adresinin diğer düğümlerle paylaştığı gibi diğer düğümlerinde cüzdan adreslerini ister.

![İşlem Protokolü](/img/whitepaper/işlem_protokolü.jpg)

Cüzdan adreslerinin değişimi tamamlandığında:

- Tüm cüzdan adresleri 58’lik sayı sisteminden 10’luk sayı sistemine çevrilir.
- Tüm cüzdan adresleri benzersiz olacağından dolayı ortaya çıkacak sayılarda da çakışma oluşmayacaktır.
- Tüm cüzdan adresleri küçükten büyüğe doğru sıralanır.
- Listeye yeni eklenen düğüme ait cüzdan adresi 2 tur boyunca işlem yapamaz.
- Her düğüm için ayrılan süre 0,2 Saniye’dir
- Her düğüm kendine ayrılan süre içinde işlemi tamamlamazsa tüm düğümler geçerli blok için sıralanmış listedeki diğer düğüme gider.
- Kendisine belirlenen süre içinde 3 kere blok oluşturma işlemini teslim etmeyen düğüm, diğer düğümler tarafından 1 saatlik ağdan dışlama işlemine tabi tutulur.

## Sanal Makine

Günümüz Akıllı kontratları EVM(Ethereum Virtual Machine) temelli geliştirilmektedir. Bunun bazı avantajları bulunmaktadır. Bu avantajların başında 1 byte’lık Opcode komut setlerinin (Assembly Dili) dönüşüm ve çalıştırma kolaylığı sağlaması gelmektedir. Beraberinde gelen dezavantaj ise hem Solidity programlama dilinin geliştiricisinin azlığı, hem de bu azlık sebebiyle hack olaylarına neden olabilen yapısı gereği yeni bir programlama dili ve yapı gerektirmektedir.

Notus, Akıllı Kontratların yazımı için hem topluluk hacmi hem de kolay öğrenimi göz önünde bulundurularak en yaygın kullanıma sahip JavaScript dili tercih edilmiştir.

Eklenebilecek komut çeşitliliği ve EVM’ ye geriye dönük destekleme amacıyla Double-Opcode Notus Virtual Machine oluşturulması planlanmaktadır.

## Durum Yapılı Blok Yapısı

Blok zincirinin genel hatları akıllı kontrat ve coin/token transferi üzerine kurgulanmıştır. Akıllı kontrat yapılabilecek işlem çeşitliliği için programlama bilgisi gerektirmektedir. Akıllı kontratların kullanımı arttıkça yazılan kodların açıkları da günden güne belirginleşmeye başladı. Notus Network ile geliştirdiğimiz Karma Blok mimari sayesinde belirginleşen ihtiyaçlara cevap verebilen blok türlerini zincire eklemek, oluşturma açısından geliştiriciye fayda sağlarken, güvenlik açısından da kullanıcıya fayda sağlamaktadır. Durum Bazlı Blok Mimarisi’nin en büyük örneği, token oluşturma yapısıdır. Bu yapı için mimariye eklenen basit ara yüz ile "_Sıfır Kod_" ile token oluşturmak için kontrat oluşturma gerekliliği ortadan kalkmaktadır.

## Güvenli NFT

Notus olarak NFT'lerin sadece görsel içerikli öğeler olmadığını düşünmekteyiz. NFT'lerin aslında doküman, ses, video görsel gibi bir süre farklı dijital materyal olabilecek potansiyele sahip olduğunu düşünmekteyiz. Ancak NFT tarafında en büyük sorun üçüncü parti entegrasyon çözümleri ile dijital materyallerin kopyalarının çok kolay bir şekilde kopyalanabileceği gerçeğine her gün tanık olmaktayız. Bu sebeple sadece bir mikro zincirimizi bu dijital içeriklerin şifreli olarak saklanması için tahsis ettik. Bu sayede Telifli halini herkes görebilirken gerçek halini sadece sahibi görebilmektedir. İnancımız odur ki bu güvenlik katmanı sayesinde NFT ekosistemi ses, müzik, sözleşme gibi bir sürü yeni kullanım alanına sahip olacaktır.

## Veraset Sistemi

Blok zinciri ile ortaya çıkan en büyük sorunlardan birisi de private key veya özel cümlelerin unutulması sorunudur. Sadece yirmi bir milyon adet üretilecek olan Bitcoin’de bile bir milyona yakın coin'in sahipleri tarafından şifreleri unutulduğu veya kaybedildiği için ulaşılamadığı tahmin ediliyor. Notus Network ile blok zinciri platformumuza dahil ettiğimiz “_Karma Blok_” ve “_Durum Bazlı Blok Mimarisi_” ile geliştirilen bir diğer özellik ise "_Veraset Sistemi_" 'dir. Bu özellik en genel haliyle şöyle işlemektedir:

Kullanıcı, hesabındaki bakiyeleri belirli bir süre sonunda belirlediği bir başka hesaba aktarabilmektedir. Bu işlem “_Durum Tabanlı Blok Mimarisi”_ ile mümkün hale getirilmiştir olup ana hesaptaki şifre unutulsa bile işlem geçerli olmaktadır.

## Mikro Zincir

Notus platformu, tasarlanma aşamasında farklı ihtiyaçlar göz önünde bulundurularak tasarlanmıştır. Değişen ve şekillenen farklı ihtiyaçlara cevap verebilmesi için platform farklı alt mikro zincirler eklenmiştir. Platform içerisinde kullanılmak üzere farklı mikro zincirler tasarlanmıştır. Örneğin; geleneksel blok zincirlerinde coin veya token transferi esnasında açıklama metni yazılamamaktadır. Bu eksikliği gidermek için 4 numaralı mikro zincir bu işlem için atanmıştır. Böylece ana zincir üzerinde yoğunluk azaltılmış olup işlemlerde ilave bilgilendirme de sağlanmış olmaktadır. Bu mikro zincirler ile ilgili detaylı bilgi ayrıca detaylandırılacaktır.

## Borç Sistemi

Kripto paraların yaygınlaşması ile ortaya çıkan bir boşlukta kredi sistemi olarak gözlemlenmektedir. Tüm hesapların anonim olduğu bir ortamda elbette kredi sistemini geliştirmek mümkün olamamaktadır. Notus Network, NFT sahiplerinin kredi alabilmesini sağlayan bir kredi sistemine sahiptir. NFT sahiplerin dijital eserlerini teminat gösterebilmelerine imkân sağlayan mimari ile amaç Notus sahiplerinin likidasyon sorunlarına kolay çözüm getirmektir.

## Soğuk Cüzdan

Blok Zinciri dünyasındaki en önemli veri "Hesaba Ait Özel Anahtar" olarak bilinmektedir. Her ne kadar özel donanımsal cihazlar geliştirilse de bu cihazlar özel anahtarınızın virüs veya saldırganlar tarafından ele geçirilmesini hala Brute-Force (deneme yanılma) ihtimalîne karşı korunmasızdır. Eklenen her güncellemenin kaynağı, Notus ‘un sahip olduğu durum tabanlı blok mimarisidir. Bu mimari sayesinde getirilen yenilikle birlikte saldırganlar hesaba ait özel anahtarı bilseler bile hesabın içerisindeki bakiyeye ulaşamamaktadırlar.
