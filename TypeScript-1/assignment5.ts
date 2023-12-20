// function dice(numberOfSides : number) : number {
//     return Math.floor(Math.random() * numberOfSides) + 1;
// }

const dice = (numberOfSides : number) : number => {
//     // const randNum : number = Math.floor(Math.random() * numberOfSides) + 1;
//     // return randNum;
    return Math.floor(Math.random() * numberOfSides) + 1;
}

console.log(`${dice(20)}`);
