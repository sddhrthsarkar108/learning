let arr = [1, 2, 3];
let n1, n2 = arr;
console.log(n1, n2);

// for array we're deconstructing by position
let [n3=0, n4, ,n5=n3] = arr;
console.log(n3, n4, n5);

let [n6, ...n7] = arr;
console.log(n6, n7);

let a = 4;
let b = 6;
// console.log(a, b)

[b, a] = [a, b];
console.log(a, b);

const obj = {
    name : 'sid',
    address: 'noida',
    getName : function() {
        console.log(name)
    },
    getAddress : () => console.log(address)
};

let {name, address, getName} = obj;
console.log(name, address);
// won't work, for object destructure by name
// console.log(nam, address)

getName();

let {getAddress:getDetails} = obj;
// Won't work, after assigning alias !!!
// getAddress()
getDetails();