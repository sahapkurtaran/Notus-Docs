# General Design of Notus Network

:::note
Currently, this documentation is in the draft stage. It may contain word correct or incorrect information.
:::

## Multiple Transaction Pools

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

The number that must be calculated for each block created in the blockchain is known as the nonce value. This value is calculated with the Hash algorithm and ensures block accuracy. Since the nonce value is calculated specifically for each block, it guarantees content integrity. In this way, it is ensured that the hash algorithms are not affected by the "Collision" results.

In the Notus architecture, the nonce array is calculated instead of the nonce number. While calculating the Nonce array, it is created using 2 different methods. The first of these is called “Float Calculation” and the second method is called “Jump Calculation”.

The main reason for designing a different structure in the Nonce calculation method is to increase the difficulty level of block security. However, when we increase the difficulty level, there is transaction time, processor power, and more energy consumption. With the "Float Calculation" and "Jump Calculation" structures developed by Notus, block creation operations can be performed without sacrificing security, with less processor power, faster transaction time, and consuming less energy.

### Float Calculation

SHA-256 for the "Float Calculation" method; the calculation number of steps (N) values is calculated with the below formula.

N = (α – β) + 1

α = Hex length of the hash algorithm

β = Difficulty level length

---

Example for Float Calculation;

Using the SHA-256 hash algorithm for the new block created

![Float Calculation](/img/whitepaper/float_calculation.jpg)

Steps

For Step 1: 8.325

For Step 2: 7.965

For Step 3: 4.862

…….

……

For step (N-2): 3.258

For step (N-1): 1.542

For step (N): 9.104

The result list will be combined with a separator. A value such as # can be used as a separator.

8325 # 7965 # 4862 # …………………..……………… # 3258 # 1542 # 9104

### Jump Calculation

SHA-256 for the "Jump Calculation" method; the calculation number of steps (N) values is calculated with the below formula.

N = Ceil(α – β)

α = Hex length of the hash algorithm

β = Difficulty level length

![Jump Calculation](/img/whitepaper/jump_calculation.jpg)

Steps

For Step 1: 8.325

For Step 2: 7.965

For Step 3: 4.862

…….

……

For step (N-2): 3.258

For step (N-1): 1.542

For step (N): 9.104

The result list will be combined with a separator. A value such as # can be used as a separator.

8325 # 7965 # 4862 # …………………..……………… # 3258 # 1542 # 9104

## Miner/Validator (NoVa)

The main focus of Notus architecture is task distribution architecture for miners/validators in the network as a solution to the scaling problem, which is one of the main problems of blockchain platforms. The most effective way to overcome the bottleneck caused by network density underlying scaling problems has been considered to be the design of multiple transaction pools.


![Block Node Architecture](/img/whitepaper/block_node_architecture.jpg)

The Notus architecture is designed as 3 rings and is ordered from the inside out as follows:

1. Master Node

   Represents nodes set up by Notus Network and nodes with fixed IP. The IP addresses of these nodes are embedded in the source code.

2. Main Node

   Represents miners with a defined system configuration. The IP addresses of these miners are stored by each node inside the local nodes.

3. Archive Node

   a. Full Node

   Represents a low system configuration node type that keeps all copies of blocks generated in the network but does not create new blocks.

   b. Light Node

   It represents the node type that keeps all the block signatures produced in the network but does not create new blocks.
   
## Miner/Validator Rank (NoVa)

Every node joining the Notus network for transaction verification purposes must have a wallet address. This wallet address primarily determines the account to which the token rewards earned by the validators as a result of their transactions will be transferred. As a secondary use, it determines the order in which validators will operate.

Notus Network places the validators in a queue to ensure that the validators work efficiently and ensures that all transactions are done in that order. The operation steps are as follows.

Each node shares its wallet address with other nodes and requests wallet addresses on its other nodes.

![Transaction Protocol](/img/whitepaper/transaction_protocol.jpg)

When the exchange of wallet addresses is complete:

· All wallet addresses are converted from the 58 number system to the 10 number system. <br>
· Since all wallet addresses will be unique, there will be no conflicts in the numbers that will appear.  <br>
· All wallet addresses are sorted from smallest to largest.  <br>
· The wallet address of the newly added node to the list cannot be processed for 2 rounds.  <br>
· The time allocated for each node is 0.2 Seconds.  <br>
· If each node does not complete the transaction within the allotted time, all nodes go to the other node in the sorted list for the current block.  <br>
· The node that does not deliver the block creation process 3 times within the specified time is subject to a 1-hour exclusion from the network by other nodes.  <br>

## Virtual Machine

Today, smart contracts are developed based on EVM (Ethereum Virtual Machine). This has some advantages. One of these benefits is the ease of conversion and execution for 1-byte Opcode instruction sets (Assembly). The disadvantage is that the developers and experts of the Solidity programming language are few, and the fact that the Solidity programming language causes hacking incidents clearly shows the need for a new programming language and structure.

Notus recommends choosing and using the widely used JavaScript programming language for writing smart contracts, considering both its community size and its easy learning. It is planned to create a Double-Opcode Notus Virtual Machine for the purpose of adding new commands and backward support to the EVM.

## State-Based Block Structure

