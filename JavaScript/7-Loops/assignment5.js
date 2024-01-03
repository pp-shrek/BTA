let sum = 0;
let number = 1;

while(sum < 10000) {
    sum += number;
    number++;
} // while
console.log(`total sum is ${sum}, last number added to the sum was ${number}`);