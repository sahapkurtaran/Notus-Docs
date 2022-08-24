# General Design of Notus Network

:::note
Currently, this documentation is under construction. It may contain word correct or incorrect information.
:::

## Transaction Pools

The main focus of Notus architecture is task distribution architecture for miners/validators in the network as a solution to the scaling problem, which is one of the main problems of blockchain platforms. The most effective way to overcome the bottleneck caused by network density underlying scaling problems has been considered to be the design of multiple transaction pools.

Multiple Transaction Pools Benefits

· Unlimited transaction skill <br>
· Quick access to transactions by Miners/Verifiers <br>
· Minimum network traffic density <br>

## Complex Block Architecture

Today, there are 2 types of blocks in blockchain networks: payment transactions and smart contracts. Although the entire network is designed to process these blocks, this structure cannot meet different needs at different levels. While the Notus architecture was being designed, it was designed both for a closed network structure and for solving the blockchain needs of an online network with a single network.

In the Notus architecture, each ring can represent a different transaction type. Although this is not mandatory, it can be this way depending on the transaction situation.

For example;

· Block number 1; receive payment transactions,  <br>
· Block number 2; It may contain metadata where the NFT image is stored,  <br>
· Block number 3; may include smart contracts,  <br>
· Block number 4; account security data etc. may contain.  <br>

The Notus network is designed to host large raw data such as files and similar on different micro chains to reduce the density of the Mainnet.

The process of grouping transactions during block creation works as tracks:

· If the block type is the same, transactions are taken from the pool before the specified time is exceeded, and a block is created with the maximum number of transactions and added to the chain.  <br>
· When different types of transactions accumulate in the pool, priority is given to the transaction of the first type. If the following transaction types are the same, they are saved in the same block within the maximum block production time and added to the chain.  <br>
· The behavior of other transaction types is also done by tracking this structure.  <br>

![Block Architecture](/img/whitepaper/block_architecture.jpg)

## Nonce Calculation

Blok zincirinde oluşturulan her blok için hesaplanması gereken sayı nonce değeri olarak bilinmektedir. Bu değer Hash algoritması ile hesaplanmakta olup, blok doğruluğunu sağlamaktadır. Nonce değeri her blok için özel olarak hesaplandığı için içerik bütünlüğünü garanti etmektedir. Bu sayede özet algoritmalarının “_Collision_” olarak adlandırılan çakışma sonuçlarından da etkilenmemesi sağlanmaktadır.

Notus mimarisinde nonce sayısı yerine nonce dizisi hesaplanmaktadır. Nonce dizisi hesaplanırken 2 farklı yöntem(Patent Aşamasında) kullanılarak oluşturulmaktadır. Bunlardan birincisi “_Kayar Hesaplama_” olarak adlandırılan yöntemdir. Nonce dizisi hesaplanırken kullanılan ikinci yöntem ise “_Atlamalı Hesaplama_” olarak adlandırılan yöntemdir.

Nonce hesaplama yönteminde farklılığa gidilmesindeki temel motivasyon, blok güvenliğini sağlamanın en bilinen yolu olan zorluk derecesini arttırmaktır. Ancak zorluk derecesini arttırdığımızda ise işlem süresi, işlemci gücü ve enerji ihtiyacı artış göstermektedir. Blok güvenliğinden ödün vermeden daha az işlemci gücü, daha hızlı ve daha az enerji sarfiyatı ile blok oluşturmayı mümkün kılmaktadır.

### Float Calculation

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

### Jump Calculation

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

## Miner/Validator (NoVa)

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

## Miner/Validator Rank (NoVa)

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

## Virtual Machine

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

## Cüzdan

Cüzdanlar Notus Ağı üzerindeki en temel bileşenlerdir. Notus Ağı'nın üzerindeki bütün işlemler(Transfer, Akıllı Kontrat, NFT vb.) için cüzdan kullanılır.

### Bir Notus Cüzdan Adresi Nasıl Oluşturulur?

#### Anahtar Kelimelerin Oluşturulması

Cüzdan adresi oluşturmak için BIP39 standart kelime listesi kullanılır. Diğer ağlar 12 veya 24 kelimelik listeler kullanmaktadırlar. Notus Ağı bu sayıyı standart olarak 16 kabul eder. 16 tane kelimeyi kullanarak bir cüzdan adresi oluşturur. İçerisinde aynı kelimeleri bulundurmaz.

