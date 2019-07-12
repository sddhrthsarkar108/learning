"use strict";
// array destructuring
var myArr = [1, 2, 4, 5, 6];
var a1 = myArr[0], a2 = myArr[1], a3 = myArr.slice(2);
console.log(a1 + "  " + a2 + "  " + a3);
// object destructuring
var data = { name1: 'sid', age: 29 };
var name1_alias = data.name1, age = data.age;
