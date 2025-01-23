//Soru 1: JavaScript'te değişken tanımlamak için hangi anahtar kelimeler kullanılır ve aralarındaki fark nedir?

//Cevap: var, let ve const anahtar kelimeleri kullanılır. var anahtar kelimesi global değişken tanımlamak için kullanılırken let ve const anahtar kelimeleri blok değişken tanımlamak için kullanılır. let anahtar kelimesi değişkenin değerini değiştirebilirken const anahtar kelimesi değişkenin değerini değiştiremez.

//Soru 2: JavaScript'te veri tipleri nelerdir?

//Cevap: JavaScript'te veri tipleri 7 tanedir. Bunlar: String, Number, Boolean, Undefined, Null, Object ve Symbol'dür.

//Soru 3: for of döngüsü nasıl çalışır? Bir dizi üzerindeki tüm elemanları ekrana yazdıran bir örnek verin.
//Cevap: for of döngüsü, bir dizi üzerindeki tüm elemanları döngü içinde kullanmamızı sağlar. Döngü, dizi üzerindeki her elemanı döngü içinde kullanarak döngüyü çalıştırır.
//Örnek:
const arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  console.log(i);
}

//Soru 4: Bir fonksiyon nasıl tanımlanır? Parametre ve dönüş değeri nedir?
//Cevap: Bir fonksiyon tanımlamak için function anahtar kelimesi kullanılır. Fonksiyonun adı ve parametreleri parantez içinde yazılır. Fonksiyonun içinde yapılacak işlemler belirtilir ve gerekiyorsa bir değer döndürülür. Fonksiyonun dönüş değeri return anahtar kelimesi ile belirtilir.
//Örnek:
function add(a, b) // a ve b parametreleri olan add fonksiyonu tanımlanmıştır.
{
  const sum = a + b; // a ve b parametrelerinin toplamı sum değişkenine atanmıştır.
  return sum;
}


//Soru 5: 12 ay için mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Hangi ayların hangi mevsime denk geldiğini gösteren kodu yazınız.
//Örnek:
//  Sonbahar: Eylül, Ekim, Kasım
//  Kış: Aralık, Ocak, Şubat
//  İlkbahar: Mart, Nisan, Mayıs
//  Yaz: Haziran, Temmuz, Ağustos
const month = "Haziran";
if (month === "Eylül" || month === "Ekim" || month === "Kasım") {
  console.log("Sonbahar");
} else if (month === "Aralık" || month === "Ocak" || month === "Şubat") {
  console.log("Kış");
} else if (month === "Mart" || month === "Nisan" || month === "Mayıs") {
  console.log("İlkbahar");
}
else if (month === "Haziran" || month === "Temmuz" || month === "Ağustos") {
  console.log("Yaz");
}
else {
  console.log("Geçersiz ay");
}
//Soru 6: Bir aydaki gün sayısını söyleyen bir program yazın. String message için "template literals" özelliğini kullanınız.
/*Örnek:
  Ay giriniz: Ocak yada OCAK
  Ocak 31 gündür*/
function gunSayisi(ay) {
  const aylar = {
    Ocak: 31, Şubat: 28, Mart: 31, Nisan: 30, Mayıs: 31,
    Haziran: 30, Temmuz: 31, Ağustos: 31, Eylül: 30,
    Ekim: 31, Kasım: 30, Aralık: 31
  };

  const ayIsmi = ay.charAt(0).toUpperCase() + ay.slice(1).toLowerCase();
  return aylar[ayIsmi] ? `${ayIsmi} ayı ${aylar[ayIsmi]} gündür` : 'Geçersiz ay';
}

console.log(gunSayisi('ocak')); // Ocak 31 gündür


//Soru 7: 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Diziyi sıralayın ve en küçük ve en büyük yaşı bulun
const sortedAges = ages.sort();
const min = sortedAges[0];
const max = sortedAges[sortedAges.length - 1];
console.log('En küçük yaş:', min);
console.log('En büyük yaş:', max);
//Medyan yaşı bulun(dizinin ortasındaki eleman ama ortada iki eleman varsa elemanlar ikiye bölünür)
const middle = Math.floor(sortedAges.length / 2);
const median = sortedAges.length % 2 === 0 ? (sortedAges[middle - 1] + sortedAges[middle]) / 2 : sortedAges[middle];
console.log('Medyan yaş:', median);
//Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)
const average = ages.reduce((a, b) => a + b) / ages.length;
console.log('Ortalama yaş:', average);
//Yaş aralığını bulun (maks - min)
const range = max - min;
console.log('Yaş aralığı:', range);
//abs() metodunu kullanarak (min - ortalama) ve (maks - ortalama) değerlerini karşılaştırın,
console.log('Min-ort fark:', Math.abs(min - average));
console.log('Max-ort fark:', Math.abs(max - average));
//Bir dizi içindeki çift sayıları bulmak için filter metodunu kullanarak bir fonksiyon yazınız.
const evenNumbers = ages.filter(age => age % 2 === 0);
console.log('Çift sayılar:', evenNumbers);
//Reduce metodunu kullanarak bir dizideki tüm sayıların toplamını bulan bir fonksiyon yazınız.
const sum = ages.reduce((a, b) => a + b);
console.log('Toplam:', sum);

