/* var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);
 */
 
 var express = require("express");
   var app = express();
     
    app.get("/", function(req, res) {
        res.send("Hello Node.js and Express.");
    });
     
    console.log("Web application opened.");
    app.listen(process.env.PORT);