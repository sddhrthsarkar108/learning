class Person {
    constructor(name) {
        this._name = name;
    }

    // this.name = name  would call the setter again
    // resulting in infinite recursion
    set name(name) {
        this._name = name;
    }

    // getter without setter also gives an error
    get name() {
        return this._name;
    }

    printName() {
        console.log(this._name);
    }
}

let p1 = new Person('sid');
console.log(p1.constructor.__proto__ == Person.__proto__);

// unlike java, js inheritance work on prototype behind the 
// scene even after introduction of ES6 class and extend
class Sid extends Person {
    constructor(name) {
        super(name)
    }
}

let sid = new Sid('sid');
console.log(sid);
sid.printName();