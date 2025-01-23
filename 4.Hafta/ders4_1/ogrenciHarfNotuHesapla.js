const $ogrencinotu = prompt("Notunuzu giriniz");
console.log("ogrenciNotu", $ogrencinotu);
// AA-> 100-85
// BB-> 70-84
// CC-> 60-69
// DD -> 45-59
// FF -> 0-44
const $numericOgrenciNotu = parseInt($ogrencinotu);
console.log("_not", $numericOgrenciNotu);
if ($numericOgrenciNotu == NaN) {
  // kisi sayisal bir deger girmedigi zaman parseInt NaN(Not a Number) donecektir
  alert("lutfen sayisal bir deger giriniz");
} else {
  if ($ogrencinotu < 101 && $ogrencinotu > -1) {
    // ogrenci notu istedigimiz kriterlerde ise burasi calisacaktir
    if ($numericOgrenciNotu > 84) {
      console.log("Tebrikler aldiginiz nott:AA");
    } else if ($numericOgrenciNotu > 70) {
      console.log("Tebrikler aldiginiz nott:BB");
    } else if ($numericOgrenciNotu > 59) {
      console.log("Tebrikler aldiginiz nott:CC");
    } else if ($numericOgrenciNotu > 44) {
      console.log("Tebrikler aldiginiz nott:DD");
    } else {
      console.log("uzgunuz dersten kaldiniz notunuz :FF");
    }
  } else {
    alert("girdiginiz deger 0-100 araliginda olmali");
  }
}
