const sum = (number) => {
    if (number <= 0) { // stopping condition
        return 0;
    } // if
    return number + sum(number-1); // calls itself
} // sum

console.log(sum(5));