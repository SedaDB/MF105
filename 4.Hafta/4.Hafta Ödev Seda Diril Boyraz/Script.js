//1- JavaScript'te boş bir dizi nasıl oluşturulur?
const diziBos = [];

//2- Bir dizinin ilk ve son elemanlarına nasıl erişilir?
let dizi1 = [1, 2, 3, 4];
const ilkEl = dizi1[0];
const sonEl = dizi1[dizi1.length - 1];

//3- Bir diziye bir eleman en sona nasıl eklenir?
dizi1.push(5);

//4- Bir diziden son eleman nasıl kaldırılır?
dizi1.pop();

//5- JavaScript'te bir dizinin elemanları üzerinde nasıl döngü kurulur?
dizi1.forEach((eleman) => {
  console.log(eleman);
});

//6- Bir dizide bir elemanın var olup olmadığı nasıl kontrol edilir?
const varMi = dizi1.includes(3);

//7- Bir dizide belirli bir indeksdeki eleman nasıl kaldırılır?
dizi1.splice(2, 1); // 2. indeksdeki elemanı kaldırır

//8- Bir dizinin elemanlarına nasıl erişilir?
for (let i = 0; i < dizi1.length; i++) {
  console.log(dizi1[i]);
}

//9- Bir arrayi baska bir array'a nasil kopyalariz?
const yeniDizi = [...dizi1];

// veya
const yeniDizi2 = [];
for (let i = 0; i < dizi1.length; i++) {
  yeniDizi.push(dizi1[i]);
}

// veya
const yeniDizi3 = dizi1.slice();

// veya
const yeniDizi4 = Array.from(dizi1);

//10- Verilen bir dizinin en kucuk elemanini donen bir fonksiyon yaziniz.
function enKucukEleman(dizi) {
  return Math.min(...dizi);
}

//veya
function enKucukEleman(dizi) {
    let enKucuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
      if (dizi[i] < enKucuk) {
        enKucuk = dizi[i];
      }
    }
    return enKucuk;
  }

//11- Verilen bir dizinin en buyuk elemanini donen bir fonksiyon yaziniz.
function enBuyukEleman(dizi) {
  return Math.max(...dizi);
}

//veya
function enBuyukEleman(dizi) {
    let enBuyuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
      if (dizi[i] > enBuyuk) {
        enBuyuk = dizi[i];
      }
    }
    return enBuyuk;
  }

//12- Verilen bir dizinin en buyuk 2.elemanini donen bir fonksiyon yaziniz
function ikinciEnBuyuk(dizi) {
  const benzersizDizi = [...new Set(dizi)].sort((a, b) => b - a);
  return benzersizDizi[1];
}

//veya 
function ikinciEnBuyuk(dizi) {
    let enBuyuk = -Infinity;
    let ikinciBuyuk = -Infinity;
    for (let i = 0; i < dizi.length; i++) {
      if (dizi[i] > enBuyuk) {
        ikinciBuyuk = enBuyuk;
        enBuyuk = dizi[i];
      } else if (dizi[i] > ikinciBuyuk && dizi[i] < enBuyuk) {
        ikinciBuyuk = dizi[i];
      }
    }
    return ikinciBuyuk;
  }


//13- Verilen bir dizinin en buyuk ve en kucuk elemani arasindaki farki donen bir fonksiyon yaziniz.
function enBuyukVeKucukFarki(dizi) {
  const enBuyuk = Math.max(...dizi);
  const enKucuk = Math.min(...dizi);
  return enBuyuk - enKucuk;
}

//veya
function enBuyukVeKucukFarki(dizi) {
    let enBuyuk = dizi[0];
    let enKucuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
      if (dizi[i] > enBuyuk) enBuyuk = dizi[i];
      if (dizi[i] < enKucuk) enKucuk = dizi[i];
    }
    return enBuyuk - enKucuk;
  }

//14- 5 elemanli bir dizi verildiginde bu 5 eleman icerisindeki en buyuk 4 sayiyi ve en kucuk 4 sayiyi toplayan bir fonksiyon yaziniz.
function enBuyukVeKucukDortToplam(dizi) {
  const siraliDizi = [...dizi].sort((a, b) => a - b);
  const enKucukDortToplam = siraliDizi.slice(0, 4).reduce((a, b) => a + b, 0);
  const enBuyukDortToplam = siraliDizi.slice(1).reduce((a, b) => a + b, 0);
  console.log(enKucukDortToplam, enBuyukDortToplam);
}

//veya
function enBuyukVeKucukDortToplam(dizi) {
    const diziKopya = dizi.slice(); // Dizi kopyalanır
    diziKopya.sort((a, b) => a - b); // Kopya dizi küçükten büyüğe sıralanır
  
    let enKucukDortToplam = 0;
    let enBuyukDortToplam = 0;
  
    for (let i = 0; i < 4; i++) {
      enKucukDortToplam += diziKopya[i];
      enBuyukDortToplam += diziKopya[diziKopya.length - 1 - i];
    }
  
    console.log(enKucukDortToplam, enBuyukDortToplam);
  }

