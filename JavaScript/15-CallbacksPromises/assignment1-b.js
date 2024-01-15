const sum = (numb) => {
    let total = 0;
    for (let i=0; i <= numb; i++) {
        total += i;
    } // for
    return total;
} // sum

// console.log(sum(10));

const p = new Promise((res, rej) => {
    res(sum(50000));
})

p.then((val) => {
    console.log(val);
})