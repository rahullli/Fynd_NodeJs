const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017" ;
const client = new MongoClient(url);
client.connect();
var answer ;
console.log("Connection established ");
const collection = client.db("EMPLOYEE").collection("managerCollection") ;
// collection.findOne({}, function (err, result) {
    
//     //    const answer = result ;
//     console.log(result) ;
//     answer = result ; 
        
// });

collection.find(function (err, result) {

        answer = result ;
});

// console.log(answer);

var express = require('express');

var app = express();

app.get('/',  function(req, res){

    
    res.send(answer);
    
}).listen(8000);


console.log(`Prt is  running on ${8000}`) ;