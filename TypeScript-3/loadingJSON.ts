import fs from "fs";
const new_matti_string = fs.readFileSync("matti.json", "utf-8");
const new_matti = JSON.parse(new_matti_string);
console.log(new_matti);