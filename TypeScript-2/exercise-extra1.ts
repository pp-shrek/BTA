export{};

const str : string = "aAdsf qwerty";
const strAscCodes : Array<number> =[];

for ( let i:number = 0; i<str.length; i++){
    // console.log(str.charCodeAt(i));
    const tmpChar : string = str[i].toLocaleLowerCase();
    // console.log(tmpChar.charCodeAt(0));
    strAscCodes.push(tmpChar.charCodeAt(0));
} // for

// // Sort the array in ascending order (smallest to largest)
const strAscCodesAsc : Array<number> = strAscCodes.sort((a,b) => a - b);
console.log(strAscCodesAsc);

// // Sort the array in descending order (largest to smallest)
const strAscCodesDesc : Array<number> = strAscCodes.sort((a,b) => b - a);
console.log(strAscCodesDesc);