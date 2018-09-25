// var represents global/function scope
var name1 = 'sid'

if(true) {
    console.log(name1)
}

if(true) {
    var name2 = 'tuk'
}

console.log(name2)


// let defines block scope
let name3 = 'maa'

if(true) {
    let name3 = 'mama'
    console.log(name3)
}

console.log(name3)