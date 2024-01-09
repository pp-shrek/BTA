export {}

class Robot {
    x : number;
    y : number;

    constructor (x : number, y : number) {
        this.x = x;
        this.y = y;
    } //constructor
    handleCommandList(commandList : string) : void {
        for (let i:number = 0; i<commandList.length; i++) {
            const char : string = commandList.charAt(i);
            if (char === "B") {
                break;
            } // if
            switch(char) {
                case "N":
                    this.y++;
                    break;
                case "E":
                    this.x++;
                    break;
                case "S":
                    this.y--;
                    break;
                case "W":
                    this.x--;
                    break;
                case "C":
                    continue;
                    break;
            } // switch
        } // for
    } // handleCommandList
} // Robot

const robot = new Robot(0,0);
robot.handleCommandList("NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE");
console.log(`Final values X: ${robot.x}, Y: ${robot.y}`);