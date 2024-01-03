const fruits = ["banana", "apple", "grapefruit", "pear", "pineapple", "lemon"];

const pearIndex = fruits.indexOf("pear");
fruits.splice(pearIndex,1);
console.log(`${fruits}`);