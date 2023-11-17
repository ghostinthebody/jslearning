"use strict";

// Задача 1
function sayHello(name) {
    return ("Привет, " + name + "!");
}
console.log(sayHello("Александр"));

// Задача 2
function returnNeighboringNumbers(number) {
    let zxc = [number - 1, number, number + 1];
    return zxc; 
}
console.log(returnNeighboringNumbers(3));


// Задача 3
function getMathResult(a, b) {
    if (typeof(b) !== "number" || b <= 0) {
        return a;
    } 

    let stroka = ""

    for (let i = 1; i <= b; i++) {
        if (i === b) {
            stroka += `${a * i}`;
        } else {
            stroka += `${a * i}---`;
        }
    }     
    return stroka;
}
console.log(getMathResult(4, 5));