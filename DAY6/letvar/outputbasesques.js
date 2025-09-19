console.log(a);
var a;
function fun(){
    console.log(a);
    var a = 45;
    console.log(a); 
}
fun();
a = 90;
console.log(a);