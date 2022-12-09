const mongo = require("mongodb");
const url ="mongodb://localhost:27017"

const mongoClient = new mongo.MongoClient(url);

mongoClient.connect(function(err,db){

    if(err) throw err;
    console.log("Database connection established");
});

module.exports = mongoClient;