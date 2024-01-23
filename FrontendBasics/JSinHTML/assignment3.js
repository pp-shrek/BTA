"use strict";

let counterSec = 0;
let counterMin = 0;

// const htmlContainer = document.querySelector(".container");
const counterDiv = document.querySelector("#counter");

const counter = () => {
    let counterNode;
    counterSec++;
    if (counterSec > 59) {
        counterMin++;
        counterSec = 0;
    } // if
    console.log(`${counterMin} minute, ${counterSec} seconds`);
    if (counterMin > 0) {
        counterNode = document.createTextNode(`${counterMin} minute, ${counterSec} seconds`);
    } // if
    else {
        counterNode = document.createTextNode(`${counterSec} seconds`);
    } // else
    const counterTagP = document.createElement("p");
    counterTagP.setAttribute("class","border-bottom pb-2");
    counterTagP.appendChild(counterNode);
    counterDiv.replaceChild(counterTagP, counterDiv.childNodes[1]);
};

setInterval (counter, 1000);