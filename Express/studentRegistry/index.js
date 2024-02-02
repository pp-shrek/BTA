// const express = require("express");
import express from "express";
import { router } from "./studentRouter.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/", router);

// app.listen(3000);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});