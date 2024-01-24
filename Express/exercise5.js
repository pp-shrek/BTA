const express = require("express");
const app = express();

// app.get('/', function (req, res) {
//   res.send("Home page");
// });

app.use(logger);

app.get('/', (req, res) => {
  res.send("Home page");
});

app.get('/students', (req, res) => {
  res.send("Student page");
});

function logger(req, res, next) {
  console.log(`logger`);
  console.log("A new request received at " + Date.now());
  console.log("request method " + req.method);
  console.log(`endpoint: ${req.originalUrl}`);
  next();
};

app.listen(3000);