// object
let userData = {
    name : 'sid',
    age: 29
}

// userData = {} // type infers the type from the data assined
// userData = { // property name is import for object types rather than order
//     a: 'hello',
//     b: 0
// }
let userData_dup1: {name: string, age: number} = {
    name : 'sid',
    age: 29
}