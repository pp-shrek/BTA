const fs = require("fs");

// const forecast = {
//     day: "monday",
//     temperature: 20,
//     cloudy: true,
//     sunny: false,
//     windy: false
// };

let data = fs.readFileSync("forecast_data.json", "utf8");
const forecast = JSON.parse(data);
forecast["day"] = "friday";
forecast["temperature"] = -14;
forecast["cloudy"] = false;
forecast["sunny"] = true;
// const data = JSON.stringify(forecast);
data = JSON.stringify(forecast, null, 4);
fs.writeFileSync("forecast_data.json", data, "utf8", (err) => {
  if (err) {
    console.log("Could not save forecasts to file!");
} });
