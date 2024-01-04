const numbers = [ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ];

// A

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 20) {
//         console.log(`${numbers[i]}`);
//         break;
//     } // if
// } // for

// B

// const findNumb = numbers.find(numb => numb > 20);
// console.log(`${findNumb}`);

// C

// const index = numbers.findIndex(numb => numb > 20);
// console.log(`${index}`);

// D

const index = numbers.findIndex(numb => numb > 20);
numbers.splice(index);
console.log(`${numbers}`);