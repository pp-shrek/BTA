
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

const logger = (req, res, next) => {
  console.log(`logger`);
  console.log("A new request received at " + Date.now());
  console.log("request method " + req.method);
  console.log(`endpoint: ${req.originalUrl}`);
  next();
};

const errorHandler = (err, req, res, next) => {
  // logger.error(err.message);
  // console.log(`errorHandler`);
  // next();
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json ({
    status: err.statusCode,
    message: err.message
  });
};

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json ({
    status: err.statusCode,
    message: err.message
  });
});

// const unknownEndpoint = (_req, res) => {
//   res.status(404).send({error: "No on here"});
// };

app.use(logger);
// app.use(errorHandler);
// app.use(unknownEndpoint);

app.get('/', (req, res) => {
  res.send("Home page");
});

app.get('/students', (req, res) => {
  res.send("Student page");
});

app.all("*", (req, res, next) => {
  res.status(404).send({error: "No on here"});
  // errorHandler();
  // const err = new Error("Cant find");
  // err.status = "fail";
  // err.statusCode = 400;

  // next(err);
});

app.listen(3000);