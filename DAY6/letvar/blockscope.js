{
    var a = 20;
    let b = 30;
    const pi = 3.14;
    console.log("block Scope:");
    console.log("value of a inside the block scope: ", a);
    console.log("value of b inside the block scope: ", b);
    console.log("value of pi inside the block scope: ", pi);
}
console.log("outside the block:");
console.log("value of a outside the function: ", a);
console.log("value of b outside the function: ", b); //error
console.log("value of pi outside the function: ", pi); //error