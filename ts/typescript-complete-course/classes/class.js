"use strict";
var Person = /** @class */ (function () {
    // public username: string is shortcut 
    function Person(name, age) {
        if (age === void 0) { age = 10; }
        this.name = name;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var person = new Person("sid");
console.log(person);
console.log(person.name);
person.printAge();
person.setType('cool!!!');
