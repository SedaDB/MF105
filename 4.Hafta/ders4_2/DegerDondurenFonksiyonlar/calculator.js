function sum(sayi1, sayi2) {
  // toplama islemi yapacak
  return sayi1 + sayi2;
}

const cikarma = (sayi1, sayi2) => {
  return sayi1 - sayi2;
};
// const carpma = (sayi1, sayi2) => sayi1 * sayi2;

const carpma = (sayi1, sayi2) => {
  return sayi1 * sayi2;
};

const sayiDondur = (id) => {
  return parseInt(document.getElementById(id).value);
};
const sonucEl = document.getElementById("sonuc");

function sayilariTopla() {
  const sayi1 = sayiDondur("sayi1");
  const sayi2 = sayiDondur("sayi2");
  const sonuc = sum(sayi1, sayi2);
  sonucEl.innerText = sonuc;
}

// cikarma(12, 21);
const sayilariCikar = () => {
  const sayi1 = sayiDondur("sayi1");
  const sayi2 = sayiDondur("sayi2");
  console.log("sayi1", sayi1);
  const sonuc = cikarma(sayi1, sayi2);
  sonucEl.innerText = sonuc;
};

const sayilariCarp = () => {
  const sayi1 = sayiDondur("sayi1");
  const sayi2 = sayiDondur("sayi2");
  console.log("sayi1", sayi1);
  const sonuc = carpma(sayi1, sayi2);
  sonucEl.innerText = sonuc;
};
