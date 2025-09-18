function fun(){
    var a = 20;
    let b = 30;
    const pi = 3.14;
    console.log("block Scope:");
    console.log("value of a inside the function: ", a);
    console.log("value of b inside the function: ", b);
    console.log("value of pi inside the function: ", pi);
}
fun();
console.log("outside the function:");
console.log("value of a outside the function: ", a);
console.log("value of b outside the function: ", b); //error
console.log("value of pi outside the function: ", pi); //error