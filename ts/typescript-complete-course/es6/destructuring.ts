// array destructuring
const myArr = [1, 2, 4, 5, 6];

const [a1, a2, ...a3] = myArr;
console.log(`${a1}  ${a2}  ${a3}`)

// object destructuring
const data = {name1: 'sid', age: 29}
const {name1: name1_alias, age} = data;