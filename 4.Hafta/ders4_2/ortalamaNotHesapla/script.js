function notHesapla() {
  const vize = parseInt(document.getElementById("vize").value);
  console.log(typeof vize);
  //
  const final = parseInt(document.getElementById("final").value);
  if (vize >= 0 && vize <= 100 && final >= 0 && final <= 100) {
    const ortalama = (vize * 40) / 100 + (final * 60) / 100;
    const ortalamaElement = document.getElementById("ortalama");
    if (ortalama >= 60) {
      // Basarili
      ortalamaElement.style.color = "green";
      ortalamaElement.innerText =
        "Tebrikler Dersi Basarili bir sekilde gectiniz. Notunuz: " + ortalama;
    } else {
      // basarisiz
      ortalamaElement.style.color = "red";
      ortalamaElement.innerText =
        "Maalesef Dersi gecemediniz. Notunuz: " + ortalama;
    }
  } else {
    alert("Girdiginiz degerler 0-100 arasinda olmali");
  }
}
