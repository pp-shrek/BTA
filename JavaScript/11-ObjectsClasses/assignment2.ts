// A
interface Word {
    [key : string] : string
} // Word

const words : Word = {
    hello : "hei",
    world : "maailma",
    bit : "bitti",
    byte : "tavu",
    integer : "kokonaisluku",
    boolean : "totuusarvo",
    string : "merkkijono",
    network : "verkko"
}

// B
console.log(Object.keys(words));

// C

// const translate = (translateWord : string) : string => {
//     return words[translateWord];
// } // translate

// console.log(translate("string"));

// D

const translate = (translateWord : string) : string | null => {
    if (translateWord in words){
        return words[translateWord];
    } // if
    else {
        console.log(`No translation exists for word word given as the argument`);
        return null;
    } // else
} // translate

console.log(translate("je"));