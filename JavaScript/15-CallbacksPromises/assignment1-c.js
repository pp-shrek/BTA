const sum = (numb) => {
    let total = 0;
    for (let i=0; i <= numb; i++) {
        total += i;
    } // for
    return total;
} // sum

const p = new Promise((res, rej) => {
    setTimeout (() => {
        res(sum(50000));
    }, 2000);
}) // p

p.then((val) => {
    console.log(val);
}) // then