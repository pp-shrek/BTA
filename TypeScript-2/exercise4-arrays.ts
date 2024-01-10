const numbers : Array<number> = [];

for (let i : number = 0; i < 10; i++) {
    numbers.push(Math.ceil(Math.random() * 100));
} // fors

console.log(numbers);

// Sort the array in ascending order (smallest to largest)
const sortedNumbersAsc : Array<number> = numbers.sort((a,b) => a - b);
console.log(sortedNumbersAsc);

// Sort the array in descending order (largest to smallest)
const sortedNumbersDesc : Array<number> = numbers.sort((a,b) => b - a);
console.log(sortedNumbersDesc);