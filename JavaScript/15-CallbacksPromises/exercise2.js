let countdown = (time, output) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(output),time);
}); // countdown

countdown(0,"3")
.then((str) => {
    console.log(str);
    return countdown(1000, "..2");
}).then((str) => {
    console.log(str);
    return countdown(1000, "....1");
}).then((str) => {
    console.log(str);
    return countdown(1000, "GO!");
}).then((str) => console.log(str));