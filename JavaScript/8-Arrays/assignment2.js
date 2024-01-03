const numberRange = (start, end) => {
    let tmpNumb = start;
    const numbArr = [tmpNumb];
    
    while (tmpNumb !== end) {
        // tmpNumb++;
        if (start > end){
            tmpNumb--;
        } // if
        else {
            tmpNumb++;
        } // else
        numbArr.push(tmpNumb);
    } // while
    return numbArr;
}


console.log(numberRange(1, 5));   // prints [ 1, 2, 3, 4, 5 ]
console.log(numberRange(-5, -1)); // prints [ -5, -4, -3, -2, -1 ]
console.log(numberRange(9, 5));   // prints [ 9, 8, 7, 6, 5 ]
