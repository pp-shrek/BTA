const countSheep = (count) => {
    let returnStr = "";
    for (let i = 1; i <= count; i++) {
        returnStr += i + " sheep... ";
    } // for
    return returnStr;
} // countSheep

console.log(`${countSheep(process.argv[2])}`);