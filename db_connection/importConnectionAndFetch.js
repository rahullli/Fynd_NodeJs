const mongoClient= require("./exportConnection");

function showCollectionData(){

    try{
        const fetchCollection = mongoClient.db("EMPLOYEE").collection("managerCollection");
        const fetchCollectionData = fetchCollection.find({});
        fetchCollectionData.forEach(data=>{
            console.log(data.name);
        })
    }
    catch(e){
        throw e ;
    }
}

showCollectionData();