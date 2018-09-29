let set = new Set([2,3,4,1]);
console.log(set);
console.log(set.delete(3));
console.log(set.add(6));
console.log(set.has(6));

// js sets like java hash set implemented by hash map
for(let [key, value] of set.entries()) {
    console.log(`index: ${key}, value: ${value}`);
}   