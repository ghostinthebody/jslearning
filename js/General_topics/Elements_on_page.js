"use strict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart"),
      wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "white";
// box.style.width = "300px";
const num = 300;
box.style.cssText = `background-color: white; width: ${num}px`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "orange";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "red";
// }
hearts.forEach(item => {
  item.style.backgroundColor = "red";
});


const div = document.createElement("div");                // создали Только в JS. На странице его нет
const text = document.createTextNode("Do you trust me?"); // текстовый узел. Элемент без оболочки тега

div.classList.add("black");

// document.body.append(div);                             // к родителю body добавили в конец элемент
// wrapper.prepend(div);                                  // тоже самое только в начало    

hearts[1].before(div);                                    // есть after

circles[3].remove();

hearts[0].replaceWith(box);                               // заменили один элемент другим


div.innerHTML = "<h1>You shouldn't</h1>";                 // HTML структура
div.textContent = "<h1>YA ne stavlyu ayfon na bezzvuchnyy</h1>";       // Просто текст

div.insertAdjacentHTML("beforebegin", "<h3>Yego i tak skvoz' muzlo yele slyshno</h3>");
                    // afterbegin
                    // afterend
                    // beforebegin
                    // beforeend
