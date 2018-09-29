let map = new Map([[1, 'one'], [2, 'two']]);
map.set(3, 'three');
console.log(map);
map.delete(2);

for(let [key, value] of map.entries()) {
    console.log(`key: ${key}, value: ${value}`);
}

for(let entry of map) {
    console.log(`entry: ${entry}`);
}

let obj1 = new Object();
let obj2 = new Object();
// weakmap can't have primitive as key
// weakmap is not iterable
map = new WeakMap([[obj1, 'one'], [obj2, 'two']]);
console.log(map.get(obj1));
obj1 = null;
console.log(map.get(obj1));