# Oracle

:::note
Şu anda bu dökümantasyon yapım aşamasındadır.
:::

Blok zinciri ağları genel olarak kapalı devre sistemlerdir. Ağ içerisinde yalnızca madenci/onaylayıcı ile hesap sahibi bulunmaktadır. Ancak bazı durumlarda ağın dış dünyadan bazı bilgilere ihtiyacı olmaktadır. Örnek olarak bir akıllı kontratın ihtiyaç duyduğu ürün ve hizmet fiyatı bu bilgilerden sayılmaktadır. Bu bilgileri ağa “_Oracle_” adı verilen başka zincirler sağlamaktadır. Ancak bir ağın işletimi başka bir ağdan gelecek bilgiye bağımlı yapıldığında, ağın işlem hızı o kontrat özelinde bağımlılığın oluştuğu ağın hızı ile doğru orantılı bir hale dönüştürmüş olmaktadır. Dış kaynaklı Oracle aslında sürece fayda sağlayan bir tarafı olmakla birlikte, farklı ağların aynı Oracle'a olan bağımlılığının artışı ile birlikte ağların hızlarına da etki etmeye başlamaları söz konusudur. Notus Network için bu durum kısa vadede bir sorun olarak görünmese de orta ve uzun vadede amacımız hem "_Human Oracle_" hem de "_Node Oracle_" yapısını oy ve konsensus dahilinde mimari içerisinde aktive ederek ağın ihtiyaç duyduğu bilgi dışındaki dış kaynaklara olan bağımlılığını azaltma hedefi doğrultusunda hareket etmekteyiz.
