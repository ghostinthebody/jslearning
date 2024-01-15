/*Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let qwe = [],
        asd = [],
        zxc = [],
        main = [],
        forStr = [],
        str = "Оставшиеся студенты: "; 

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            qwe[i] = arr[i];
        } else if (i >= 3 && i < 6) {
            asd[i - 3] = arr[i];
        } else if (i >= 6 && i < 9) {
            zxc[i - 6] = arr[i];
        } else if (i >= 9) {
            forStr[i - 9] = arr[i];
        } else {
            console.log("error");
        };
        
        
    }
    if (arr.length === 9) {
        str += "-";
    };
    str += forStr.join(", ");
    main.push(qwe, asd, zxc, str);
    return main;
}
console.log(sortStudentsByGroups(students));






const SStudents = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`]
};
console.log(sortStudentsByGroups(SStudents));