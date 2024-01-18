const isNumberArray = (arr : Array <unknown>) : boolean => {
    let numberArray = true;
    arr.forEach((item : unknown) => {
        // console.log(item);
        // console.log(typeof(item));
        if(typeof(item) != "number") {
            numberArray = false;
            // console.log(`not number`);
        } // if
    });
    if (numberArray) {
        return true;
    } // if
    else {
        return false;
    } // else
} // isNumberArray

const arr1 : Array <unknown> =[1,2,"jee",true,3];
const arr2 : Array <unknown> =[2,false,3,"hep"];
const arr3 : Array <unknown> =[2,5,6,0,8];


console.log(isNumberArray(arr1));
console.log(isNumberArray(arr2));
console.log(isNumberArray(arr3));