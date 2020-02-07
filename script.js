// Load HTTP module
const http = require("http");
var express = require('express');
var app = express();

const hostname = "10.51.219.109";
const port = 443;

// Create HTTP server 
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   res.end('Hello World\n');
});

var square = require('./square.js'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));

app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  });


// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})
