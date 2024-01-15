import readline from "readline-sync";

interface Forecast {
    Temperature : number,
    Cloudy : string,
    Sunny : string,
    Wind : string
} // Forecast

class Chatbot {
    private name : string;
    private queryCount : number;
    private forecastArr : Array<Forecast>;
    public userCmd : string;

    constructor () {
        this.queryCount = 0;
        this.name = "No name";
        this.forecastArr = [{
            Temperature : 3,
            Cloudy : "yes",
            Sunny : "no",
            Wind : "yes"
        },{
            Temperature : -30,
            Cloudy : "no",
            Sunny : "yes",
            Wind : "no"
        },{
            Temperature : 30,
            Cloudy : "no",
            Sunny : "yes",
            Wind : "yes"
        },{
            Temperature : -3,
            Cloudy : "yes",
            Sunny : "no",
            Wind : "yes"
        },{
            Temperature : 0,
            Cloudy : "yes",
            Sunny : "no",
            Wind : "yes"
        }
    ];
    } // constructor

    public addCounter() : void {
        this.queryCount++;
    } // addCounter
    public askUserCmd () : void {
        this.userCmd = readline.question("Give me a command: ");
    } // askUserCmd

    public help () : void {
        console.clear();
        console.log(`Here´s a list of commands that I can execute!`);
        console.log(`-----------------------------`);
        console.log(`help: Opens this dialog.`);
        console.log(`hello: I will say hello to you`);
        console.log(`botInfo: I will introduce myself`);
        console.log(`botName: I will tell my name`);
        console.log(`botRename: You can rename me`);
        console.log(`forecast: I will forecast tomorrows weather 100% accurately`);
        console.log(`quit: Quits the program.`);
        console.log(`-----------------------------`);
    } // help

    public hello () : void {
        console.clear();
        console.log(`hello`);
        const usrName : string = readline.question("What is your name?: ");
        console.log(`Hello there, ${usrName}`);
        console.log(``);
    } // hello

    public botInfo() : void {
        console.clear();
        console.log(`I am a dumb bot. You can ask me almost anything :). You have already asked me ${this.queryCount} questions.`);
    } // botInfo

    public botName() : void {
        console.clear();
        console.log(`My name is currently ${this.name}. If you want to change it, type botRename.`);
    } // botName

    public botRename() : void {
        console.clear();
        const newName : string = readline.question("Type my new name, please: ");
        const usrConfirm : string = readline.question("Are you happy with the name " + newName + "? (yes/no)");
        if (usrConfirm === "yes") {
            this.name = newName;
            console.log(`I was renamed to ${newName}.`);
        } // if
        else {
            console.log(`Name not changed. My name is ${this.name}.`);
        } // else
    } // botRename

    public forecast() : void {
        console.clear();
        console.log(`Tomorrows weather will be....`);
        const forecastNumb : number = Math.ceil(Math.random() * 4);
        console.log(`Temperature: ${this.forecastArr[forecastNumb].Temperature} celsius degree`);
        console.log(`Cloudy: ${this.forecastArr[forecastNumb].Cloudy}`);
        console.log(`Sunny: ${this.forecastArr[forecastNumb].Sunny}`);
        console.log(`Wind: ${this.forecastArr[forecastNumb].Wind}`);
    } // forecast
} // Chatbot

export {Chatbot};