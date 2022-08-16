# Sasha

:::note
Şu anda bu dökümantasyon yapım aşamasındadır. Kelime hataları veya yanlış bilgiler bulundurabilir.
:::

Sasha hash metodu iki turdan oluşmaktadır. İçinde Ripemd160, SHA1, MD5 ve Blake2B hash yapılarını kullanmaktadır.
Her iki turda da içinde dört tane toplama işlemi barındırmaktadır.

```js
function SashaHash(data: string, reverseArray: boolean = true, replaceChar: boolean = true): string
```

Referans: [src/core/hash.ts:11](https://github.com/Notus-Network/NotusJS/blob/main/src/core/hash.ts)

## Turlara Başlamadan Önce

Datanın ters çevrilmesi isteniyorsa, ters çevrilir. Örnek olarak:

`Girdi: NRHf747BCHuFvpzDWpxrXvKm1hNBruM7eNmUH4`

`Çıktı: 4HUmNe7MurBNh1mKvXrxpWDzpvFuHCB747fHRN`

Blake2B ile yazının hash'i alınır, 16'lık karakterlere bölünerek bir dizi elde edilir.

`var Blake2BArray = SplitByLength(Blake2BHash(data), 16);`

MD5 ile yazının hash'i alınır, 4'lük karakterlere bölünerek bir dizi elde edilir.

`var Md5Array = SplitByLength(Md5Hash(data), 4);`

SHA1 ile yazının hash'i alınır, 5'lik karakterlere bölünerek bir dizi elde edilir.

`var Sha1Array = SplitByLength(Sha1Hash(data), 5);`

Ripemd160 ile yazının hash'i alınır, 5'lik karakterlere bölünerek bir dizi elde edilir.

`var Ripemd160Array = SplitByLength(Ripemd160Hash(data), 5);`

## İlk Tur

İlk turda Blake2B, MD5, SHA1 ve Ripemd160 dizilerinin n'inci elemanı toplanır.

```js
for (var i = 0; i < 8; i++) {
    if (i < 4) {
      res =
        res + Blake2BArray[i] + Md5Array[i] + Sha1Array[i] + Ripemd160Array[i];
    }
...
```

## İkinci Tur

İkinci turda önceki toplanan değerler ters şekilde toplanır. Sıra; Ripemd160, SHA1, MD5 ve Blake2B olur.

```js
else {
      res =
        res + Ripemd160Array[i] + Sha1Array[i] + Md5Array[i] + Blake2BArray[i];
    }
  }
```

## Çıktı

Çıktının eğer "_Default Hex Yazısı_" olması isteniyorsa üçüncü parametre true olarak verilir. Bu sayede ReplaceChar fonksiyonu ile belirli karakterlerin değişimi yapılır.

```js
const DefaultHexAlphabetString = "0123456789abcdef";
const SimpleHashAlphabetForHexResult = "fedcba9876543210";

function ReplaceChar(sourceText: string, fromText: string, toText: string) {
  var input = sourceText.split("");
  var replaced: boolean[] = [];
  for (var j = 0; j < input.length; j++) replaced[j] = false;
  for (var i = 0; i < fromText.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (replaced[j] === false && input[j] === fromText[i]) {
        input[j] = toText[i];
        replaced[j] = true;
      }
    }
  }
  return input.join("");
}
```

Eğer istenmiyorsa çıktı olduğu gibi geri döndürülür.

```js
return res;
```
