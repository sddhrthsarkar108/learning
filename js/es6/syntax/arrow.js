function func1(name) {
    console.log('hello ' + name)
}

func1('sid', 'tuk'); // extre arguments would be ignored

console.log(func1);

//let func1 = function(name) {
let func2 = function(name) {
    console.log('hello ' + name)
};

func2('tuk');

func2 = name => console.log('hello ' + name);
func2('maa');

setTimeout(() => console.log('Hi!!!'), 5000);

// arrow function makes function declaration concise
// and promotes passing function as variable
// and fat arrow function keeps the context of this

// unlike normal function where context for the 'this'
// change as per the call context so there is no need 
// of 'bind' unlike es5 equivalent

function func4() {
    console.log(this)
}