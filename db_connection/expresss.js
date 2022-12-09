
var express = require('express');
// console.log(typeof express);
var app = express();
// console.log(typeof app);

app.get('/',  function(req, res){

    res.send("Hello, world!");
}).listen(8000);

// app.post('/hello',  function(req, res){

//     res.send("This is the first");
// }).listen(8000);