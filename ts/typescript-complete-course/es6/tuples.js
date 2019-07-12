"use strict";
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
// is equivalent to 
// function printInfo(name: string, age: number, income: number) {
//     console.log('My name is ' + name + ' and I am ' + age + ' years old!');
// }
printInfo('sid', 2, 4);
