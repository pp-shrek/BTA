const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

let x = 0;
let y = 0;
let loopStatus = true;
let i = 0;

while (loopStatus){
    switch (commandList.charAt(i)) {
        case 'N':
            y++;
            break;
        case 'E':
            x++;
            break;
        case 'S':
            y--;
            break;
        case 'W':
            x--;
            break;
        case 'C':
            console.log(`kirjain c values X: ${x}, Y: ${y}`);
            break;
        case 'B':
            console.log(`kirjain b values X: ${x}, Y: ${y}`);
            loopStatus = false;
            break;
    }
    if (i > commandList.length) {
        loopStatus = false;
    }
    i++;
} // while
console.log(`Final values X: ${x}, Y: ${y}`);