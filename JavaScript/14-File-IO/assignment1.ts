// import readline from "readline-sync";
import { Chatbot } from "./chatbot";

let running : boolean = true;
const chatbot = new Chatbot();
console.log(`Hi! I am a dumb chat bot You can check all the things I can do by typing 'help'.`);
while (running) {
    // const answer : string = readline.question("Give me an answer: ");
    chatbot.askUserCmd();
    console.log(chatbot.userCmd);
    if (chatbot.userCmd === "quit") {
        running = false;
    } // if
    else if (chatbot.userCmd === "help") {
        chatbot.addCounter();
        chatbot.help();
    } // else if
    else if (chatbot.userCmd === "hello") {
        chatbot.addCounter();
        chatbot.hello();
    } // else if
    else if (chatbot.userCmd === "botInfo") {
        chatbot.addCounter();
        chatbot.botInfo();
    } // else if
    else if (chatbot.userCmd === "botName") {
        chatbot.addCounter();
        chatbot.botName();
    } // else if
    else if (chatbot.userCmd === "botRename") {
        chatbot.addCounter();
        chatbot.botRename();
    } // else if
    else if (chatbot.userCmd === "forecast") {
        chatbot.addCounter();
        chatbot.forecast();
    } // else if
} // while