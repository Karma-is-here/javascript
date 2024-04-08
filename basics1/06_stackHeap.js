//STACK => PRIMITIVE DATATYPES -> passed a copy
//HEAP  => NON-PRIMITIVE TYPES -> passed by reference

//node basics1/06_stackHeap.js

let yourName = "Vanshika";
let anotherName = yourName;
anotherName= "Garvit";

console.log(anotherName);
console.log(yourName);

//Implementing Heap

let userOne= {
    email:"vanshika@gmail.com",
    upi: "user@axl"
}

let userTwo= userOne;

//As passed by reference the value changes inside of the heap. 

userTwo.email="garvit@gmail.com";
userTwo.upi= "ullu@ybl";

console.log(userOne);
console.log(userTwo)