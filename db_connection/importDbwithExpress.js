const result = require("./exportObject");

var express = require("express");

var app = express(); 

app.get("/", function(req, res){

    res.send(result);
}).listen(8000);


console.log(`Port is listening on port  ${8000}`); 