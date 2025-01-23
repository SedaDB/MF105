const meyveler = ["Elma", "Armut", "Muz"];
meyveler.push("Kayisi");
const herbirMeyve = meyveler.forEach((a, index) => {
  console.log(a, index);
});
const meyveMap = meyveler.map((a, index) => {
  console.log(a, index);
  return index * 2;
});

meyveler.push("Karpuz");
console.log("meyveler", meyveler);
console.log("herbirMeyve", herbirMeyve);
console.log("meyveMap", meyveMap);
//
const sayilar = [1, 234, 3, 5, 65, 63];
// sayilar dizisinde ki sayilarin toplamini bulunuz
// forEach ile map arasinda ki fark map aldigi array'in uzunlugu kadar bir array dondurur,
// forEach ise herhangi bir sey dondurmez, aldigi array'in uzunlugu kadar doner
let toplam = 0;
const sayilarinIkiKati = [];
sayilar.forEach((sayi) => {
  console.log(sayi);
  toplam = toplam + sayi;
  sayilarinIkiKati.push(sayi * 2);
  // toplam += sayi;
});
console.log(toplam);
// sayilar dizisinde ki herbir elementin 3 katini alan kodu yaziniz

const sayilarinUcKati = sayilar.map((sayi) => {
  return sayi * 3;
});
console.log("sayilar", sayilar);
console.log("sayilarinUcKati", sayilarinUcKati);
