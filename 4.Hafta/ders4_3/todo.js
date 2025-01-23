const todos = [];
const todoList = document.getElementById("todoList");
function ekle() {
  const value = document.getElementById("text").value;
  todos.push(value);
  // diziye eleman eklemek icin kullanilir
  htmlGenerate();
  console.log(todos);
  document.getElementById("text").value = "";
}
function sil() {
  todos.pop();
  // dizide ki son elemani siler
  htmlGenerate();
  console.log(todos);
}
function konumaGoreSilme(index) {
  todos.splice(index, 1);
  // o index'de ki elemani array'dan siler

  htmlGenerate();
}

function htmlGenerate() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const p = document.createElement("p");
    // p diye bir element olusturuldu
    p.innerText = index + ": " + todo;
    // olusturulan P elementinin icine index ve todo yazildi

    p.addEventListener("click", () => konumaGoreSilme(index));
    // p icin click event'i eklendi ve ona bir fonksiyon atandi

    // p.click = konumaGoreSilme(index);
    todoList.appendChild(p);
    // olusturulan element todoList'e eklendi
  });
}
