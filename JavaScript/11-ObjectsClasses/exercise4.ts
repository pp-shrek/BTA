export{};
interface Processor {
    name : string,
    cache : string,
    clockSpeed : number,
    overclock : Function,
    savePower : Function
} // Processor

const superComputer : Processor = {
    name : "Buutti SuperCalculator 6000",
    cache: "96 GB",
    clockSpeed: 9001.0,
    overclock : function () {this.clockSpeed += 500;},
    savePower : function () {if (this.clockSpeed > 2000) this.clockSpeed = 2000}
} // superComputer

console.log(superComputer);
superComputer.overclock();
console.log(superComputer);
superComputer.savePower();
console.log(superComputer);