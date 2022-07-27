# API Referansı

Her Notus Network Node'u içerisinde REST API bulundurur. Bu şekilde veri paylaşımı ve veri alımı hızlı bir şekilde yapılır.
Request x-www-form-urlencoded ve JSON formatlarında yapılabilir.

## Dinlenen Portlar

Farklı portlar ile farklı layerlar ve networkler dinlenir. Bu portların kullanımı aşağıdaki örneklerde görülebilir.

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

## Nasıl Get Requesti Kullanılır?

GET tipinde requestler atmak için örnek;

Her objeye uygun JS/TS ve C# kodları.

### Javascript / Typescript

```javascript
export function GetRequest(url) {
  return fetch(url).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return JSON.stringify(await response.json());
  });
}
```

```typescript
export function GetRequest(url: string): Promise<string> {
  return fetch(url).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return JSON.stringify(await response.json());
  });
}
```

### C#

```cs
public static async Task<string> Get(string UrlAddress, int TimeOut = 0, bool UseTimeoutAsSecond = true)
{
    try
    {
        using (var client = new HttpClient())
        {
            if (TimeOut > 0)
            {
                client.Timeout = (UseTimeoutAsSecond == true ? TimeSpan.FromSeconds(TimeOut * 1000) : TimeSpan.FromMilliseconds(TimeOut));
            }
            HttpResponseMessage response = await client.GetAsync(UrlAddress);
            if (response.IsSuccessStatusCode)
            {
                HttpContent responseContent = response.Content;
                return await responseContent.ReadAsStringAsync();
            }
        }
    }
    catch (Exception err)
    {
        Console.WriteLine(err.Message);
    }
    return string.Empty;
}
```

## Nasıl Post Requesti Kullanılır?

POST tipinde requestler atmak için örnek;

Her objeye uygun JS/TS ve C# kodları.

### Javascript / Typescript

```javascript
export function PostRequest(url, object) {
  return fetch(url, {
    method: "POST",
    body: new URLSearchParams({
      data: JSON.stringify(object),
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return JSON.stringify(await response.json());
  });
}
```

```typescript
export function PostRequest<T>(url: string, object: T): Promise<string> {
  return fetch(url, {
    method: "POST",
    // x-www-form-urlencoded
    body: new URLSearchParams({
      data: JSON.stringify(object),
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return JSON.stringify(await response.json());
  });
}
```

### C#

```cs
public static async Task<string> Post(string UrlAddress, Dictionary<string, string> PostData, int TimeOut = 0, bool UseTimeoutAsSecond = true)
{
    using (HttpClient client = new HttpClient())
    {
        if (TimeOut > 0)
        {
            client.Timeout = (UseTimeoutAsSecond == true ? TimeSpan.FromSeconds(TimeOut * 1000) : TimeSpan.FromMilliseconds(TimeOut));
        }

        HttpResponseMessage response = await client.PostAsync(UrlAddress, new FormUrlEncodedContent(PostData));
        if (response.IsSuccessStatusCode)
        {
            HttpContent responseContent = response.Content;
            return await responseContent.ReadAsStringAsync();
        }
    }
    return string.Empty;
}
```

## Yol Listesi

---

### Node

| Tip | Yol                              | Açıklama                                         |
| :-- | :------------------------------- | :----------------------------------------------- |
| GET | [/online](Node/online.md)        | Node'un online durumunu gösterir.                |
| GET | [/node](Node/node.md)            | Tüm tiplerdeki node listesini gösterir.          |
| GET | [/master](Node/master.md)        | Master tipinde Node'ların listesini gösterir.    |
| GET | [/main ](Node/main.md)           | Main tipinde Node'ların listesini gösterir.      |
| GET | [/replicant ](Node/replicant.md) | Replicant tipinde Node'ların listesini gösterir. |

### Metrikler

| Tip | Yol                                        | Açıklama                                     |
| :-- | :----------------------------------------- | :------------------------------------------- |
| GET | [/metrics/node](Metrics/node.md)           | Kaç Node'un var olduğunu gösterir.           |
| GET | [/metrics/master](Metrics/master.md)       | Kaç Master Node'un var olduğunu gösterir.    |
| GET | [/metrics/main](Metrics/main.md)           | Kaç Main Node'un var olduğunu gösterir.      |
| GET | [/metrics/replicant](Metrics/replicant.md) | Kaç Replicant Node'un var olduğunu gösterir. |
| GET | [/metrics/block](Metrics/block.md)         | Kaç tane blok olduğunu gösterir.             |

### Blok Zinciri

| Tip | Yol                                          | Parametreler | Açıklama                                              |
| :-- | :------------------------------------------- | :----------- | :---------------------------------------------------- |
| GET | [/block/summary](Blockchain/summary.md)      |              | Son blok hakkında bilgi verir.                        |
| GET | [/block/last](Blockchain/last.md)            |              | Son bloğun içeriğini gösterir.                        |
| GET | [/block/hash/{uuid}](Blockchain/hash.md)     | Block UUID   | UUID değerinin verildiği blok hash değerini gösterir. |
| GET | [/block/status/{uuid}](Blockchain/status.md) | Block UUID   | UUID değerinin verildiği bloğun durumunu gösterir.    |
| GET | [/currency/list](Blockchain/currencylist.md) |              | Bütün kullanılabilir para birimlerini gösterir.       |
| GET | [/info/genesis](Blockchain/infogenesis.md)   |              | Genesis blok bilgisini verir.                         |
| GET | [/info/transfer](Blockchain/infotransfer.md) |              | Şu anki işlemlerin ücret bilgisini verir.             |
| GET | [/info/reserve](Blockchain/inforeserve.md)   |              | Notus Token'nin reserve edilmiş miktarını verir.      |

### Cüzdan

| Tip | Yol                                       | Parametreler    | Açıklama                                                      |
| :-- | :---------------------------------------- | :-------------- | :------------------------------------------------------------ |
| GET | [/balance/{walletKey}](Wallet/balance.md) | Cüzdan Anahtarı | Cüzdan anahtarının verildiği cüzdanın bakiye bilgisini verir. |

### İşlem

:::info

Airdrop sadece Testnet ve Devnet için kullanılabilir.

:::

| Tip  | Yol                                                            | Parametreler       | Açıklama                                                   |
| :--- | :------------------------------------------------------------- | :----------------- | :--------------------------------------------------------- |
| POST | [/send?data="preTranfer"](Transaction/send.md)                 | preTransfer Yapısı | Transfer işlemini Node'a gönderir.                         |
| GET  | [/transaction/status/{uuid}](Transaction/transactionstatus.md) | İşlem UUID         | UUID değerinin verildiği işlem durumunu gösterir.          |
| GET  | [/airdrop/{walletKey}](Transaction/airdrop.md)                 | Cüzdan Anahtarı    | Cüzdan anahtarının verildiği cüzdana airdrop işlemi yapar. |

### NFT

| Tip  | Yol                                                   | Parametreler       | Açıklama                                                   |
| :--- | :---------------------------------------------------- | :----------------- | :--------------------------------------------------------- |
| POST | [/storage/file/new?data="fileMetadata"](NFT/new.md)   | fileMetadata       | Yeni bir dosya oluşturmak için gerekli UUID'yi verir.      |
| POST | [/storage/file/update?data="byteData"](NFT/update.md) | byteData, fileUUID | fileUUID'si verilen dosyanın n 'inci byteArray'ini alır.   |
| GET  | [/storage/file/status/{uuid}](NFT/status.md)          | Dosya UUID         | UUID değerinin verildiği dosyanın işlem durumunu gösterir. |
