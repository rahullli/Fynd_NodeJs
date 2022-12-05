
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017" ;
const client = new MongoClient(url);
client.connect();
console.log("Connection established ");
const collection = client.db("EMPLOYEE").collection("managerCollection") ;
collection.findOne({}, function (err, result) {
    
        console.log(result) ;
});

