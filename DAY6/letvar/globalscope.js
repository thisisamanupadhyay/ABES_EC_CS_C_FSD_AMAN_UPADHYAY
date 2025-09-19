var a = 20;
let b = 30;
const pi = 3.14;
console.log("Global Scope:");
console.log("value of a in global scope: ", a);
console.log("value of b in global scope: ", b);
console.log("value of pi in global scope: ", pi);
function callValues(a, b, c) {
    console.log("Inside Function:");
    console.log("value of a inside the function: ", a);
    console.log("value of b inside the function: ", b); 
    console.log("value of c inside the function: ", c);
}
callValues(a,b,pi);