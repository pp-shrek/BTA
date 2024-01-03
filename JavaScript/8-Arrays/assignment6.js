const findLargest = (arr) => {
    tmpLargest = 0;
    for (const numb of arr) {
        if (numb > tmpLargest) {
            tmpLargest = numb;
        } // if
    } // for
    return tmpLargest;
} //findLargest

const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const largest = findLargest(array);
console.log(largest); // prints 22
