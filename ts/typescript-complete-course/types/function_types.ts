// function
function returnString(): string {
    return 'sid';
    // return 1; // CE
}

function returnVoid(): void {
    // return 'sid'; // CE
}

function multiply(v1: number, v2: number) {
    return v1*v2;
}

console.log(multiply(2, 2));
// multiply('sid', 2); // CE

// function types
let myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 2));
myMultiply = returnString;
myMultiply();

let myMultiply_dup1: (a: number, b: number) => number;
myMultiply_dup1 = multiply;
console.log(myMultiply_dup1(2, 2));
// myMultiply_dup1 = returnString; //  CE
// myMultiply_dup1(); // CE
