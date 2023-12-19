const number1 = 8;
const number2 = 5;
const number3 = 2;

let largest = number1;
let smallest = number1;

if (number1 === number2 && number1 === number3) {
    console.log('all numbers are equal');
} else {
    // if numbers are not equal, find largest
    if (number1 >= number2 && number1 >= number3) {
        largest = number1;
    } else if (number2 >= number1 && number2 >= number3) {
        largest = number2;
    } else {
        largest = number3;
    }
    // if numbers are not equal, find smallest
    if (number1 <= number2 && number1 <=number3) {
        smallest = number1;
    } else if (number2 <= number1 && number2 <= number3) {
        smallest = number2;
    } else {
        smallest = number3;
    }
    console.log(`${largest} is the largest number. ${smallest} is the smallest number.`);
}

