function getWeather () {
    return new Promise(function(resolve, reject) {
        // resolve ("sunny");
        // reject("cloudy");
        setTimeout(() => {
            resolve("rainy")
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        // resolve ("sunny");
        // reject("cloudy");
        setTimeout(() => {
            // resolve("sunny")
            switch(weather) {
                case "sunny":
                    resolve("Jee")
                    break;
                case "cloudy":
                    resolve("Puu")
                    break;
                default:
                    reject("No icon found");
            }
        }, 100)
    })
}

// getWeather().then(
//     function(data) {
//         console.log(`First param ${data}`);
//     },function(data) {
//         console.log(`Second param ${data}`);
//     }
// )

function onSuccess(data) {
    console.log(`Success ${data}`);
}
function onError(error) {
    console.log(`Error ${error}`);
}

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess, onError)