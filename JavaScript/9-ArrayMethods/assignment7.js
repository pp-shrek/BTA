// 1

const { isWhileStatement } = require("typescript");

// const total = (arr) => {
//     const sum = arr.reduce((counter, item) => {
//         return (counter + item);
//     }) // reduce
//     return sum;
// } // total

// console.log(total([1,2,3])); // 6

// 2

// const stringConcat = (arr) => {
//     const returnStr = arr.reduce ((tmpStr, current) => {
//         return (tmpStr + current.toString());
//     }) // reduce
//     return returnStr;
// } // stringConcat

// console.log(stringConcat([1,2,3])); // "123"

// 3

// const totalVotes = (arr) => {
//     const count = arr.reduce ((tmpCount, voter) => {
//         if (voter.voted) {
//             return (tmpCount + 1);
//         } // if
//         return (tmpCount);
//     },0) // reduce
//     return count;
// } // totalVotes

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// console.log(totalVotes(voters)); // 7

// 4

const shoppingSpree = (arr) => {
    return arr.reduce ((totalCost, wish) => {
        return (totalCost + wish.price);
    },0) // reduce
} // shoppingSpree

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