```js
function SeedPhraseList(): string[] {
  var wordList: string[] = [];
  for (var i = 0; i < Default_WordListArrayCount; i++) {
    wordList[i] = Bip39Keyword(
      parseInt(
        new BN(
          Sha1Hash(
            new Date().toLocaleTimeString() +
              Md5Hash(
                new Date().toLocaleString() +
                  getRandomInt(10000000, Number.MAX_SAFE_INTEGER).toString()
              )
          ),
          16
        )
          .toString(10)
          .substring(0, 4)
      )
    );
  }

  return wordList;
}

function Bip39Keyword(Bip39WordIndexNo: number): string {
  Bip39WordIndexNo = Math.abs(Bip39WordIndexNo);

  while (true) {
    if (Bip39WordArray.length > Bip39WordIndexNo) {
      break;
    } else {
      Bip39WordIndexNo -= Bip39WordArray.length;
    }
  }

  return Bip39WordArray[Bip39WordIndexNo];
}
```

#### Private Key

Private Key(Özel Anahtar) Prime256v1 algoritması kullanıldığından dolayı 256 bitlik(32 bytelık) bir anahtardır.

Oluşturulan kelimeler sınırlayıcı bir karakter ile birleştirilir. Bu sınırlayıcı karakter herhangi bir harf veya sayı olamaz.

Örnek:

```
Girdi = "giggle","injury","bracket","treat","olive","cave","sheriff","kiwi","grow","human","appear","fat","pulse","radar","method","myth"
Çıktı = giggle:injury:bracket:treat:olive:cave:sheriff:kiwi:grow:human:appear:fat:pulse:radar:method:myth
```

Oluşturulan kelimelerin teker teker MD5 hashi alınır.

Örnek:

```
Girdi = "giggle","injury","bracket","treat","olive","cave","sheriff","kiwi","grow","human","appear","fat","pulse","radar","method","myth"
Çıktı
-
719a464002575321cf4e1b985ba98007
7ff983fb58f776769fdfdc8faa69662b
45b3afaeaba670a3c67dcae1c8e5f8af
15bf1e390b0cbe5d40cdbcdf326e6123
f431b0eea3c08186ed101e588bfb3a2f
e386df9ee22e271da0b7d489447870ff
37615e072eace5a9287437b9c1b42712
de5949721e6352f01dfef317c3e898a8
4d200fce73a8e1cc965cfc2c43343824
99e9bae675b12967251c175696f00a70
fb67f8d67111c4f85b8abb1327308b4f
0d8dc086e16e3ac48f05d555994da7d7
02a8dc4cf01fed584c6423f577c0b0d7
50b7fe4da64720232c25bc7c6d66f6c5
ea9f6aca279138c58f705c8d4cb4b8ce
9b87b1ff71e8b4a5a0711c3d82f5bcba
```

Bütün kelimelerin birleşiminin SashaHash'i iki kez alınır.

```js
SashaHash(SashaHash(bütünKelimeler) + : + bütünKelimeler)
```

```
Çıktı
-
7f74a2d907a8ee1a6cef35dd886247fec7e28403e4f101f5a5127c6ae0acdc2aa5981edf75bc056e98bc218443139232cea
1fd53f1efe1753c34d2fbe055c0a23169134bc6ddf78d1f48838ab2d450364388ea91fcf1fafe6712291000917a56e19
d151dc42a1391fc2a4d7a612484df3e06df6da950d31
```

Bir döngüde üretilen MD5 hashleri ile üretilen sasha çıktısı toplanarak Sha1 hashi alınır ve hexi 2 küçültülür.

```js
hash[i] = shrinkHex(Sha1Hash(sashaHashOutput + : + hash[i]), 2)
result += hash[i]
```

Döngüden çıkan değer private key(özel anahtar) olarak alınır.

```
Çıktı
-
7d9bdc8bb285bcc44d4805a5b3fc524194fe5305f6120e764f31ff00c244f915
```

#### Public Key

