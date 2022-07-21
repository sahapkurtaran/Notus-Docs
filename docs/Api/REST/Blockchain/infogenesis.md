# /info/genesis

**Request Tipi: GET**

Genesis blok bilgisini verir.

## Response Gövdesi

```json
{
  "Version": 0,
  "Empty": {
    "Active": true,
    "Interval": { "Time": 90, "Block": 10 },
    "SlowBlock": { "Active": true, "Count": 10, "Multiply": 10 },
    "Nonce": { "Method": 10, "Type": 1, "Difficulty": 1 }
  },
  "Reserve": {
    "Value": 100000000000000000,
    "Total": 0,
    "Digit": 0,
    "Decimal": 9
  },
  "CoinInfo": {
    "Tag": "NOTUS",
    "Name": "Notus Coin",
    "Logo": {
      "Used": true,
      "Base64": "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP\u002BgvaeTAAAGsklEQVRogdWaeWzURRTHP/Pr0pJCESmCRzjKIZcQOQwNgcilBYJRua8ShbaIAioBFUExGG80AoLtUkAsGEhFRRCIQEkgKggYRE6Ru1xa2AKllrb7G/\u002BY3e4u/e3u/HbL4TfZ/LLze2/mvXnz3pt5vxFUEcYiGxnQQ0AnoAXQGEgEanpIioCLEo4L\u002BBPYCWxxIk5VxfgiGuY0ZJKAVAEjgQcj7OYwsNyAnEzEiUhliUiRNGQ7A6YAI4CYSAe/AaaAdSbMWojYaZfZliJpyPoGfASMsstrE7kmTMxGXNBl0BZmHHK4hAVA7YhEsw\u002BXgPFZiJU6xGEVGYyMrQOfSUiPXjb7kJBZCC/mIkpD0YVUJBVZIx5WSUipWvHsQUBeLDw9D3ElBI01xiATHLAR6HxTpLMJAdtj4LEFiCKr94ZV42BkbDXI5Q5RAkBCshtWT0TGWb23VMTjE7d1OVlBQs8S\u002BNTqXaWllY4cIkArUtwuSBi1ELHcvy1AEU\u002BeOMStC7GR4jLQyok4520IWFoGzObOVwLgLuA9/4YKi2QgOwC7CBLJ6jWHgR/C1izYvyFyCeLvhpa9oMHDUKMOlBbDpVNwZBvk7wEptbuSAtpnIX4HcPi9eD2YEgDtB0C7/tAmBX54Gza8b2tQhIAuz0LXNKhWHUwTpFs9myRDh0FwZi9s/BgKjut16ZF5qPcPacgkA/4iSBQD6DsN\u002Bs8EaYLphr1rYNk4KLkafkQjRlmzZW8l/Ok9cCgPLp8FRxzc3wZa9ABHdbheBGtmKhoNmG5osghx0kBJPzqUEqBmX5pw6je4fg3a9IGXNqolFw49JyklSq7A11Ng6RjYsUwps289/DgbFo2CE78qxfpMg1r1tRQxYtQGtkL4EeE4pFTqH9wMc/uodV03CSaug4f6BudLbAzJqeAuhdzJSngrFLtg9Rtw5g\u002BIjYfk0VqKgDoLYWQgG6JxKJKm\u002BiGV2T/ppRw0Nh5GZsLjU0BY2LTjIPXcsxpOhDllmOWQN1c9mySrwKCBVhnIhoaAXlrkHot4HfzaRVg4DLZlqbZHx0OqE6rXCmRLSlYOvfd7rVFwnYbzh9SkPdBWj0dAd0NCRy09pJ9VPDDLYe0sWDFB\u002BU2zrjD\u002BW7ivtY8moZ5y8AtH9IQCKDimlK\u002BZqEcvoaOBKhRoKeJvEX/sXQvOIXDxJNSqB898Ae2eUO\u002BqxSmhyv7VEwpUbpFu5fg6ENDCAJroEPv7iBXOH4KFQ\u002BHozxDjgP5vqmjlzRd2YJoePjM8LUqkpga6WxIZvvPiQlg\u002BHn5aoqz3yHBf0rMFqfhsJNzaBr66U\u002Bi\u002BNTuXJmyZB6tnQOk1n0USG2sLpZKuaUuRhJBJMKBzaa/zg5tgxSSfRYbOgebd9MeSboIuYysYqAqgRu/2O3ed9lnEEQcpr0K3DJWOQw5lc9KAqwZQqEMpNXzEks9jkR3LFG/bftBvOlRPCMVUOdSHQaEBHNOTyLYDAj6L7Fimck7JVZXoBnwA9zQNMlSIUG8FAUcNVO1VS6BoLAJwchesekXt0\u002BJrQ78Z1n7jtYaN8HvYELBblzoai3hx\u002BRx8Nx2ObQfDgC5j1AbR32\u002B8FtH1RwG7DQmbdYi9PmLH2cE6j5SVqBC9cyW4y9TWpvfLvn1ahUU0x3JDnuH5PhF\u002BeUVgkYoAYZHZpYR96yBvjjpMJSZBylRIbESlDWoYHMhG5BseGb8KR10VPmKFs/th/btQmA9xCdD9BXVYs\u002BEjy8FzZo\u002BBL02YSahToscidRqqYyl4Zkze8PRrd8Tp7bWKCtRZvdMwFdFq3avtI263vyKZiBPpyG8EDArGYXpmtmkXdcbwzrTWU2PTWF4KO3KgWTdo/bhvzDDIXYQ4WaGIB\u002B8AAwlSSTm4Se2XhOHbBXudX/ovO4v2Ar1MhZRwZCu48iGpM5zZF5rc9KttBQidjlwqVCHi/4DFTsRY758An4iBqYDrlotkH64yeM2/IUCRTMTfwLhbKlJkmLAE8Y9/Q6Uo5UTkSsi8dTLZxnwnolK6sAy3AiYBUVR4bxo2u2Cy1QtLRZyIMgcMFrD95splC7844KlgH0WDJsAFiKJi6M2dYZnN5ZAS7PshhKn35iCuueDJ2\u002Bwz84G\u002BixEhy\u002BV2LgwMlfA5oFfIjB6XgOeciFwdYu3iQxZipRuaAXMBuwUeO5BAjqE\u002BrWkpARHeJ8lAtkUlzyq/VOOGt7IReoc9P0R1MWYsspEDUqVSqFWE3RxAHSNyorm7VWU3fJ5HNnBDDxM6Cd/Fs7oEXjwrEHBcwmEBu92Ql43Ir4rx/wPjwuHaWjjgkwAAAABJRU5ErkJggg==",
      "Url": "",
      "Source": ""
    }
  },
  "Supply": { "Decrease": 3, "Type": 1, "Modular": 4000 },
  "Fee": {
    "Transfer": {
      "Fast": 400,
      "Common": 150,
      "NoName": 1000,
      "ByPieces": 4000
    },
    "Token": { "Generate": 500000, "Update": 900000 },
    "Data": 1500
  },
  "Info": {
    "Creation": "2022-07-19T23:35:38.1127478+03:00",
    "Creator": "NRCn4jNmkbwNFLsjrQfVRinHV6KMgqHHrQTLAB",
    "CurveName": "prime256v1",
    "EncryptKeyPair": false
  },
  "Premining": {
    "PreSeed": {
      "Volume": 1000000,
      "DecimalContains": false,
      "HowManyMonthsLater": 24,
      "PercentPerMonth": 5,
      "Wallet": "NDZbS6qY9YLHgRJVEbyidwMyppyvhoEnyJ5XiK",
      "PublicKey": "ab69131a4326b66b5b3412cc42152cc80733fff8bbdeafb4a3bb603a8ea17b51f65538f502b85b5621a21ae8c161e325b49f6261d17964b099456dcb18446fed"
    },
    "Private": {
      "Volume": 2000000,
      "DecimalContains": false,
      "HowManyMonthsLater": 18,
      "PercentPerMonth": 5,
      "Wallet": "NDbo61ZzzE93TbWVq3oepK8s9aWfVPowVAX9ge",
      "PublicKey": "1846c39ce77e57060d4ae2699f822c68ede5e2d3af9f6cac6d2f56aa72c3d40b04ea6840a939871a77f92dca2461297751444f780ebc4c03fcfebf561e2dc58d"
    },
    "Public": {
      "Volume": 10000000,
      "DecimalContains": false,
      "HowManyMonthsLater": 12,
      "PercentPerMonth": 5,
      "Wallet": "NDXXh9NMch7QdKWCVtot5jK7nrA6Si6HZfoUaD",
      "PublicKey": "4af0ef72b001af2193e282e5515e0a8eb16ea9dd770a8c5c42384b222e0283dbcc186bb5b3349221358fcb218b3b4bb2d5fa8433de52ca050bac2abfc0b6ded0"
    }
  }
}
```
