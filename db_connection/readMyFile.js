const fs = require('fs');

fs.readFile('./myFile.txt' , 'utf-8' , (err , data)=>{

    if(err){
        console.error(err);
        return ;
    }
    else{
        console.log(data);
    }
});