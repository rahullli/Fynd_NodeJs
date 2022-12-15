var buffer1 = Buffer.alloc(100) ;

var buffer2 = Buffer('FYND');

var buffer3 = Buffer.from([1,2,3,4]);

// utlising a buffer space 
//  the write function will have runtime data  : 

buffer1.write(" I am here");

// Tranforming Buffer content to string
var a = buffer1.toString('utf-8');

console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);

var bufferSource = new Buffer('ABC');
var bufferDestination =    Buffer.alloc(3);
bufferSource.copy(bufferDestination);

var Data = bufferDestination.toString('utf-8');
console.log(Data);


// Slice or Filter The data

var bufferOld = new Buffer('INDIA IS GREAT');
var bufferNew = bufferOld.slice(0,4);
console.log(bufferNew.toString());


// Concat 2 Buffers 

var bufferOne = new Buffer('INDIA');
var bufferTwo = new Buffer('IS BEAUTIFUL COUNTRY');
var bufferThree = Buffer.concat([bufferOne , bufferTwo]);
console.log(bufferThree.toString());
