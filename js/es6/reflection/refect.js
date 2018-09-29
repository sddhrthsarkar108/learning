class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

let p1  = Reflect.construct(Person, ['sid']);
Reflect.get(p1, 'name');
console.log(p1);
console.log(Reflect.ownKeys(p1));

function myFunc() {
    this.age = 28;
}

// 2nd arg sets this context
Reflect.apply(p1.greet, {name: 'tuk'}, []);

p1  = Reflect.construct(Person, ['sid'], myFunc);
console.log(p1);

let dummy = {};

Reflect.setPrototypeOf(p1, dummy);
Reflect.defineProperty(p1, 'hobby', {
    writable: true,
    value:['nothing'],
    configurable: true
});

console.log(p1);

// for delete to work property must be configurable
Reflect.deleteProperty(p1, 'hobby');
console.log(p1);

Reflect.preventExtensions(p1);
console.log(Reflect.isExtensible(p1));