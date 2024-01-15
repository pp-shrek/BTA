const waitFor = async (time) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(),time);
}); // waitFor

// waitFor(1000);

let countSeconds = async() => {
    for (let i=0; i<=10; i++) {
        await waitFor(1000);
        console.log(i);
        // await waitFor(1000).then(() => {
        //     console.log(i);
        // })
    } // for
} // countSeconds

countSeconds();