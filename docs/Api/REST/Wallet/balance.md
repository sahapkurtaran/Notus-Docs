---
title: /balance/{walletKey}
---

# /balance/{walletKey}

**Request Tipi: GET**

Cüzdan anahtarının verildiği cüzdanın bakiye bilgisini verir.

## Parametreler

- Wallet Key
  - 38 haneli bir cüzdan anahtarı.

## Response Gövdesi

```json
{
  "Wallet": "NRHf747BCHuFvpzDWpxrXvKm1hNBruM7eNmUH4",
  "Balance": {
    "NOTUS": {
      "20220721131729188": "0"
    }
  },
  "RowNo": 0,
  "UID": ""
}
```
