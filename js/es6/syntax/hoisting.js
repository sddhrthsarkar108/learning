// hoisting defines a behavior where we initialize 
// a variable before actully declaring it in js
age = 27;
console.log(age);

var age;

// hositing doesn't work with 'let'
// age1 = 27
// console.log(age1)

// let age1;

function dummy() {
    age2= 27
}

// not allowed!!!
// dummy()
let age2;
dummy();
console.log(age2);