"use strict";

const qwe = [1, 1, 89, 4, 5, 6];

// qwe.pop();                     /*Удаляет последний элемент в массиве*/
// console.log(qwe);

// qwe.push(10);                  /*Добавляет элемент в конец массива*/
// console.log(qwe);

for (let i = 0; i < qwe.length; i++) {      /*Перебирает массив*/
    console.log(qwe[i]);
}

for (let value of qwe) {                    /*Перебирает массив(объект не перебирает)*/
    console.log(value);                     /*Зато работает break и continue*/
}



const asd = ["m", "e", "t", "a"];

// asd[99] = "GERA PKHAT";                   /*Записали на 99ю позицию*/
// console.log(asd.length);

asd.forEach(function(item, i, asd) {                     /*forEach проходится по каждому элементу массива. 1значение 2номер по счёту 3массив*/  
    console.log(`${i}: ${item} внутри массива ${asd}`);
});



// const str1 = prompt("", "");                   /*Сделали из строки --> массив с помощью split*/
// const products = str1.split(", ");             /*, - это разделитель. Он должен быть чётким*/
// console.log(products);

const str2 = prompt("", "");
const products = str2.split(", ");             /*Сделали из строки --> массив*/
console.log(products.join("; "));              /*а потом сделали строчку с разделителем ; */