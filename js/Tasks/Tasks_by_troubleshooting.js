"use strict";


const restorantData = {
  menu: [
      {
          name: 'Salad Caesar',
          price: '14$'
      },
      {
          name: 'Pizza Diavola',
          price: '9$'
      },
      {
          name: 'Beefsteak',
          price: '17$'
      },
      {
          name: 'Napoleon',
          price: '7$'
      }
  ],
  waitors: [
      {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

const {menu, waitors, averageLunchPrice} = restorantData;

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Открыто' : answer = 'Закрыто';

  return answer;
}

console.log(isOpen("openNow"))


function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < +average.slice(0, -1)) {
      return 'Цена ниже средней';
  } else {
      return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(menu[3], menu[1], averageLunchPrice));

// const isAVAGa = (fDish, sDish, average) => {
//   return (parseInt(fDish.price) + parseInt(sDish.price) < average) ? 'Цена ниже средней' : 'Цена выше средней'; 
// }
// console.log(isAVAGa(menu[3], menu[1], average LunchPrice));


function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [ {name: 'Mike', age: 32} ];
  return copy;
}

console.log(transferWaitors(restorantData));


const deepCopy = (objectik) => {              /*Глубокое копирование с рекурсией*/
  let clonedObj = {};

  for (let key in objectik) {
        if (Array.isArray(objectik[key])) {
          const qwe = [];           
          for (let innerKey in objectik[key]) {
            qwe.push(objectik[key][innerKey]);
          }
          clonedObj[key] = qwe;
        } else if (typeof(objectik[key]) == "object") {
          deepCopy(objectik[key]);
        } else {
          clonedObj[key] = objectik[key]
        }
    }
  clonedObj.waitors[0] = {name: 'Mike', age: 32};
  return clonedObj
}

console.log(deepCopy(restorantData));