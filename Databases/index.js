import express from "express";
// import { createProductsTable } from "./db.js";
import { router } from "./router.js";

import dotenv from "dotenv";
// import router from "./router.js";

dotenv.config();
// console.log(process.env);

const server = express();
// createProductsTable();
server.use("/", router);

const { PORT } = process.env;
    server.listen(PORT, () => {
    console.log("Products API listening to port", PORT);
});