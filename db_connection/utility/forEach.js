const arr = ['apple', 'banana', 'carrot'];
const arr2 = [1,2,3,4] ;


arr.push('guava');
arr2.push(100);

arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits = ['banana', 'apple'];
fruits.unshift('kiwi');

fruits.forEach(element=>{
    console.log(element);
});

console.log(fruits.findIndex(findFruit));

function findFruit(fruit){

    return fruit == "kiwi" ;
}