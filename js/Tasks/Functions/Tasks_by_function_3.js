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

// Задача 4
function calculateVolumeAndArea(data) {
    if (data % 1 != 0 || typeof (data) != "number" || data < 0) { /*!Number.isInteger(data) - определяет целое ли число*/
        return "При вычислении произошла ошибка";
    } else {
        let volume = 0;
        let area = 0;
        volume = data * data * data;
        area = data * data * 6;
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    }
}
console.log(calculateVolumeAndArea(0));

// Задача 5
function getCoupeNumber(data) {
    if (!Number.isInteger(data) || typeof(data) != "number" || data < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if ( data === 0 || data > 36) {
        return "Таких мест в вагоне не существует";
    } 
    return Math.ceil(data / 4);
}
console.log(getCoupeNumber(23));

// Задача 6
function getTimeFromMinutes(min) {
    if (!Number.isInteger(min) || typeof(min) != "number" || min < 0) {
        return "Ошибка, проверьте данные";
    } else {
        let hour = Math.floor(min / 60);
        let kopecks = min % 60;
        if (hour === 1) {
            return `Это ${hour} час и ${kopecks} минут`;
        } else if (hour > 1 && hour < 5) {
            return `Это ${hour} часа и ${kopecks} минут`;
        } else {
            return `Это ${hour} часов и ${kopecks} минут`;
        }
    }
}
console.log(getTimeFromMinutes(523));

// Задача 7
function findMaxNumber(q, w, e, r) {
    if (typeof (q) !== "number" ||
        typeof (w) !== "number" ||
        typeof (e) !== "number" ||
        typeof (r) !== "number") {
        return 0;
    } else {
    return Math.max(q, w, e, r);
    }
}
console.log(findMaxNumber(3, 42, "3", "32"));