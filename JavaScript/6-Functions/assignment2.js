const minimum = (number1, number2, number3) => {
    if (number1 <= number2 && number1 <= number3)  {        
        return number1;
    } // if
    else if (number2 <= number3) {
       return number2;
    } // else if
    else {
        return number3;
    } // else
} // minimum

//let returnNumb;

// returnNumb = minimum(1,2,3);
// console.log(`minimum number is ${returnNumb}`);

console.log(`minimum number is ${minimum(1,2,3)}`);
console.log(`minimum number is ${minimum(4,2,3)}`);
console.log(`minimum number is ${minimum(7,4,3)}`);