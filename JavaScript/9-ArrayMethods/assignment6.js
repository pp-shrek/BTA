const objectArray = [ { x: 14, y: 21, type: "tree", toDelete: false },
                      { x: 1, y: 30, type: "house", toDelete: false },
                      { x: 22, y: 10, type: "tree", toDelete: true },
                      { x: 5, y: 34, type: "rock", toDelete: true },
                      null,
                      { x: 19, y: 40, type: "tree", toDelete: false },
                      { x: 35, y: 35, type: "house", toDelete: false },
                      { x: 19, y: 40, type: "tree", toDelete: true },
                      { x: 24, y: 31, type: "rock", toDelete: false } ];

// for (const obj of objectArray) {
//     if(obj !== null && obj.toDelete === true) {
//         console.log(`tyhjä`);
//     }
// } // for
const objectArrayCopy = [...objectArray];
// A
for (let i = 0; i < objectArray.length; i++) {
    if(objectArray[i] !== null && objectArray[i].toDelete === true) {
        //console.log(`tyhjä`);
        objectArray[i] = null;
    } // if
} // for

console.log(`A`);
 console.log(objectArray);

// B
const cleaned = objectArrayCopy.map((obj) => {
    if(obj === null || !obj.toDelete) {
        //console.log(obj);
        return obj;
    } // if
    return null;
}) // map

console.log(`B`);
console.log(cleaned);