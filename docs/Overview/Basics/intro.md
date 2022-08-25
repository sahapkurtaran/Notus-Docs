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

## Microchain Moduls

The Notus blockchain architecture has been developed to meet different needs during the design phase. Different sub-micro chains have been added to the platform in order to respond to different changing and shaped needs and to move more dynamically. Micro chains, which give Notus Network a modular structure, can be shaped according to the situation by increasing or decreasing the number of micro chains depending on the operation on the platform together with the network upgrade. The task distribution of these micro chains is considered as the division of different types of transactions (Coin/token transfer, NFT, smart contracts, etc.) in other blockchain platforms into separate micro chains.

For example;
In other blockchains, the explanation text cannot be written during coin or token transfer. To make up for this shortcoming, the number 4 microchain has been assigned for this process. Thus, the density on the main chain is reduced and additional information is provided in the transactions. Detailed information about micro chains will be given separately.

## Safe NFT

At Notus, we believe that NFTs are not just visual elements.
We think that NFTs actually consist of different digital materials such as documents, audio, video and visuals, but their use case is limited. We witness that the biggest problem in all current NFT projects is that digital materials are easily copied and recreated on other platforms with third-party integration solutions.

A separate structure has been added as a state-based NFT micro chain within the Notus architecture. With this state-based structure, digital content will be stored in an encrypted manner. In this way, only the owner of the NFT will be able to see the original NFT, while others will be able to see a replica of the NFT. Thanks to this security layer, Notus ensures that the NFT ecosystem (such as audio, video, music and contracts, etc.) is widely used and this process is easily managed.

For example;
Leonardo Da Vinci's Mona Lisa in the Louvre museum can be given. Almost all museums display replicas rather than originals. When the replica work is damaged or stolen, the original work continues to protect its existence secretly. This gives the museum an easier and trouble-free management.

## Wallet

Wallets are one of the most fundamental building blocks that enable users to experience blockchain. The main way users can transact on the blockchain is through digital signatures given the ability to be used with these wallets. Users sign transactions using their private keys. This signing and verification is done using the relevant public keys (Public and Private Key). And the transaction is executed.

As in other blockchain networks, all transactions (Transfer, Smart Contract, NFT, etc.) on Notus Network are made through wallets.

### How to create a Notus Wallet?

#### Creating Keywords

The BIP39 standard word list is used to generate the wallet address. Other networks use lists of 12 or 24 words. Notus Network accepts this number as 16 words as standard. Using 16 words, it creates a wallet address where the same words cannot be found together.

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

Private Key is a 256-bit (32-byte) key because the Prime256v1 algorithm is used.

The formed words are combined with a delimiter character. This delimiter cannot be any letter or number.

Example:

```
Input = "giggle","injury","bracket","treat","olive","cave","sheriff","kiwi","grow","human","appear","fat","pulse","radar","method","myth"
Output = giggle:injury:bracket:treat:olive:cave:sheriff:kiwi:grow:human:appear:fat:pulse:radar:method:myth
```

The MD5 hash of the generated words is taken one by one.

Example:

```
Inpu = "giggle","injury","bracket","treat","olive","cave","sheriff","kiwi","grow","human","appear","fat","pulse","radar","method","myth"
Output
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

The SashaHash of the combination of all words is taken twice.

```js
SashaHash(SashaHash(allWords) + : + allWords)
```

```
Output
-
7f74a2d907a8ee1a6cef35dd886247fec7e28403e4f101f5a5127c6ae0acdc2aa5981edf75bc056e98bc218443139232cea
1fd53f1efe1753c34d2fbe055c0a23169134bc6ddf78d1f48838ab2d450364388ea91fcf1fafe6712291000917a56e19
d151dc42a1391fc2a4d7a612484df3e06df6da950d31
```

The sasha output produced with the MD5 hashes produced in a loop is summed, and the Sha1 hash is taken and the hexi is reduced by 2.

```js
hash[i] = shrinkHex(Sha1Hash(sashaHashOutput + : + hash[i]), 2)
result += hash[i]
```

The value that comes out of the loop is taken as a private key.

```
Output
-
7d9bdc8bb285bcc44d4805a5b3fc524194fe5305f6120e764f31ff00c244f915
```

#### Public Key

Public Key is an address created from X and Y points using Private Key. Unlike Bitcoin, Notus Network uses the Prime256v1 algorithm.
["_Eliptic Curve Cryptography_" (https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)

```
Output
-
19eb745ebf2864ee8bb21bf2617d073c3e4ae5b92ee40cd335260b80ddf1f29e63c9199d7692906c43f553de0ec812e2f0ab2560066956950c389c7b5985fe82
```

#### Wallet Address

A wallet address is a combination of numbers and letters. The wallet address is created by passing the Public Key through several steps.

0 is added to the beginning of the x and y points of the Public Key.

`publicCords = 0 + publicKey.X + 0 + publicKey.Y`

The mode of the Public Key with the last letter of the Y value or the number 2 is taken. If the result is 0, 20 is added to the beginning of the X value of the Public Key, otherwise 30 is added.

```js
pubCorsMain =
  (parseInt(publicKey.Y.substring(publicKey.Y.length - 1), 16) % 2 == 0
    ? "020"
    : "030") + pubCorsX;
