export {}
interface CommandHandler {
    [key : string] : Function
} // CommandHandler

const commandList : string = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
let x : number = 0;
let y : number = 0;

const commandHandlers : CommandHandler = {
    N : () => y++,
    E : () => x++,
    S : () => y--,
    W : () => x--,
    C : () => {}
};

for (let i:number = 0; i<commandList.length; i++) {
    console.log(i);
    const char : string = commandList.charAt(i);
    console.log(char);
    if (char in commandHandlers){
        const func : Function = commandHandlers[char];
        func();
    } // if
    else if (char === "B") {
        break;
    } // else if
} // for
console.log(`Final values X: ${x}, Y: ${y}`);