
const insertNumber = (arr, numb) => {
    for (let i = 0; i < arr.length; i++) {
        if (numb <= arr[i]) {
            arr.splice(i,0,numb);
            return;
        } // if
    }
    arr.push(numb);
} // insertNumber

const array = [ 1, 3, 4, 7, 11 ];
insertNumber(array, 8);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11 ] 
insertNumber(array, 90);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11, 90 ]
