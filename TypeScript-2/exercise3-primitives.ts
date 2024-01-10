const strFunc = (tmpStr : string) : void => {
    const spiltStr : Array<string> = tmpStr.split(" ");
    console.log(`string length: ${tmpStr.length}, words: ${spiltStr.length}`);
} // strFunc

const str : string = "Write a function that takes in a string of arbitrary length and outputs info in form of an object with the length of the given string and the amount of words it contains";

strFunc(str);