const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
const letterToNumber = { N: 0, E: 1, S: 2, W: 3, C: 4, B: 5 };
const commandArray = [];

let x = 0;
let y = 0;

for (let i = 0; i < commandList.length; i++) {
    const commanNumb = letterToNumber[commandList.charAt(i)];
    commandArray.push(commanNumb);
} // for

const functionArr = [
    () => y++,
    () => x++,
    () => y--,
    () => x--,
    () => {}
];

const stopCmdIndex = letterToNumber.B;

for (let i = 0; i < commandArray.length; i++) {
    const cmdNumb = commandArray[i];
    if (cmdNumb === stopCmdIndex) {
        break;
    } // if
    const func = functionArr[cmdNumb];
    func();
} // for

console.log(`Final values X: ${x}, Y: ${y}`);