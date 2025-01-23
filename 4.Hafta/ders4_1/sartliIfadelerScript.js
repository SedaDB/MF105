console.log("sartli");
const sayi1 = 21;
const sayi2 = 21;

if (sayi1 > sayi2) {
  console.log(sayi1 + " buyuktur " + sayi2);
} else if (sayi2 > sayi1) {
  console.log(sayi1 + " kucuktur " + sayi2);
} else {
  console.log("sayilar esit");
}
//
const gecmeNotu = 36;
const enYuksekNot = 100;

const ogrenciNotu = 100;

if (ogrenciNotu > 39) {
  console.log("tebrikler Dersi gectiniz");
} else if (ogrenciNotu < 40) {
  console.log("maalesef dersi gecemediniz");
}

// AA-> 100-85
// BB-> 70-84
// CC-> 60-69
// DD -> 45-59
// FF -> 0-44

// && ve anlamina geliyor, butun kosullar dogru ise sart kabul edilir
// || veya anlamina geliyor, kosullardan bir tanesi saglanirsa sart kabul edilir

if (ogrenciNotu > 89 && gecmeNotu > 39 && enYuksekNot > 70) {
  // gecmenotu39'dan kucuk oldugu icin calismayacaktir, her iki kosulunda dogru olmasi gerekir
}
if (ogrenciNotu > 100 || gecmeNotu > 30) {
  // gecmeNotu 30'dan buyuk oldugu icin calisacaktir, ogrenciNotu 100'den buyuk olmamasina ragmen
}
