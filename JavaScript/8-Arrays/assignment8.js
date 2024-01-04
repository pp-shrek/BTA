const reverseWords = (str) => {

    const tmpStr = str.split(" ");
    let returnStr ="";
    for (let i = 0; i < tmpStr.length;i++) {
        const word = tmpStr[i];
        for (let j = word.length - 1; j >= 0; j--) {
            returnStr += word.charAt(j);
        } // for
        returnStr += " ";
    } // for
    return returnStr;
} // reverseWords

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"
