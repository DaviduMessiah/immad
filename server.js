 
 var express = require("express");
   var app = express();
     
    app.get("/", function(req, res) {
        res.send("Hello Node.js and Express.");
    });
     
    console.log("Web application opened.");
    app.listen(process.env.PORT);