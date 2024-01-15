const anotherFunction = (arg, func) => {
    setTimeout (() => {
        func();
    }, arg);
} // anotherFunction

console.log(`3`);
anotherFunction(1000,() => {
    console.log(`..2`);
    anotherFunction(1000, () => {
        console.log(`....1`);
        anotherFunction(1000, () => {
            console.log(`GO!`);
        }); // anotherFunction
    }); // anotherFunction
}); // anotherFunction