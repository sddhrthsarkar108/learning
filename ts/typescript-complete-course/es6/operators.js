"use strict";
// spread
var numbers = [2, -1, 6, -2];
console.log(Math.max.apply(Math, numbers)); // spead out elenents in unit values
// rest
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
makeArray('sid', 1, 2, 3);
