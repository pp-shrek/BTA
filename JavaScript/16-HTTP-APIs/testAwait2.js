const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("404");
            resolve("Well done");
        }, 100)
    })
}

const start = async() => {
    const data = await fetch("http://universities.hipolabs.com/search?country=Finland");
    const result = await data.json();
    console.log(result[0]);
}

start();