//Soru 8: (Aşağıdaki ülke listesini kullanmanız gerekmekte.)
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
//countries array dizisinden ilk 10 ülkeyi dilimleyin ( Slice edin )
console.log(countries.slice(0, 10));
//countries array dizisinden ortadaki ülkeleri bulun.
let middleIndex;
if (countries.length % 2 === 0) {
  middleIndex = countries.length / 2;
  console.log(countries.slice(middleIndex - 1, middleIndex + 1));
} else {
  // middleIndex yukarı yuvarlama
  middleIndex = Math.ceil(countries.length / 2);
  console.log(countries[middleIndex - 1]);
}
//countries dizisini çift ise iki eşit diziye bölün. countries dizisi çift değilse, ilk yarı için bir ülke fazla olarak bölün
const firstHalf = countries.slice(0, middleIndex);
const secondHalf = countries.slice(middleIndex);
console.log(firstHalf);
console.log(secondHalf);
//Ters Ülkeler adlı bir işlev yazın, ülkeler dizisini alır ve önce diziyi kopyalar ve orijinal dizinin tersini döndürür
const reverseCountries = countries.slice().reverse();
console.log(reverseCountries);
//Dizinin tüm öğelerinin aynı veri türünde olup olmadığını kontrol eden bir işlev yazın.
const isSameType = arr => arr.every(value => typeof value === typeof arr[0]);

//Soru9: Aşağıdaki kodda this anahtar kelimesi neye referans verir?
const person = {
  name: 'Ali',
  greet: function () {
    console.log('Merhaba, ' + this.name);
  }
};
person.greet();
//Cevap: this anahtar kelimesi, bir fonksiyonun çalıştığı bağlamı belirtir. Bu örnekte this anahtar kelimesi, person nesnesine referans verir.

//Soru 10: Aşağıdaki kodu açıklayın ve çıktısını tahmin edin
let numbers = [1, 2, 3, 4, 5];
let result = numbers.map(x => x * 2);
console.log(result);
//Cevap: Bu kod, numbers dizisindeki her elemanı 2 ile çarparak yeni bir dizi oluşturur. Bu yeni diziyi result değişkenine atar ve ekrana yazdırır.

//Soru 11: Aşağıdaki yönergelere göre bir ürün nesnesi oluşturup yine aşağıda bulunan fonksiyonları yazın.
//Ürün: Her ürün bir nesne olarak temsil edilecek (adı, fiyatı, stok miktarı).
//Alışveriş Sepeti: Ürünleri ve miktarlarını saklamak için Map kullanılacak.
//Eklenen Ürünler: Set kullanılarak benzersiz ürünlerin takibi yapılacak.
//Ürün nesnesi : name,price,quantity;
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
//- Alışveriş sepeti (Map):
const cart = new Map();
//- Sepete eklenen ürünlerin takibi (Set):
const addedProducts = new Set();
//- Ürün ekleme fonksiyonu:
function addProduct(product, quantity) {
  if (addedProducts.has(product)) {
    cart.set(product, cart.get(product) + quantity);
  } else {
    addedProducts.add(product);
    cart.set(product, quantity);
  }
}
//- Sepetteki ürünleri listeleme fonksiyonu:
function listProducts() {
  for (let [product, quantity] of cart) {
    console.log(`${product.name} - ${product.price} - ${quantity}`);
  }
}
//- Örnek ürünler ve sepete ekleme:
const product1 = new Product('Kalem', 5, 10);
const product2 = new Product('Defter', 10, 5);
addProduct(product1, 10);
addProduct(product2, 5);
/*Aşağıdaki yönergeleri göz önünde bulundurarak soruları cevaplayın. 
 Kategori Bazlı İndirim:
"Elektronik" kategorisindeki ürünlere %10 indirim uygulayın.
"Aksesuar" kategorisindeki ürünlere %5 indirim uygulayın.
Kampanya - İkinci Ürün 1 TL:
Sepette aynı üründen birden fazla varsa, her ikinci ürüne 1 TL fiyat uygulayın. 
(Örneğin: 2 adet alınırsa biri 1 TL, 4 adet alınırsa 2 tanesi 1 TL olur.)
 Kargo Ücreti:
"Elektronik" kategorisindeki ürünlerin toplam fiyatı 500 birim veya üzerindeyse kargo ücretsiz, aksi halde 25 birim kargo ücreti alınır.
"Aksesuar" kategorisindeki ürünlerin toplam fiyatı 200 birim veya üzerindeyse kargo ücretsiz, aksi halde 15 birim kargo ücreti alınır.
Stok Kontrolü:
Eğer bir ürünün stok miktarı, sepette belirtilen adetten az ise, sepete eklenmesin ve kullanıcıya bir mesaj gösterilsin.
 İndirim Kuponu:
Kullanıcı, bir indirim kuponu kullanabilir. Eğer kupon kodu "INDIRIM10" ise, toplam sepet fiyatından %10 indirim uygulanır.*/
//SORULAR
//1- Sepetteki ürünlerin, indirimli fiyatlarını, toplam fiyatlarını ve kargo ücretlerini hesaplayın.

