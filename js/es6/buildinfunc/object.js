function f1() {
    this.i = 0

    // with this every object would get it's own getI method
    this.getI = () => {
        console.log(this.i);
    }
}

// objects created from constructor fuction f1()
// would refer to to it's getI method by at the 
// prototype property of the it's constructor object
f1.prototype.getINew1 = () => {
    console.log(this.i);
}

f1.prototype.getINew2 =function() {
    console.log(this.i);
}

console.dir(f1);
console.log(f1.prototype.constructor);

let obj1 = new f1();
obj1.getI();
// undefined since arrow function would preserve the context
obj1.getINew1();
obj1.getINew2();
console.log(obj1);
console.log(obj1.constructor);

