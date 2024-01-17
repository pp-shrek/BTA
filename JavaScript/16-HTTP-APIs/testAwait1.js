const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("404");
            resolve("Well done");
        }, 100)
    })
}

const start = async() => {
    const result = await getData();
    console.log(result);
}

start();