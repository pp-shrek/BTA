const sortNumberArray = (arr) => {
    let tmpNumb = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i;j++) {
            // console.log(`i: ${arr[i]}, j: ${arr[j]}`);
            if (arr[j] > arr[j+1]) {
                tmpNumb = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmpNumb;
            } // if
        } // for
    } // for
} // sortNumberArray

const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]