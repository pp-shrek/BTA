const player1 : number = Math.floor(Math.random() * 3);
const player2 : number = Math.floor(Math.random() * 3);
let winner : string | undefined = undefined;

if (player1 > player2) {
    winner = "player1";
} else if (player2 > player1) {
    winner = "player2";
}
console.log(`player1: ${player1}, player2: ${player2}`);
console.log(`The winner is ${winner}`);
