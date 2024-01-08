const F = (n : number) : number => {
    if (n === 0 ) {
        return 0;
    } // if
    if (n ===1) {
        return 1;
    } // if
    return (F(n - 2) * 3) + F(n - 1);
} // F

console.log(F(17));