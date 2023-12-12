"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    color: {
        border: "black",
        bg: "red"
    }
};

// console.log(options.name); /*Обратились к конкретному ключу за значением*/

// delete options.name; 

// console.log(options);

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`); /*Выводим всё ввиде строк но объект в объекте for in не может преобразовать в строку поэтому выходит object Object*/
}

// ---------------------------------------------------------------------------------------------------------

const outerObject  = {
    name: "Внешний объект",
    form: "Квадрат",
    innerObject: {
        property1: "Свойство 1 во вложенном объекте",
        property2: "Свойство 2 во вложенном объекте"
    },
    method: function() {
        console.log("Метод во внешнем объекте");
    }
};

//console.log(outerObject["innerObject"]["property1"]); /*Обратились к ключу в объекте в объекте. Можно и через точку.*/

for (let key in outerObject) {
    if (typeof(outerObject[key]) === "object") {
        for (let i in outerObject[key]) {
            console.log(`Свойство ${key} имеет значение ${outerObject[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${outerObject[key]}`);
    }
};

console.log(Object.keys(outerObject).length); /*Выводит в виде массива каждый ключ из объекта. А length просто считает их*/

outerObject.method(); /*Создали метод "method" и вызвали его*/


const {property1, property2} = outerObject.innerObject; /*Деструктуризация. Вытащили в качестве отдельных переменных ключи из объекта. Пока хз зачем это...*/
console.log(property1)