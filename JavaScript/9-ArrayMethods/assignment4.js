const incrementAll = (numbers) => {
    return numbers.map(numb => numb + 1);
} // incrementAll

const decrementAll = (numbers) => {
    return numbers.map(numb => numb - 1);
} // decrementAll

const numbers = [ 4, 7, 1, 8, 5 ];

// A
// const newNumbers = incrementAll(numbers);
// console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]

// B

const newNumbers = decrementAll(numbers);
console.log(newNumbers); // prints [ 3, 6, 0, 7, 4 ]