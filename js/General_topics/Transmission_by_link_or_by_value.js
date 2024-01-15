"use strict";

let a = 10;
let b = a;

b = a + 5;                  /*Логично всё потому что примитивный тип данных*/
console.log(a);
console.log(b);

const obj = {
    a: 7,
    b: 11
};

const copy = obj;            /*Не логично. Потому что нет копирования а есть ссылка*/

copy.a = 36;
console.log(obj);
console.log(copy);



function fullCopy(mainObj) {             /*Создали функцию которая поверхностно копирует(потому что не копирует вложенное)*/
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy
}

const numbers = {
    a: 9,
    b: 5,
    c: {
        z: 12,
        y: 33
    }
};

const newNumbers = fullCopy(numbers);

newNumbers.a = 777;
newNumbers.c.y = 44;                      /*ПОВЕРХНОСТНО! Что не ясно?*/
console.log(numbers);
console.log(newNumbers);