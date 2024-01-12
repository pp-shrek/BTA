const fs = require("fs");
const stream = fs.createWriteStream("./writeStream.txt");
stream.write("Hello, i am stream!", (err) => {
    if (err) console.log(err);
    else console.log("success"); });
const readStream = fs.createReadStream("./writeStream.txt", 'utf-8');
readStream.on("data", (txt) => {
    console.log(txt);
});