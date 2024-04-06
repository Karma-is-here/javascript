//node basics1/03_conversionOperations.js
let a="33abc";
//console.log(typeof a);

let valueInt= Number(a);
//console.log(typeof valueInt);
//console.log(valueInt); //Nan means not a number

// "33" => 33
// "33abc" => NaN

let isLoggedIn="anything";
let boolIsLoggedIn=Boolean(isLoggedIn);
console.log(boolIsLoggedIn);

// isLoggedIn=1 => true
// isLoggedIn=0 => false
// "" => false
// "anything" => true

