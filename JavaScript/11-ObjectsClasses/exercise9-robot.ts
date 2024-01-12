class Robot {
    protected x : number;
    protected y : number;

    constructor (x : number, y : number) {
        this.x = x;
        this.y = y;
    } // constructor

    public handleMessage(cmdStr : string) : void{
        if (cmdStr === "moveN") {
            // console.log(`north`);
            this.y++;
        } // if
        else if (cmdStr === "moveS") {
            // console.log(`south`);
            this.y--;
        } // else if
        else if (cmdStr === "moveE") {
            // console.log(`east`);
            this.x++;
        } // else if
        else if (cmdStr === "moveW") {
            // console.log(`west`);
            this.x--;
        } // else if
        else {
            console.log(`Unknow command`);
        }
    }; // handleMessage
} // Robot

class FlexibleRobot extends Robot {
    constructor (x : number, y : number) {
        super(x,y);
    } // constructor
    public handleMessage(cmdStr: string): void {
        if (cmdStr === "moveNE") {
            // console.log(`northeast`);
            this.y++;
            this.x++;
        } // if
        else if (cmdStr === "moveNW") {
            // console.log(`northwest`);
            this.y++;
            this.x--;
        } // else if
        else if (cmdStr === "moveSE") {
            // console.log(`southeast`);
            this.y--;
            this.x++;
        } // else if
        else if (cmdStr === "moveSW") {
            // console.log(`southwest`);
            this.y--;
            this.x--;
        } // else if
        else {
            super.handleMessage(cmdStr);
        }
    } // handleMessage
    public moveToPoint (x : number, y : number) : void {
        this.x = x;
        this.y = y;
    } // moveToPoint
} // FlexibleRobot

export{Robot, FlexibleRobot};