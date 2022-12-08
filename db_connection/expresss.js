
var express = require('express');

var app = express();

app.get('/',  function(req, res){

    res.send("Hello, world!");
}).listen(8000);

app.post('/hello',  function(req, res){

    res.send("This is the first");
}).listen(8000);