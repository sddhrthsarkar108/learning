let arr = Array.of(2,3,5,6);
console.log(arr);

let newArr = Array.from(arr, value => value * 2);
console.log(newArr);

newArr = newArr.fill(10, 1, 3);
console.log(newArr);

// stops after first match
console.log(newArr.find(value => value < 12));

// copyWithin(position, start, end), discard elements 
// more than array length   
console.log(newArr.copyWithin(1, 0, 2));

for(let [index, value] of newArr.entries()) {
    console.log(`index: ${index}, value: ${value}`);
}

// returns shalllow copy of array elements
console.log(arr.slice(1, 3));
// console.log(arr.slice()); // copy whole array