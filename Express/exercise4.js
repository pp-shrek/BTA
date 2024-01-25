const express = require('express');
const app = express();
let counter = 0;
const counterObj = {};

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/counter', function (req, res) {
  
  if(req.query.number) {
    console.log(`hep`);
    counter = req.query.number;
  } // if
  else {
    counter++;
    console.log(counter);
  } // else
  // res.send("counter: " +counter);
  // Prepare output in JSON format
  response = {
    "counter":counter
  };
 console.log(response);
 res.end(JSON.stringify(response));
});

app.get('/counter/:name', function (req, res) {
  console.log(`counter ${req.params.name}`);
  const name = req.params.name.toLowerCase();
  const nameExist = counterObj.hasOwnProperty(name);
  if(nameExist) {
    counterObj[name]++;
  } else {
    counterObj[name] = 1;
  }
  console.log(`${name} was here ${counterObj[name]} times`);
  res.send(`${name} was here ${counterObj[name]} times`);
});

const server = app.listen(3000, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})