```

The network type of the created wallet address also affects the output of the wallet address to be created.
Change list according to network types:

| Network Type | Byte String | Network Type Text |
| :----------- | :---------- | :------------------ |
| Mainnet      | 10          | NR                  |
| Testnet      | 20          | NT                  |
| Devnet       | 30          | ND                  |

First, the SashaHash is taken twice, reducing the hex by 22. As a result, the first hash is obtained.

```js
hash1 = shrinkHex(SashaHash(SashaHash(pubCorsMain)), 22);
```

Then again, the SashaHash is taken twice, its hex is reduced by 4. As a result, the second hash is obtained.

```js
hash2 = shrinkHex(SashaHash(SashaHash(networkTypeByte + publicCords)), 4);
```

The two hashes and "_Network Type Byte_" obtained as the last operation are summed. The base58 encoding of the aggregated value is taken and "_Network Type String_" is prepended. As a result, the wallet address is obtained.

```js
walletKey = networkTypeString + bs58encode(networkTypeByte + hash1 + hash2, 36);
```

```
Output
-
NREAj7a29qz1GhXoX88ebRd7zMXtiWMyyy6QkG
```

### Heritage-Based Wallet

One of the biggest problems that has arisen with the spread of the blockchain is the problem of forgetting the wallet private key or seed phrases. Even in Bitcoin, which has a supply of only twenty-one million, it is estimated that close to one million Bitcoins cannot be reached due to the wallet owners forgetting or losing their passwords. Another feature developed for wallets with "Complex Block Architecture" and "State-Based Block Architecture", which are the main carriers of Notus Network design, is "Heritage-Based System".

The mechanism of operation of this feature is as follows.

Wallet holders authorize inheritance for the assets in their account, provided that they are transferred to a different wallet (either a personal wallet or a friend's wallet address) within a certain period of time. At the end of this period, it can automatically transfer all its assets to the wallet to which it is authorized to inherit. Even if the wallet owners have forgotten their passwords, they can ensure that all the assets in their accounts are transferred to the wallet to which they are authorized to inherit.

The Heritage-Based wallet can also be used for different purposes.

· It can be used as a bequest or donation of assets to private or corporate organizations in real terms.
· It can be used for the certainty of the payment of the debt for future debt payments.
· Offering a more secure payment infrastructure, it can enable people to move more comfortably and without a doubt.

For example;
· Suppose John owns a wallet on the Notus network.
· John chooses a different wallet as heir for the assets in his Notus wallet.
· John chooses the date on which the assets in his wallet will be transferred to the heir wallet.
· Even if John has forgotten the password of his wallet by the date he determined, his assets will be transferred.
· John can use all his assets as he wishes by reaching the heir's wallet or transferring them to the person he chooses as heir.

### Time-Based Wallet

Yeni mimariyle birlikte "_Tarihli Soğuk Cüzdan_" kavramı ortaya çıkmıştır. Tarihli Soğuk Cüzdan'da verdiğiniz tarihe kadar hesabınız kilitlenir. Saldırganlar hesabınızın özel anahtarını bilseler bile verdiğiniz tarihe kadar işlem yapamazlar.

Tarih verdiğinizde sizden en az 8 haneli ve en çok 32 haneli bir şifre girmeniz istenir. Girdiğiniz şifre verdiğiniz tarihe kadar kapalı olan hesabınızın, verdiğiniz tarihten sonraki ilk işlemi için gereklidir.

### Cold Wallet

Blok Zinciri dünyasındaki en önemli veri "Hesaba Ait Özel Anahtar" olarak bilinmektedir. Her ne kadar özel donanımsal cihazlar geliştirilse de bu cihazlar sadece özel anahtarınızın virüs veya saldırganlar tarafından ele geçirilmesini engellemesine rağmen hala Brute-Force (deneme yanılma) ihtimalîne karşı korunmasızdır. Eklenen her güncellemenin kaynağı, Notus ‘un sahip olduğu durum tabanlı blok mimarisidir. Bu mimari sayesinde getirilen yenilikle birlikte, kullanıcının isteği dahilinde kullanıcının hesabı, verdiği tarihler arasında ve verdiği şifre ile kilitlenir. Saldırganlar hesaba ait özel anahtarı bilseler bile hesabın içerisindeki bakiyeye ulaşamazlar.
