
const getValue = function () { return new Promise((res, rej) => {
    setTimeout(() => {
    res({ value: Math.random() });
    }, Math.random() * 1500); });
}; // getValue
let valueOneHere;
let valueTwoHere;
let assy = async() => {
    await getValue().then((val) => {
        valueOneHere = val.value;
    })
    await getValue().then((val) => {
        valueTwoHere = val.value;
    })
    await console.log(`Value 1 is ${valueOneHere} and value 2 is ${valueTwoHere}`);
} // assy
assy();
