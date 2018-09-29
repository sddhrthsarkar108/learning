let p1 = {
    age: 28
};

let handler = {
    get: (obj, prop) => {
        console.log('In getter proxy');
        return prop in obj ? obj[prop] : 'undefined';
    },

    set: (obj, prop, value) => {
        console.log('in setter');
        value > 28 ? Reflect.set(obj, prop, value) : Reflect.set(obj, prop, NaN) ;
    }
};

let proxy =  new Proxy(p1, handler);
console.log(proxy.age);

proxy.age = 25;
console.log(proxy.age);

console.log(`***
proxies as prototypes
***`);
proxy = new Proxy({}, handler);
Reflect.setPrototypeOf(p1, proxy);
console.log(p1.name);

console.log(`***
function proxy
***`);

let fhandler = {
    apply: (target, thisContext, argList) => Reflect.apply(target, thisContext, argList)

};

let fproxy = new Proxy(console.log, fhandler);

fproxy('hello', 10);

let {p, revoke} = Proxy.revocable(p1, handler);
console.log(p, revoke);
revoke();