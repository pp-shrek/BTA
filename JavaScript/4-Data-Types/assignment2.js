// A

let number;
const result1 = 10 + number;
console.log(result1);
console.log(typeof(number));
number = null;
const result2 = 10 + number;
console.log(result2);

// result1 is NaN (not a number), tämä johtuu siitä, että number muuttujaa ei ole määritelty, eikä näin ollen sillä voi laskea
// result2 is 10, koska sen jälkeen kun number on määritelty arvo, vaikkakin tyhjä, niin sillä pystyy laskemaan

// B

const a = true;
const b = false;

const c = a + b;
const d = 10 + a;
const e = 10 + b;

console.log(c);
console.log(d);
console.log(e);

// value of c is 1
// value of d is 11
// value of e is 10

//Tämä siksi, että muuttuja a (true) vastaa arvoa 1 ja muuttuja b (false) vastaa arvoa 0.