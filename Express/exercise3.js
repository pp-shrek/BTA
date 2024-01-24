// import express from 'express';

// const server = express();
// server.listen(3000, () => {
//     console.log('Listening to port 3000');
// });

const express = require('express');
const app = express();
let counter = 0;

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/foobar', function (req, res) {
  res.send("OK");
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

app.get("/:name/:surname", (req, res) => {
  console.log(`Params:`);
  console.log(req.params);
  console.log(`Query:`);
  console.log(req.query);

  res.send("hello " + req.params.name);
})

const server = app.listen(3000, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})