const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}
let data = 0;
shoppingMallData.shops.forEach(function(elem) {
    data += elem.width * elem.length;

});

// const { shops, height, moneyPer1m3 } = shoppingMallData;

// function isBudgetEnough(data) {
//     let area = 0;

//     shops.forEach(({ width, length }) => {      //а как он их деструктуризировал? Поинтересуйся!!!!!!!!!!!!!!!!
//         area += width * length
//     });
    
//     let result = (area * height) * moneyPer1m3;
    
//     if (data >= result) {
//         return "Бюджета достаточно";
//     } else {
//         return "Бюджета недостаточно";
//     }
// }
// console.log(isBudgetEnough(292938));


function isBudgetEnough(data) {
    let area = 0;
    let valume = 0;

    data.shops.forEach(shop => {
        area += shop.width * shop.length;
    });
    valume = area * data.height;
    
    let result = valume * data.moneyPer1m3
    
    if (data.budget - result >= 0) {
        return "Бюджета достаточно";
    } else {
        return "Бюджета недостаточно";
    }
}
console.log(isBudgetEnough(shoppingMallData));







