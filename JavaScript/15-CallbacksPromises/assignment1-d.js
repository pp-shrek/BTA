const sum = (numb) => {
    let total = 0;
    for (let i=0; i <= numb; i++) {
        total += i;
    } // for
    return total;
} // sum

const createDelayedCalculation = (limit, time) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(sum(limit)),time);
}); // createDelayedCalculation

// Prints 200000010000000 after a delay of 2 seconds
createDelayedCalculation(20000000, 2000).then(result => console.log(result));

// Prints 1250025000 after a delay of 0.5 seconds
createDelayedCalculation(50000, 500).then(result => console.log(result));
