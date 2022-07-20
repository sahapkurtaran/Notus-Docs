# Notus Nasıl Çalışır

Notus Network bir blok zinciri platformu olarak merkeziyetsiz bir veri tabanı özelliklerini taşımaktadır. Buradaki veri tabanı farklı bilgi, veri ve işlem kayıtlarını tutmak, çalıştırmak ve diğer düğümlere dağıtmak amacıyla bir araya getirilmiş merkeziyetsiz bir veri topluluğudur.

Notus Network ile oluşturulan blok zinciri; ağa bağlı tüm düğümlerin işlemci, bellek ve depolama alanlarının ortak kullanımı ve paylaşımı ile oluşturularak tüm platforma dağıtılmaktadır. Geliştiriciler, bu platform üzerinde “akıllı sözleşme” olarak adlandırılan ve merkeziyetsiz olarak çalıştırılabilen uygulamaları geliştirme, dağıtma ve çalıştırma işlemlerini yapabilmektedir.

Merkezi ağlarda çalışan uygulamalar için gereken aylık veya yıllık kiralama bedellerine karşın merkeziyetsiz platformlarda uygulama sadece çalıştırılma esnası için işlem ücreti oluşmaktadır.

Notus Platformu merkeziyetsiz bir organizasyon olmasından dolayı alınan kararlar merkezi platformlara nazaran topluluk ile birlikte alınmaktadır. Topluluk ve yönetim ile ilgili detaylar, ağa dahil olan madenci / doğrulayıcıların oluşturdukları her bloğun diğer düğümler tarafından onaylanması ile ağa dahil edilmektedir.

## Ölçeklenebilirlik

Notus Network’ün odaklandığı sorunların başında blok zinciri ağlarında yaşanan ölçeklenme ve ağ yoğunluğunun kontrol edilmesi problemi gelmektedir. Bu problem farklı başlıklar altında incelenmiştir ve bu sorunlar doğrultunsa platform güncelleştirmesine gidilmiştir.

1. Dağıtık İşlem Havuzları,
2. Değişken Nonce Hesaplaması,
3. Madenci / Doğrulayıcı Değişken Rol yapısı.

### Dağıtık İşlem Havuzları

Ölçeklenme sorununa çözüm üretebilmek amacıyla atılan ilk adım olarak tüm düğümlerin kendilerine ait işlem havuzlarının olması kararlaştırılmıştır. İşlem havuzlarının da merkeziyetsiz hale getirilmesi ağ trafiğinin artış gösterdiği durumlarda ağın kilitlenmesini önlemek amacıyla tasarlanmıştır.

### Değişken Nonce Hesaplaması

Blok zincirinde oluşturulan her bloğun değiştirilememesini garanti altına almak için hesaplanan blok sayısına “Nonce” adı verilmektedir. Nonce hesaplamasında kullanılan yöntemler ağın yoğunluk durumlarına göre değiştirilebilir olarak tasarlanarak yoğunluğun hızlı bir biçimde azaltılması hedeflenmiştir.

### Madenci / Doğrulayıcı Rol Yapısı

Notus Network içerisinde merkeziyetsiz yapıyı ayakta tutan düğümler bulunmaktadır. Bu düğümlerin dönüşümlü rol türleri bulunmaktadır. Bu roller, coin kazımı esnasında “Madenci” kimliği olarak tanımlanırken, diğer düğümler tarafından yapılan işlemlerin doğrulanması esnasında “_İşlem Doğrulayıcı_” olarak adlandırılmaktadır.

Notus olarak ağ trafik yoğunluğunun madencilerin birbirleri ile rekabetinden kaynaklandığı kararına varılmıştır. Bu rekabet durumu madencileri her seferinde daha güçlü donanım kullanmalarını zorunlu hale getirmektedir. Bu soruna çözüm olarak bir algoritma dahilinde madencilerin sıra ile çalışmaları ve elde edilecek gelirin tüm ağda bulunan düğümler tarafından paylaşılması modeli geliştirilmiştir.

## Düşük Karbon Ayak İzi

Notus platformunun kaynak verimliliğine verdiği önemin bir sonucu olarak tasarım aşamasında enerji sarfiyatı ve kaynak verimsizliği konuları her zaman ön planda tutulmuştur. Blok işlemlerinin hızlı olması gerektiği kadar güvenli olması da gerektiği için nonce hesaplaması, hash kullanımı, merkle-tree yapısında ve madenci organizasyonunda değişikliklere gidilmiştir.

## Tam Merkeziyetsizlik

Notus Network olarak, Bitcoin ile ortaya konan dijital merkeziyetsizlik manifestosunun korunmadığı kanaatine varılmıştır. Blok zinciri ruhunun tekrar hayat bulması için yönetim, düğüm ve tüm platform içerisinde topluluğun fikirleri, işlem havuzlarının dağılımı gibi Notus’u merkezileşmeye yakınlaştıran tüm unsurlar yeniden gözden geçirilmiştir.

## Kolay Kullanım

Blok zinciri ağlarının kullanımı arttıkça geliştirme süreçlerinde yaşanan zorluklarda gün yüzüne çıkmaktadır. Notus platformunun geliştirilmesi sürecinde farklı platformların süreçlerini deneyimleyerek kullanıcı deneyimini kolaylaştırmak benimsenmiştir. Bu sebepten ötürü Notus Network’ü karma blokların aynı ağ üzerinde çalıştığı state(durum) tabanlı bir platform olarak tasarlamaya karar verilmiştir.

Bu karma blok mimarisi sayesinde, standart yapılara sahip Token ve NFT oluşturma süreci belirlenmiş blok tipleri ile belirli bir sihirbaz aracılığıyla veya Github üzerinde de yer alan kitaplık aracılığıyla oluşturulabilmektedir. Bununla birlikte akıllı kontratların çalışacağı yazılımsal ortamın sağlanması amacıyla da sanal makina için kullanılması planlanan programlama dilini ise JavaScript tabanlı bir dil olarak belirledik.
