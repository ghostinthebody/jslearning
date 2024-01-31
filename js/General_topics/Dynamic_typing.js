"use strict";

// Динамическая типизация - это особенность языка программирования, при которой 
// типы переменных определяются во время выполнения программы, а не во время компиляции.

let x = 10;                                                     /*x динамически типизирован как число*/
console.log(x);

x = "Hello, World!";                                            /*x теперь динамически типизирован как строка*/
console.log(x); 




// to string

const num = 36;
console.log(typeof("https://vk.com/catalog/" + num));           /*Можно тоже самое через интерполяцию `${}` записать*/

// to number


// 1)
console.log(typeof(+"8"));

// 2)
const str = "110abc";
const number = parseInt(str);                                   /*В виде второго аргумента можно указать систему исчисления*/
console.log(number); // Выведет: 110 (или например 6 если СИ указать "2")


// to boolean

// В JS: 0, "", null, undefined, NaN всегда = false


// 1) 
console.log(typeof(!!"qweasdzxc"));

// 2)
let swicher = null;

if (swicher) {
    console.log("Working");
}

swicher = 1;

if (swicher) {
    console.log("Working");
}