Blockchain technology outlines are built on smart contracts and coin/token transfers. Programming knowledge is required for the variety of transactions that can be made with smart contracts. As the use of smart contracts increased, the vulnerabilities of the written codes began to increase day by day. Adding block types to the chain that can meet the specific needs thanks to the Mixed Block architecture we developed with Notus Network provides benefits to the developer in terms of creation and to the user in terms of security. The biggest example of State-Based Block Architecture is the token generation structure. With the simple interface added to the architecture for this structure, the necessity of creating a contract to create tokens with "Zero Code" is eliminated.

## Micro Chain

Notus platformu, tasarlanma aşamasında farklı ihtiyaçlar göz önünde bulundurularak tasarlanmıştır. Değişen ve şekillenen farklı ihtiyaçlara cevap verebilmesi için platform farklı alt mikro zincirler eklenmiştir. Platform içerisinde kullanılmak üzere farklı mikro zincirler tasarlanmıştır. Örneğin; geleneksel blok zincirlerinde coin veya token transferi esnasında açıklama metni yazılamamaktadır. Bu eksikliği gidermek için 4 numaralı mikro zincir bu işlem için atanmıştır. Böylece ana zincir üzerinde yoğunluk azaltılmış olup işlemlerde ilave bilgilendirme de sağlanmış olmaktadır. Bu mikro zincirler ile ilgili detaylı bilgi ayrıca detaylandırılacaktır.

## Safe NFT

At Notus, we believe that NFTs are not just visual elements.
We think that NFTs actually consist of different digital materials such as documents, audio, video and visuals, but their use case is limited. We witness that the biggest problem in all current NFT projects is that digital materials are easily copied and recreated on other platforms with third-party integration solutions.

A separate structure has been added as a state-based NFT micro chain within the Notus architecture. With this state-based structure, digital content will be stored in an encrypted manner. In this way, only the owner of the NFT will be able to see the original NFT, while others will be able to see a replica of the NFT. Thanks to this security layer, Notus ensures that the NFT ecosystem (such as audio, video, music and contracts, etc.) is widely used and this process is easily managed.

For example;
Leonardo Da Vinci's Mona Lisa in the Louvre museum can be given. Almost all museums display replicas rather than originals. When the replica work is damaged or stolen, the original work continues to protect its existence secretly. This gives the museum an easier and trouble-free management.

## Wallet

Cüzdanlar Notus Ağı üzerindeki en temel bileşenlerdir. Notus Ağı'nın üzerindeki bütün işlemler(Transfer, Akıllı Kontrat, NFT vb.) için cüzdan kullanılır.

### How to create a Notus Wallet?

#### Creating Keywords

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

#### Wallet Address

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

### Heritage-Based Wallet

Blok zinciri ile ortaya çıkan en büyük sorunlardan birisi de private key veya özel cümlelerin unutulması sorunudur. Sadece yirmi bir milyon adet üretilecek olan Bitcoin’de bile bir milyona yakın coin'in sahipleri tarafından şifreleri unutulduğu veya kaybedildiği için ulaşılamadığı tahmin ediliyor. Notus Network ile blok zinciri platformumuza dahil ettiğimiz “_Karma Blok_” ve “_Durum Bazlı Blok Mimarisi_” ile geliştirilen bir diğer özellik ise "_Veraset Sistemi_" 'dir. Bu özellik en genel haliyle şöyle işlemektedir:

Kullanıcı, hesabındaki bakiyeleri belirli bir süre sonunda belirlediği bir başka hesaba aktarabilmektedir. Bu işlem “_Durum Tabanlı Blok Mimarisi”_ ile mümkün hale getirilmiştir olup ana hesaptaki şifre unutulsa bile işlem geçerli olmaktadır.

### Time-Based Wallet

Yeni mimariyle birlikte "_Tarihli Soğuk Cüzdan_" kavramı ortaya çıkmıştır. Tarihli Soğuk Cüzdan'da verdiğiniz tarihe kadar hesabınız kilitlenir. Saldırganlar hesabınızın özel anahtarını bilseler bile verdiğiniz tarihe kadar işlem yapamazlar.

Tarih verdiğinizde sizden en az 8 haneli ve en çok 32 haneli bir şifre girmeniz istenir. Girdiğiniz şifre verdiğiniz tarihe kadar kapalı olan hesabınızın, verdiğiniz tarihten sonraki ilk işlemi için gereklidir.

### Cold Wallet

Blok Zinciri dünyasındaki en önemli veri "Hesaba Ait Özel Anahtar" olarak bilinmektedir. Her ne kadar özel donanımsal cihazlar geliştirilse de bu cihazlar sadece özel anahtarınızın virüs veya saldırganlar tarafından ele geçirilmesini engellemesine rağmen hala Brute-Force (deneme yanılma) ihtimalîne karşı korunmasızdır. Eklenen her güncellemenin kaynağı, Notus ‘un sahip olduğu durum tabanlı blok mimarisidir. Bu mimari sayesinde getirilen yenilikle birlikte, kullanıcının isteği dahilinde kullanıcının hesabı, verdiği tarihler arasında ve verdiği şifre ile kilitlenir. Saldırganlar hesaba ait özel anahtarı bilseler bile hesabın içerisindeki bakiyeye ulaşamazlar.
