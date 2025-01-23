// Degiskenler

const constMaviRenk = "#xzczxcxzc";
const pi = 3.14;
// Daha sonra degeri degistirilemeyecek degiskenler icin const kullanilir
let letMaviRenk2 = "#07afdeee";
// daha sonra degeri degistirlecek degiskenler icin let kullanilir
var varMaviRenk3 = "#07afdeee";
// daha sonra degeri degistirlecek degiskenler icin var kullanilir, let ile aralarinda hic bir fark yok

// constMaviRenk = "red"; // constMaviRenk constant oldugu icin tekrar deger atanamaz

console.log(constMaviRenk);
// ----------LET--------------
letMaviRenk2 = "blue";
console.log("letMaviRenk2", letMaviRenk2);
varMaviRenk3 = 10;
console.log("varMaviRenk3", varMaviRenk3);
//
const $name = "123";
// degisken isimleri buyuk harf, kucuk harf, $ ve _ cizgi ile baslamak zorunda
// rakamlar ile baslayamaz, ama rakam ile devam edebilir
const name123 = "cihan123";
//
const testEl = document.getElementById("test");
testEl.style.color = "red";
testEl.style.backgroundColor = "blue";
testEl.classList.add("menu");

document.getElementById("test").style.color = "red";
document.getElementById("test").style.backgroundColor = "blue";
document.getElementById("test").classList.add("menu");
//
// veri tipleri
// Basit veri tipleri
// string ornek: 'name'
// number :123
// boolean: dogru ve ya yanlis . ornek: true, false
// null, undefined

const name = "cihan "; // string ornegi
const yas = 32;
const ehliyetiVarmi = true; // ehliyeti var
const evliMi = false; // ehliyeti yok

// aritmetik oparatorler
// +, -, =, >,<, % , /
const sayi1 = 12;
const sayi2 = 21;
const topla = sayi1 + sayi2;
const cikar = sayi1 - sayi2;

console.log("toplama ", topla);
console.log("Cikarma", cikar);
const isim = "Cihan";
const soyisim = "BAS";
const nameSurname = isim + " " + soyisim;
const isimSoyIsim = `${isim} ${soyisim}`;
console.log(`Cikarma ${cikar}`);
// windows'da alt+, altGr+ş
// macOS'de e

let sayi3 = sayi1;
sayi3 += sayi2; //sayi3=sayi3+sayi2

const topla2 = 0;
// topla2 += sayi1; Hasan yanlis cevap verdi 12 degil calismaz cunku topla2 const ile olusturulmus
console.log(topla2);
// ogrenciNotu > 85;
// ogrenciNotu<40 ogrenci basarisiz olarak bilgilendirilecektir
const $bolumunden_kalan = 20 % 6;
console.log($bolumunden_kalan);

// javascript conditions/ sartli ifadeler
