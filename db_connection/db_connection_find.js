const MongoClient = require("mongodb").MongoClient ;
const url = "mongodb://localhost:27017" ;
const client = new MongoClient(url);
client.connect();
async function showCollection(){

    try{

        await client.connect();
        const managerCollection = client.db("EMPLOYEE").collection("managerCollection") ;
        const allDocuments = managerCollection.find({});
        await allDocuments.forEach((doc)=>{
            console.log(doc);
        });
    }

    catch(e){
        console.log(e);
    }

    finally{
        await client.close();
    }
}

showCollection();