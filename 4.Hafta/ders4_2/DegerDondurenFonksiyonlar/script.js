//  Deger Donduren Fonksiyonlar
function toplama(sayi1, sayi2) {
  const topla = sayi1 + sayi2;
  return topla;
}
function alanHesapla(kenar1, kenar2) {
  return kenar1 * kenar2;
}
const notlarinToplami = toplama(10, 20);
console.log(notlarinToplami);

const alan1 = alanHesapla(100, 20);

if (alan1 > 1000) {
  console.log("1 Donumden buyuk", alan1);
} else {
  console.log("1 Donumden kucuk");
}

// kare alani hesaplama

function kareAlaniHesapla(kenar) {
  // return kenar * kenar;
  const alan = alanHesapla(kenar, kenar);
  return alan;
}
//
function renkDonustur(renk) {
  if (renk == "black") {
    return "#000";
  }
  if (renk == "white") {
    return "#fff";
  }
  return "#007a";
}
const beyaz = renkDonustur("white");
console.log("beyaz", beyaz);
