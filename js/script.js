"use strict";

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    
    while (result.length !== arr.length) {
        result[result.length] = arr[result.length];
    }
    
    console.log(result);
    
    // Не трогаем
    return result;
}



function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === "string") {
            data[i] += " - done";
        } else if (typeof(data[i]) === "number") {
            data[i] *= 2;
        }
    }
    
    console.log(data);

    // Не трогаем
    return data;
}




function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }

    console.log(result);

    // Не трогаем
    return result;
}


//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 4;
let resultStar = "";

for (let i = 0; i < lines; i++) {
    for (let j = 0; j < (lines - i)*2; j++) {
        resultStar += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
        resultStar += "*";
    }
    if (i < lines + 1) {

        resultStar += "\n";
    }
}
console.log(resultStar);

// for (let i = 0; i < lines; i++) {
//     for (let j = 0; j < i * 2 + 1; j++) {
//         resultStar += "*";
//     }
    
    
//     resultStar += "\n";

// }


