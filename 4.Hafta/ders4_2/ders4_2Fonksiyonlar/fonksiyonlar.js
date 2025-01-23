// DRY
function fonksiyonAdi() {
  console.log("Merhaba Dunya!!!");
}
fonksiyonAdi();
function konularArasiYorumCizgisi() {
  console.log("---------------------------------------------------------");
}

konularArasiYorumCizgisi();
console.log("parametreli fonksiyonlar");
konularArasiYorumCizgisi();
//
function gizleGoster() {
  const menu = document.getElementById("menu");
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
// Parametreli fonksiyonlar

function merhabaDe(isim) {
  console.log(`Merhaba ${isim} Hosgeldiniz`);
  //   console.log("Merhaba " + isim + " Hosgeldiniz");
}
merhabaDe("Mevlut");
konularArasiYorumCizgisi();
merhabaDe("Hasan");
konularArasiYorumCizgisi();
const _name = "Mehmet";
merhabaDe(_name); //merhabaDe('Msehmet');
// innerHtml ornegi

function karsilama() {
  const inputValue = document.getElementById("name").value;
  document.getElementById("karsilamaText").innerHTML =
    "Merhaba " + "<i>" + inputValue + "</i>" + " HosGeldiniz";
}
konularArasiYorumCizgisi();
function adSoyad(isim, soyisim) {
  console.log(isim, soyisim);
}
adSoyad("Cihan", "BAS");
//
function topla(sayi1, sayi2) {
  console.log(sayi1 + sayi2);
}
topla(21, 1);
// Deger Donduren Fonksiyonlar
