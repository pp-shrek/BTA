import express from "express";
import { router } from "./router.js";

import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(express.json());
server.use("/", router);

const { PORT } = process.env;
    server.listen(PORT, () => {
    console.log("Products API listening to port", PORT);
});