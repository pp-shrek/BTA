const sentencify = (words : string[], i : number) : string => {
    // return "";
    if (i >= words.length -1) {
        return words[words.length -1] + "!";
    } // if
    return words[i] + " " + sentencify(words, i+1);
} // sentencify

const wordArray : string[] = [ "The", "quick", "silver", "wolf" ];

console.log(sentencify(wordArray, 0)); // prints "The quick silver wolf!"
console.log(sentencify(wordArray, 1)); // prints "quick silver wolf!"
