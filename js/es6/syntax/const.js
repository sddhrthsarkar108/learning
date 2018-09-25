// let defines block scope
let name1 = 'maa'

if(true) {
    name1 = 'mama'
}

console.log(name1)

// const defines constants
const NAME2 = 'maa'

if(true) {
    // error!!
    // NAME2 = 'mama'
}

console.log(NAME2)

const NAMES = ['sid', 'tuk']
NAMES.push('maa')
console.log(NAMES)