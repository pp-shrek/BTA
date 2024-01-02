// A
const ages = [20, 35, 27, 44, 24, 32];

for (let i = 0; i < ages.length; i++) {
    console.log(`${ages[i]}`);
} // for

// B

let ageAverage  = 0;

for (let i = 0; i < ages.length; i++) {
    ageAverage += ages[i];
} // for
ageAverage = ageAverage / ages.length;
console.log(`Average age of the students is ${ageAverage}`);