export{};

const str : string = "Dslfelka21kjnoi350983n2n1292m12lkl2kj4";

console.log(isNaN(parseInt(str)));

let sum : number = 0;
for (let i : number = 0; i<str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
        console.log(str[i]);
        sum += parseInt(str[i]);
    } // if
} // for

console.log(`sum: ${sum}`);