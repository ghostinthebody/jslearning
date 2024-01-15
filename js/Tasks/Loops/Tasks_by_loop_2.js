function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    
    while (result.length !== arr.length) {
        result[result.length] = arr[result.length];
    }
    
    console.log(result);
    
    // Не трогаем(C)Иван Петреченко 
    return result;
}

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === "string") {
            data[i] += " - done";
        } else if (typeof(data[i]) === "number") {
            data[i] *= 2;
        }
    }
    
    console.log(data);
    
    
    // Не трогаем(C)Иван Петреченко 
    return data;
}

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }
    
    console.log(result);
    
    
    // Не трогаем(C)Иван Петреченко 
    return result;
}