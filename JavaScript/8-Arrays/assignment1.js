const isPalindrome = (str) => {
    const tmpStr = [];
    for (const tmpChar of str) {
        tmpStr.unshift(tmpChar);
    } // for
    for (let i = 0; i < tmpStr.length; i++) {
        if(tmpStr[i] !== str[i]){
            return false;
        } // if
    } // for
    return true;
}

let value = isPalindrome("saippuakivikauppias");
console.log(value); // prints true

value = isPalindrome("saippuakäpykauppias");
console.log(value); // prints false
