"use strict";
// function add(a: number, b: number) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);
let message = "Hello World !! With TypeScript by Seda Diril Boyraz";
// h1 tagı oluşturduk
let heading = document.createElement("h1");
heading.textContent = message;
// h1 tagını body'ye ekledik
document.body.appendChild(heading);
function getProduct(id) {
    let product = {
        id,
        name: "Laptop",
        price: 1000,
    };
    return product;
}
const product = getProduct("1");
console.log(`Product ${product.id} ${product.name} ${product.price}`);
