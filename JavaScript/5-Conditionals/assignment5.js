// const name1 = "Philippa";
// const name2 = "Joe";
// const name3 = "Maria";

// const name1 = "Joe";
// const name2 = "Philippa";
// const name3 = "Maria";

const name1 = "Maria";
const name2 = "Philippa";
const name3 = "Joe";

// const name1 = "Maria";
// const name2 = "Joe";
// const name3 = "Philippa";

// const name1 = "Joe";
// const name2 = "Maria";
// const name3 = "Philippa";

if (name1.length > name2.length && name1.length > name3.length) {
    if (name2.length > name3.length) {
        console.log(`${name1} ${name2} ${name3}`);
    } else {
        console.log(`${name1} ${name3} ${name2}`);
    }
} else if (name2.length > name1.length && name2.length > name3.length) {
    if (name1.length > name3.length) {
        console.log(`${name2} ${name1} ${name3}`);
    } else {
        console.log(`${name2} ${name3} ${name1}`);
    }
}   else if (name3.length > name1.length && name3.length > name2.length) {
    if (name2.length > name1.length) {
        console.log(`${name3} ${name2} ${name1}`);
    } else {
        console.log(`${name3} ${name1} ${name2}`);
    }
}
