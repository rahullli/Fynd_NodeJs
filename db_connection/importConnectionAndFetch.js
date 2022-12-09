const mongoClient= require("./exportConnection");
const ans = [];
function showCollectionData(){

    try{
        const fetchCollection = mongoClient.db("EMPLOYEE").collection("managerCollection");
        const fetchCollectionData = fetchCollection.find({});
        // ans = fetchCollectionData ;
        fetchCollectionData.forEach(data=>{
            // console.log(data.name);
            console.log(data);
            ans.push(data);
        })
    }
    catch(e){
        throw e ;
    }
}

showCollectionData();



