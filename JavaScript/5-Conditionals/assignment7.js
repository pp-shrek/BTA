const fruit1 = {
    fruitName: "pear",
    weight: 178,
};
const fruit2 = {
    fruitName: "lemon",
    weight: 120,
};
const fruit3 = {
    fruitName: "apple",
    weight: 90,
};
const fruit4 = {
    fruitName: "mango",
    weight: 150,
};

const fruitsAverage = (fruit1.weight + fruit2.weight + fruit3.weight + fruit4.weight) / 4;

// A
console.log(`Fruits average is ${fruitsAverage}`);

// B

const fruit1Difference = (fruit1.weight > fruitsAverage) ? fruit1.weight - fruitsAverage : fruitsAverage - fruit1.weight;
const fruit2Difference = (fruit2.weight > fruitsAverage) ? fruit2.weight - fruitsAverage : fruitsAverage - fruit2.weight;
const fruit3Difference = (fruit3.weight > fruitsAverage) ? fruit3.weight - fruitsAverage : fruitsAverage - fruit3.weight;
const fruit4Difference = (fruit4.weight > fruitsAverage) ? fruit4.weight - fruitsAverage : fruitsAverage - fruit4.weight;

if (fruit1Difference < fruit2Difference && fruit1Difference < fruit3Difference && fruit1Difference < fruit4Difference) {
    console.log(`${fruit1.fruitName} weight is closest to tho average.`);
}
if (fruit2Difference < fruit1Difference && fruit2Difference < fruit3Difference && fruit2Difference < fruit4Difference) {
    console.log(`${fruit2.fruitName} weight is closest to tho average.`);
}
if (fruit3Difference < fruit2Difference && fruit3Difference < fruit1Difference && fruit3Difference < fruit4Difference) {
    console.log(`${fruit3.fruitName} weight is closest to tho average.`);
}
if (fruit4Difference < fruit2Difference && fruit4Difference < fruit3Difference && fruit4Difference < fruit1Difference) {
    console.log(`${fruit4.fruitName} weight is closest to tho average.`);
}