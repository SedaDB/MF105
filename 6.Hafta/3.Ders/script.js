
const callback = (n) => {
    return n**2;
};
function cube(callback, n){
    return callback(n) * n;
}
console.log(cube(callback,3));

const highOrder = (n) =>{
    const doSomething = (m) => {}
}

//console.log(highOrder(2)(3)(10))

const numbers = [1,2,3,4,5];

// const sumArray= (arr) => {
// let sum=0;
// const callback
//}

const duration = 1000; // milisaniye

function sayHello(){
    console.log("Hello")
}

