// constructor function
function Person(name) {
    this.name = name;
    this.greet = () => console.log('welcome, ' + this.name);
}

let p1 = new Person('sid');
console.log(p1.name);
p1.greet();

console.log(p1.__proto__);

console.log("****constructor function vs class****");

// class instead of constructor function
class Address {
    constructor(name) {
        this.name = name;
    }

    set address(address) {
        this._address = address;
    }

    get address() {
        return this._address;
    }

    static getCountry() {
        return 'india';
    }
}

const address = new Address('sid');

// we can use 'get' nad 'set' keyword to create getters and setters
address.address = 'haldia';
console.log(address.address);
// we can still call _name, so name being private is not enforced
console.log(address.name);
// static method call
console.log(Address.getCountry());

console.log(address.__proto__);
console.log(address.__proto__ === Person.prototype);
console.log(address.__proto__ === Address.prototype);