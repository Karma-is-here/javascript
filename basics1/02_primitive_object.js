console.log("PRIMITIVE DATATYPES")

//Types of primitive DATATYPES
/*
  number => integer, range 2^53
  null => must be defined explicitly
  bool => true/false
  bigint=> integer big
  string=> simple string
  symbol=> uniquely define the element in the system, imp foe webd
  undefined
*/

let a=null
let b=345
let c=true;
let d=false;
let e=BigInt("567")+BigInt("789");
let f="Hello";
let g=Symbol("Rectangle");

console.table([a,b,c,,d,e,f,g]);

//Non-Pprimitive Datatypes
//objects
//node basics1/02_primitive_object.js

let item={
  "colour":"Black",
  "price":100,
  "quantity":10,
  "total":function(){ //function inside an object
    return this.price*this.quantity
  }
}
console.log(item.colour);
console.log(item.price);
console.log(item.total())


//typeof keyword
console.log(typeof item);
