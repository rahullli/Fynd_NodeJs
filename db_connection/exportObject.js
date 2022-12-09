const mongoClient  = require("./exportConnect");
const ans = [];

function showCollectionData(){

    try{
        const fetchCollectionData = mongoClient.db("EMPLOYEE").collection("managerCollection");
        const fetchSingleData = fetchCollectionData.find({});

        fetchSingleData.forEach(data=>{

            console.log(data);
            ans.push(data);
        });
    }
    catch(e){
        throw e;
    }
}

showCollectionData();

module.exports = ans ;