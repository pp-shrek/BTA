
// const express = require("express");
import express from "express";
import url from "url";

const adr = "http://localhost:3000/?id=104&name=pasi&email=mail";
const q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;
console.log(qdata.id);

const app = express();  

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const logger = (req, res, next) => {
  console.log("A new request received at " + Date.now());
  console.log("request method " + req.method);
  console.log(`endpoint: ${req.originalUrl}`);
  console.log(`Request body: ${req.body}`);
  next();
};

app.use(logger);

app.get("/", (req, res, next) => {
  console.log(req.body);
  res.send("Home page");
});

app.post("/", (req, res) => {
  console.log(`POSST request init!`);
  console.log(req.body);
  res.redirect("/");
});

app.get('/students', (req, res) => {
  res.send("Student page");
});

  
app.listen(3000);