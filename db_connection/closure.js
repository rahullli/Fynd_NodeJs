var a = 2 ;
function one(){

    var a = 4 ;

    function two(){
        console.log(" My value is : " , a);
    }
    two();
    var a = 5 ;
}

one();