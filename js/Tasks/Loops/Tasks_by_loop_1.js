function firstTask() {
    let qwe = 5;
    while (qwe <= 10) {
        console.log(qwe);
        qwe++;
    }
}

function secondTask() {
    let asd = 10;
    for (let i = 20; i >= asd; i--) {
        
        if (i == 13) {
            break;
        }
        console.log(i);
    }
}

function thirdTask() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 1) {
            continue;
        }
        console.log(i);
    }
    
}

function fourthTask() {
    let zxc = 1;
    while (zxc < 16) {
        zxc++;
        if (zxc % 2 === 0) {
            continue;
        } else {
            console.log(zxc);
        }
        
    }
}


function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    
    console.log(arrayOfNumbers);    
    
    // Не трогаем(C)Иван Петреченко 
    return arrayOfNumbers;
}