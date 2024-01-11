// 5

const flatten = (arrays : Array <string[] | boolean[] | number[]>) => {
    //const returnArr = [];
    return arrays.reduce ((concatArr : Array<string[] | boolean[] | number[]>, arr) => {
        return concatArr.concat(arr);
    },[]) // reduce
} // flatten

const arrays : Array<string[] | boolean[] | number[]> = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
console.table(arrays);
console.table(flatten(arrays));