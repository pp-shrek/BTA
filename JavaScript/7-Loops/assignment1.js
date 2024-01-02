// A

// const exponentValueList = (n) => {
//     if (n > 0) {
//         for (let i = 1; i<=n;i++) {
//             console.log(`${2 ** i}`);
//         } // for
//     } // if
//     else {
//         console.log(`Number nees to be positive`);
//     } // else
// } // exponentValueList
// exponentValueList(process.argv[2]);

// B
const exponentValueList = (n, numb) => {
    if (n > 0) {
        for (let i = 1; i<=n;i++) {
            console.log(`${numb ** i}`);
        } // for
    } // if
    else {
        console.log(`Number nees to be positive`);
    } // else
} // exponentValueList
exponentValueList(process.argv[2],process.argv[3]);