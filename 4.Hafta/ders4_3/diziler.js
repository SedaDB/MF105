// const notlar=[]
const elma = "Elma";
const armut = "Armut";
const muz = "Muz";
const meyveler = ["Elma", "Armut", "Muz"];
const ogrenci = ["Cihan", "BAS", 10];

// index her zaman 0'(sifirdan) baslar
console.log(meyveler[0]);
meyveler.push("Ceviz");
console.log(meyveler.length);
meyveler.pop();
console.log(meyveler);
meyveler.pop();
console.log(meyveler);
// Basit Degiskenler, Deger tipliler (value types)
// string;
// integer;
// boolean;

// Komplex degiskenler, Referans tipli degiskenler

// Diziler;
// nesneler;

//
// fonksiyonlar;

// basit degiskenlerde kopyalama
const a = "a";
let b = "B";
const c = b;
b = 12;
console.log("c", c);
console.log("b", b);
const meyveler2 = meyveler; // referans kopyalanir
// Burada meyveler, meyveler2'ye deger degil o degerlerin bulundugu adresi kopyalar,
// ve ikiside ayni adresi gosterdigi icin birbirini etkiler
meyveler.push("karpuz");
console.log("meyveler2", meyveler2);
meyveler.pop();
meyveler[0] = "Seftali";
console.log("meyveler2", meyveler2);
const meyveler3 = [...meyveler]; // deger kopyalanir,
// Burada meyveler'in icinde ki butun degerler
// alinip meyveler3'e aktarilir ve aralarinda hic bir bag kalmaz
console.log("meyveler3", meyveler3);
meyveler3.push("test");
console.log("meyveler3", meyveler3);
//
