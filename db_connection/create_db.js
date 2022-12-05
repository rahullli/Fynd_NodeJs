const mongo = require("mongodb");

const url = "mongodb://localhost:27017/dbCreateFromVs" ;

mongo.MongoClient.connect(url , function(err , db){

        if(err)
            console.log(err);
        
        else
            console.log("dabase created succeesfully");

        db.close();
}) ;
