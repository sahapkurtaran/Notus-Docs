# API Referansı

Her Notus Network Node'u içerisinde REST API bulundurur. Bu şekilde veri paylaşımı ve veri alımı hızlı bir şekilde yapılabilir.
Request x-www-form-urlencoded ve JSON formatlarında yapılabilir.

## Dinlenen Portlar

Farklı portlar ile farklı layerlar ve networkler dinlenir. Bu portlarınızın kullanımının aşağıdaki örnekleriyle görebilirsiniz.

Verilen portlar sadece varsayılan portlardır. Node açılırken bu varsayılan portları değiştirebilirsiniz.

Varsayılan Port Numarası: 5000

- Layer1

  - Mainnet: `Varsayılan Port + 0`
  - Testnet: `Varsayılan Port + 1`
  - Devnet: `Varsayılan Port + 2`

- Layer2

  - Mainnet: `Varsayılan Port + 100`
  - Testnet: `Varsayılan Port + 101`
  - Devnet: `Varsayılan Port + 102`

- Layer3

  - Mainnet: `Varsayılan Port + 200`
  - Testnet: `Varsayılan Port + 201`
  - Devnet: `Varsayılan Port + 202`

- Layer4

  - Mainnet: `Varsayılan Port + 300`
  - Testnet: `Varsayılan Port + 301`
  - Devnet: `Varsayılan Port + 302`

- Layer5

  - Mainnet: `Varsayılan Port + 400`
  - Testnet: `Varsayılan Port + 401`
  - Devnet: `Varsayılan Port + 402`

- Layer6

  - Mainnet: `Varsayılan Port + 500`
  - Testnet: `Varsayılan Port + 501`
  - Devnet: `Varsayılan Port + 502`

- Layer7

  - Mainnet: `Varsayılan Port + 600`
  - Testnet: `Varsayılan Port + 601`
  - Devnet: `Varsayılan Port + 602`

- Layer8

  - Mainnet: `Varsayılan Port + 700`
  - Testnet: `Varsayılan Port + 701`
  - Devnet: `Varsayılan Port + 702`

- Layer9

  - Mainnet: `Varsayılan Port + 800`
  - Testnet: `Varsayılan Port + 801`
  - Devnet: `Varsayılan Port + 802`

- Layer10

  - Mainnet: `Varsayılan Port + 900`
  - Testnet: `Varsayılan Port + 901`
  - Devnet: `Varsayılan Port + 902`

## Yol Listesi

---

### Node

| Tip | Yol        | Açıklama                                      |
| :-- | :--------- | :-------------------------------------------- |
| GET | /online    | Node'un online durumunu gösterir.             |
| GET | /node      | Tüm tiplerdeki node listesini verir.          |
| GET | /master    | Master tipinde Node'ların listesini verir.    |
| GET | /main      | Main tipinde Node'ların listesini verir.      |
| GET | /replicant | Replicant tipinde Node'ların listesini verir. |

### Metrikler

| Tip | Yol                | Açıklama                                     |
| :-- | :----------------- | :------------------------------------------- |
| GET | /metrics/node      | Kaç Node'un var olduğunu gösterir.           |
| GET | /metrics/master    | Kaç Master Node'un var olduğunu gösterir.    |
| GET | /metrics/main      | Kaç Main Node'un var olduğunu gösterir.      |
| GET | /metrics/replicant | Kaç Replicant Node'un var olduğunu gösterir. |
| GET | /metrics/block     | Kaç tane blok olduğunu verir.                |

### Blok Zinciri

| Tip | Yol                  | Parametreler | Açıklama                                           |
| :-- | :------------------- | :----------- | :------------------------------------------------- |
| GET | /block/summary       |              | Son blok hakkında bilgi verir.                     |
| GET | /block/last          |              | Son bloğun içeriğini verir.                        |
| GET | /block/hash/{uuid}   | Block UUID   | UUID değerinin verildiği blok hash değerini verir. |
| GET | /block/status/{uuid} | Block UUID   | UUID değerinin verildiği bloğun durumunu gösterir. |
| GET | /currency/list       |              | Bütün kullanılabilir para birimlerini verir.       |
| GET | /info/genesis        |              | Genesis blok bilgisini verir.                      |
| GET | /info/transfer       |              | Şu anki işlemlerin ücret bilgisini verir.          |
| GET | /info/reserve        |              | Notus Tokenin reserve edilmiş miktarını verir.     |

### Cüzdan

| Tip | Yol                  | Parametreler    | Açıklama                                                      |
| :-- | :------------------- | :-------------- | :------------------------------------------------------------ |
| GET | /balance/{walletKey} | Cüzdan Anahtarı | Cüzdan anahtarının verildiği cüzdanın bakiye bilgisini verir. |

### İşlem

:::info

Airdrop sadece Testnet ve Devnet için kullanılabilir.

:::

| Tip  | Yol                        | Parametreler       | Açıklama                                                  |
| :--- | :------------------------- | :----------------- | :-------------------------------------------------------- |
| POST | /send?data="preTranfer"    | preTransfer Yapısı | Transfer işlemini Node'a gönderir.                        |
| GET  | /transaction/status/{uuid} | İşlem UUID         | UUID değerinin verildiği işlem durumunu verir.            |
| GET  | /airdrop/{walletKey}       | Cüzdan Anahtarı    | Cüzdan anahtarının verildiği cüzdana airdrop işlemi yapar |

### NFT

| Tip  | Yol                                   | Parametreler       | Açıklama                                                 |
| :--- | :------------------------------------ | :----------------- | :------------------------------------------------------- |
| POST | /storage/file/new?data="fileMetadata" | fileMetadata       | Yeni bir dosya oluşturmak için gerekli UUID'yi verir.    |
| POST | /storage/file/update?data="byteData"  | byteData, fileUUID | fileUUID'si verilen dosyanın n 'inci byteArray'ini alır. |
| GET  | /storage/file/status/{uuid}           | Dosya UUID         | UUID değerinin verildiği dosyanın işlem durumunu verir.  |
