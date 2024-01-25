const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const roures = require("./studentRouter.js");

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// const bodyParser = require("body-parser");
// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use("/", roures);

app.listen(3000);