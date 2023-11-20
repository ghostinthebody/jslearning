"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();
    
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();
    
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const QWE = prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDB.genres[i - 1] = QWE;
    }
}
console.log(writeYourGenres());

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);        
    }
}
showMyDB(personalMovieDB.privat);













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
    if (data % 1 != 0 || typeof(data) != "number" || data <= 0) { /*!Namber.isInteger(data) - определяет целое ли число*/
        console.log("При вычислении произошла ошибка");
    } else {
        let volume = 0;
        let area = 0;

        volume = data * data * data;
        area = data * data * 6;
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    }
}
console.log(calculateVolumeAndArea(6));

// Задача 5
function getCoupeNumber(data) {
    if (!Number.isInteger(data) || typeof(data) != "number" || data < 0) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    } else if ( data === 0 || data > 36) {
        console.log("Таких мест в вагоне не существует");
    } 
    return Math.ceil(data / 4);
    
    
}
console.log(getCoupeNumber(23));




