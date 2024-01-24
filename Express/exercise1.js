// import http from "http";
const http = require('http');
const server = http.createServer((_req, res) => {
  res.write("Some cool response!");
  res.end();
});
const port = 3000;
server.listen(port);
console.log("HTTP Server listening port", port);

// W3Schools example

// const http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);

              