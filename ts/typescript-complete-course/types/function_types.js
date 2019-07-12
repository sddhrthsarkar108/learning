"use strict";
// function
function returnString() {
    return 'sid';
    // return 1; // CE
}
function returnVoid() {
    // return 'sid'; // CE
}
function multiply(v1, v2) {
    return v1 * v2;
}
console.log(multiply(2, 2));
// multiply('sid', 2); // CE
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 2));
myMultiply = returnString;
myMultiply();
var myMultiply_dup1;
myMultiply_dup1 = multiply;
console.log(myMultiply_dup1(2, 2));
// myMultiply_dup1 = returnString; //  CE
// myMultiply_dup1(); // CE
