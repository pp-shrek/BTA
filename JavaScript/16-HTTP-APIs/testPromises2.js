const fun1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("404");
            resolve("Well done");
        }, 100)
    })
};

const fun2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("200");
        }, 100)
    })
};

const onSuccess = (data) => {
    console.log(data);
};

const onError = (error) => {
    console.log(error);
};

const inTheEnd = () => {
    console.log(`Finally we be done yo`);
}

fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onError)
    .finally(inTheEnd)