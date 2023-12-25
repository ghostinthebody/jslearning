"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

    let str1 = "";
    arr.forEach(function(i){
        str1 += `${i} `;
    });
    if (arr.length <= 0) {
        return "Семья пуста";
    } else {
    return `Семья состоит из: ${str1}`;
    }

    // let str = "";
    // if (arr.length <= 0) {
    //     return "Семья пуста";
    // } else {
    //     str += "Семья состоит из: ";
    //     arr.join(" ");
    //     return `${str}${arr.join(" ")}`
    // }
}
console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(i) {
        console.log(i.toLowerCase());
    });

    // function standardizeStrings(arr) {
    //     let str = ""
    //     arr.forEach(function(i) {
    //         str += `${i.toLowerCase()}\n`
    //     });
    //     console.log(str);
    // }
}
standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== "string") {
        return "Ошибка!"
    }
    let DK = str.split("");
    let RwW = [];

    for (let i = DK.length - 1; i >= 0; i--) {
        RwW += DK[i];                           /*На этом этапе RwW становится строкой и поэтому нам не нужен join для возвращения строки*/
    };
    
    
    return RwW;
}
console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    const newArr = arr.filter(value => value !== missingCurr).join("\n");
    return arr.length === 0 ? "Нет доступных валют" : `Доступные валюты:\n${newArr}`;
    
    // const newArr = arr.filter(function(value) {               /*retrun заканчивает функцию но не filter*/
    //     if (value !== missingCurr) {
    //         return true
    //     } else {
    //         return false
    //     };
    // });
    // console.log(newArr);



    // let newArr2 = [];
    // arr.forEach(value => {
    //     if (value !== missingCurr) {
    //         newArr2.push(value);
    //     }
    // });
    // return newArr2;


    // А если мне нужно из массива в 100знач. вырезать значения НО! только из первых 55ти например а 45 оставить как есть? 
    // const array100 = [5, 13, 77, 77, 36, 95, 50, 71, 86, 4, 41, 80, 89, 87, 15, 66, 40, 80, 90, 8, 42, 86, 77, 95, 62, 7, 97, 76, 54, 8, 88, 52, 94, 21, 18, 62, 12, 40, 53, 79, 51, 23, 23, 18, 4, 3, 69, 10, 2, 12, 10, 88, 64, 73, 44, 62, 79, 29, 85, 47, 92, 43, 25, 2, 64, 45, 40, 94, 5, 88, 59, 13, 59, 76, 93, 1, 36, 7, 60, 30, 88, 8, 5, 81, 47, 90, 35, 47, 96, 6, 82, 66, 24, 46, 87, 48, 20, 77, 77, 45]
    // const indi = 77;
    // const newArray = array100.filter((value, i) => i > 55 || value !== indi);
    // console.log(newArray);
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));



let OG = ["a", "c", "b"];                                  /*Вычли из OG mood*/
let mood = "c";

let updatedOG = OG.filter(value => value !== mood);
// let updatedOG = OG.filter(function(value) {
    //     return value !== mood;
    // });
    console.log("Обновленный массив 'OG':", updatedOG);
    
    let OG2 = ["7", "11", "32"];                               /*Вычли из OG2 mood2*/
let mood2 = "11";

let updatedOG2 = [];                                       /*Ничо не ретёрнится. (Записали всё в другой массив)*/
OG2.forEach(value => {
    if (value !== mood2) {
        updatedOG2.push(value);
    }
});
console.log("Обновленный массив 'OG2':", updatedOG2);