Public Key ["_Eliptic Curve Cryptography_"](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography) algoritmasında Private Key kullanılarak X ve Y noktalarından oluşturulmuş bir adrestir. Bitcoinden farklı olarak Notus Network Prime256v1 algoritmasını kullanmaktadır.

```
Çıktı
-
19eb745ebf2864ee8bb21bf2617d073c3e4ae5b92ee40cd335260b80ddf1f29e63c9199d7692906c43f553de0ec812e2f0ab2560066956950c389c7b5985fe82
```

#### Cüzdan Adresi

Cüzdan adresi sayıların ve harflerin birleşiminden oluşan bir adrestir. Public Key birkaç adımdan geçirilerek cüzdan adresi oluşturulur.

Public Key'in x ve y noktalarının başına 0 eklenir.

`publicCords = 0 + publicKey.X + 0 + publicKey.Y`

Public Key'in Y değerin son harfi veya sayının 2 ile modu alınır. Public Key'in X değerinin başına eğer çıkan sonuç 0 ise 20, değil ise 30 eklenir.

```js
pubCorsMain =
  (parseInt(publicKey.Y.substring(publicKey.Y.length - 1), 16) % 2 == 0
    ? "020"
    : "030") + pubCorsX;
```

Oluşturulan cüzdan adresinin ağ tipi, oluşturulacak cüzdan adresinin çıktısını da etkilemektedir.
Network tiplerine göre değişiklik listesi:

| Network Tipi | Byte String | Network Tipi Yazısı |
| :----------- | :---------- | :------------------ |
| Mainnet      | 10          | NR                  |
| Testnet      | 20          | NT                  |
| Devnet       | 30          | ND                  |

İlk olarak iki kez sasha hash alınır, hex'i 22 düşürülür. Sonuç olarak ilk hash elde edilir.

```js
hash1 = shrinkHex(SashaHash(SashaHash(pubCorsMain)), 22);
```

Sonrasında tekrar iki kez sasha hash alınır, hex'i 4 düşürülür. Sonuç olarak ikinci hash elde edilir.

```js
hash2 = shrinkHex(SashaHash(SashaHash(networkTypeByte + publicCords)), 4);
```

Son işlem olarak elde edilen iki hash ve "_Network Type Byte_" toplanır. Toplanan değerin base58 encode değeri alınır ve başına "_Network Type String_" eklenir. Sonuç olarak cüzdan adresi elde edilir.

```js
walletKey = networkTypeString + bs58encode(networkTypeByte + hash1 + hash2, 36);
```

```
Çıktı
-
NREAj7a29qz1GhXoX88ebRd7zMXtiWMyyy6QkG
```

### Soğuk Cüzdan

Blok Zinciri dünyasındaki en önemli veri "Hesaba Ait Özel Anahtar" olarak bilinmektedir. Her ne kadar özel donanımsal cihazlar geliştirilse de bu cihazlar sadece özel anahtarınızın virüs veya saldırganlar tarafından ele geçirilmesini engellemesine rağmen hala Brute-Force (deneme yanılma) ihtimalîne karşı korunmasızdır. Eklenen her güncellemenin kaynağı, Notus ‘un sahip olduğu durum tabanlı blok mimarisidir. Bu mimari sayesinde getirilen yenilikle birlikte, kullanıcının isteği dahilinde kullanıcının hesabı, verdiği tarihler arasında ve verdiği şifre ile kilitlenir. Saldırganlar hesaba ait özel anahtarı bilseler bile hesabın içerisindeki bakiyeye ulaşamazlar.

#### Tarihli Soğuk Cüzdan

Yeni mimariyle birlikte "_Tarihli Soğuk Cüzdan_" kavramı ortaya çıkmıştır. Tarihli Soğuk Cüzdan'da verdiğiniz tarihe kadar hesabınız kilitlenir. Saldırganlar hesabınızın özel anahtarını bilseler bile verdiğiniz tarihe kadar işlem yapamazlar.

Tarih verdiğinizde sizden en az 8 haneli ve en çok 32 haneli bir şifre girmeniz istenir. Girdiğiniz şifre verdiğiniz tarihe kadar kapalı olan hesabınızın, verdiğiniz tarihten sonraki ilk işlemi için gereklidir.

#### ? Soğuk Cüzdan
