const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            // resolve("Khere is your DATA");
            reject("Something went wrong!");
        }, 1000)
    })
}

const onSuccess = (result) => {
    console.log(`Success: ${result}`);
}

const onFailure = (error) => {
    console.log(`ERROR: ${error}`);
}

const start = async() => {
    try {
        const result = await getData();
        onSuccess(result);
    }
    catch (error) {
        onFailure(error);
    }
}

// const start = async() => {
//     try {
//         const result = await getData();
//         console.log(`Success: ${result}`);
//     }
//     catch (error) {
//         console.log(`ERROR: ${error}`);
//     }
// }

start();