//2- Stok kontrolüne göre, stok yetersiz olan ürünler için kullanıcıya uyarı mesajı gösterin.
//3-  Kupon indirimi varsa, sepet toplam fiyatına uygulayın.
//4- Sepetteki ürünlerin detaylarını ve sepet toplam fiyatını konsola yazdırın.

//Cevap:
const urunler = [
  { id: 1, isim: "Laptop", fiyat: 1200, kategori: "Elektronik", stok: 5 },
  { id: 2, isim: "Mouse", fiyat: 50, kategori: "Elektronik", stok: 0 },
  { id: 3, isim: "Klavye", fiyat: 150, kategori: "Elektronik", stok: 10 },
  { id: 4, isim: "Kulaklık", fiyat: 75, kategori: "Aksesuar", stok: 3 },
  { id: 5, isim: "Şarj Kablosu", fiyat: 30, kategori: "Aksesuar", stok: 8 },
  { id: 6, isim: "Tablet", fiyat: 450, kategori: "Elektronik", stok: 2 },
];

// Sepet (ürün ID ve miktarları):
const sepet = [
  { id: 1, miktar: 2 },
  { id: 3, miktar: 1 },
  { id: 4, miktar: 2 },
  { id: 5, miktar: 5 },
  { id: 6, miktar: 1 },
];

// Kupon Kodu:
const kupon = "INDIRIM10";

// İşlevler:
function hesapla(sepet, kupon) {
  let toplamFiyat = 0;
  let kargoUcret = 0;
  const uyarilar = [];
  const sepetDetay = [];

  sepet.forEach((sepetUrunu) => {
    const urun = urunler.find((u) => u.id === sepetUrunu.id);
    if (!urun) return;

    if (sepetUrunu.miktar > urun.stok) {
      uyarilar.push(`${urun.isim} stokta yeterli değil.`);
      return;
    }

    // İndirim Uygulama
    let indirimliFiyat = urun.fiyat;
    if (urun.kategori === "Elektronik") indirimliFiyat *= 0.9;
    if (urun.kategori === "Aksesuar") indirimliFiyat *= 0.95;

    // İkinci Ürün 1 TL Kampanyası
    const ciftAdet = Math.floor(sepetUrunu.miktar / 2);
    const tekAdet = sepetUrunu.miktar % 2;
    const toplamUrunFiyati = ciftAdet * 1 + tekAdet * indirimliFiyat;

    // Detayları Kaydet
    sepetDetay.push({
      isim: urun.isim,
      miktar: sepetUrunu.miktar,
      birimFiyat: indirimliFiyat.toFixed(2),
      toplam: toplamUrunFiyati.toFixed(2),
    });

    toplamFiyat += toplamUrunFiyati;
  });

  // Kargo Ücreti
  const elektronikToplam = sepetDetay
    .filter((urun) => urunler.find((u) => u.isim === urun.isim).kategori === "Elektronik")
    .reduce((acc, urun) => acc + parseFloat(urun.toplam), 0);

  const aksesuarToplam = sepetDetay
    .filter((urun) => urunler.find((u) => u.isim === urun.isim).kategori === "Aksesuar")
    .reduce((acc, urun) => acc + parseFloat(urun.toplam), 0);

  kargoUcret += elektronikToplam >= 500 ? 0 : 25;
  kargoUcret += aksesuarToplam >= 200 ? 0 : 15;

  // Kupon İndirimi
  if (kupon === "INDIRIM10") toplamFiyat *= 0.9;

  // Sonuç Yazdırma
  console.log("Sepet Detayları:");
  sepetDetay.forEach((urun) => {
    console.log(
      `${urun.isim} - Miktar: ${urun.miktar}, Birim Fiyat: ${urun.birimFiyat}, Toplam: ${urun.toplam}`
    );
  });

  console.log("Uyarılar:", uyarilar.join(", ") || "Yok");
  console.log("Kargo Ücreti:", kargoUcret);
  console.log("Toplam Fiyat (Kupon Dahil):", (toplamFiyat + kargoUcret).toFixed(2));
}

hesapla(sepet, kupon);

