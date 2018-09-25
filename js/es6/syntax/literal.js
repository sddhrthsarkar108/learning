const obj1  = {
    name: 'sid'
}

console.log(obj1)

// object literal extention
let name = 'sid'

const obj2 = {
    name
}

console.log(obj2)

const obj3 = {
    'name': 'sid'
}

console.log(obj3)

// dynamic parameter addition
let dynName = 'name'

const obj4 = {
    [dynName]: 'sid'
}

console.log(obj4)