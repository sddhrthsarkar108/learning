"use strict";
// string
var myName = 'Max';
// myName = 1; // compiler error since myNmae is assigned a string
// number
var myAge = 27.5; // ts doesn't care about type of number
// boolean
var isHobbies = false;
var myRealAge; // default type is any
myRealAge = 27;
myRealAge = '27';
var myRealAge_dup1; // default type is any
// myRealAge_dup1 = 27;  // compiler error since myNmae is assigned a string
myRealAge_dup1 = '27';
// array
var hobbies = ['Cooking', 'Sports'];
// hobbies = [100]; // compiler error since hobbies is assigned to a array of string
var hobbies_dup1 = ['Cooking', 'Sports'];
hobbies_dup1 = [100]; // no compiler error since hobbies_dup1 is of type any
// tuples
var address = ["superstreet", 99];
// address = [99, ""]; // order is impoertant
// enum
var Color;
(function (Color) {
    Color[Color["GREY"] = 0] = "GREY";
    Color[Color["GREEN"] = 100] = "GREEN";
    Color[Color["BLUE"] = 101] = "BLUE"; // value of BLUE would be 101
})(Color || (Color = {}));
var myColor = Color.GREEN;
console.log(myColor);
// any
var car = 'bmw';
car = {
    brand: 'bmw',
    series: 3
};
// never
function neverReturns() {
    throw new Error('an error');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null; // if var is undifined then it can be null
var canThisBeAny = null;
// canThisBeAny = 12;
