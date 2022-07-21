---
title: /send
---

**Request Tipi: POST**

Transfer işlemini Node'a gönderir.

## Parametreler

- CryptoTransactionStruct
  - Kripto işlemi yapılacak veri.
    - ErrorNo
    - UnlockTime
    - Currency
    - Sender
    - Receiver
    - Volume
    - PublicKey
    - Sign
    - CurveName
    - Network

## x-www-form-urlencoded Request

`/send?data="{CryptoTransactionStruct}"`

## Json Request

```json
{
  "data": {
    "CryptoTransactionStruct": {
      "ErrorNo": "number",
      "UnlockTime": "number",
      "Currency": "string",
      "Sender": "string",
      "Receiver": "string",
      "Volume": "string",
      "PublicKey": "string",
      "Sign": "string",
      "CurveName": "string",
      "Network": "NetworkTipi"
    }
  }
}
```

## Response Gövdesi

```json
{
  "ErrorNo": 9618,
  "Result": 99,
  "ID": ""
}
```
