class Person {
    constructor(name) {
        this.name = name;
    }

    details() {
        console.log(`name : ${this.name}`)
    }
}

class Sid extends  Person {
    constructor(age) {
        super('sid');
        this.age = age;
    }

    details() {
        super.details();
        console.log(`age: ${this.age}`);
    }
}

const p1 = new Person('max');
p1.details();

const sid = new Sid(28);
sid.details();

console.log(sid.__proto__ === Sid.prototype);
console.log(sid.__proto__ === Person.prototype);