let numbers = ['1.0', '2.5', 4.5, 2.4]
numbers.foo = 'bar'

// iterates over enumerable
// properties of object
for(number in numbers) {
    console.log(number)
}

// iterates over iterable objects
// invoking custom iteration hook
for(number of numbers) {
    console.log(number)
}