"use strict";
// complex types
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// duplication of types
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
var complex3 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge_dup2;
myRealAge_dup2 = 27;
myRealAge_dup2 = '27';
// myRealAge_dup2 = true; // CE
// check types
var finalvalue = 'final value';
if (typeof finalvalue == 'string') {
    console.log('final value is a string');
}
