let obj1 = {
    a:'a'
}

let obj2 = {
    b:'b'
}

let obj = Object.assign(obj1, obj2);
console.log(obj);
console.log(obj.__proto__ === obj1.__proto__);

obj = Object.assign({}, obj1, obj2);
console.log(obj);
console.log(obj.__proto__ === obj1.__proto__);

// create object from given prototype
obj = Object.create(obj1);
console.log(obj.a);

// sets object prototype after it's created
Object.setPrototypeOf(obj1, obj2);
console.log(obj1.b);
console.log(obj2.a);