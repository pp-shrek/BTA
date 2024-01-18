import fs from "fs";
const matti = {
    name: "matti",
    band: "matti&teppo",
    levyt: ["parhaat 1", "lauluja sinulle", "parhaat 2"], 
}
fs.writeFileSync("matti.json", JSON.stringify(matti),"utf-8");