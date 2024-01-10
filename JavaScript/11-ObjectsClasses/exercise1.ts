interface Fruit {
    [key : string] : number
} // Fruit

const fruits : Fruit  = {
    "banana" : 118,
    "apple" : 85,
    "mango" : 200,
    "lemon" : 65
}; // fruits

const printWeight = (fruit : string) : void => {
    if(fruit in fruits) {
        //console.log(fruits[fruit]);
        console.log(`${fruit} weighs ${fruits[fruit]} grams`);
    } // if
    else {
        console.log("Given fruit doesn't exist");
        console.log(Object.keys(fruits));
    } // else
} // printWeight

printWeight("apple");
