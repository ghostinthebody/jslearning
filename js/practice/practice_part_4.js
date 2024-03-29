"use strict";

/*
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


function fullCopy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy
}



const personalMovieDB = {
    count: 0,
    testForQwe: 0,
    movies: {},
    actors: {},
    genres: [3, 4, 9],
    privat: false,
    qwe: function (a, b) {
        personalMovieDB.testForQwe = a + b;
    },
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {              /*isNaN возвращает true если не число*/
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            const QWE = prompt(`Введите ваши любимые жанры через запятую`);
            
            if (QWE != null && QWE != '') {
                personalMovieDB.genres = QWE.split(", ");
                personalMovieDB.genres.sort();
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
        personalMovieDB.genres.forEach((a, b) => {
            console.log(`Любимый жанр #${b + 1} - это ${a}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);        
        }
    },
    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {                     /*personalMovieDB.privat === false - тоже самое*/
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
        // personalMovieDB.privat = !personalMovieDB.privat ? true : false;             /*2ой вариант*/
        // personalMovieDB.privat = !personalMovieDB.privat;                            /*3ой вариант*/
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);




personalMovieDB.qwe(8, 3);                              /*Возвали к методу(функции) qwe*/
console.log(personalMovieDB.testForQwe);                /*Вывели уже изменённую "testForQwe*/
