// const express = require("express");
import express from "express";
import { router } from "./studentRouter.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/", router);

app.listen(3000);