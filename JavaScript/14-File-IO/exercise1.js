const fs = require("fs");

const fileText = fs.readFileSync("./textFile.txt").toString('utf-8');

// console.log(fileText);
let replaceText = fileText.replace("joulu","kinkku");
replaceText = fileText.replace("lapsilla","poroilla");
// console.log(replaceText);

fs.writeFile("./replaceTextFile.txt", replaceText, (err) => {
    if (err) console.log(err);
    else console.log("success");
});