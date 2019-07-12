let var1 = 'var1';

// block scope
function test() {
    // console.log(var1); // CE since var1 is not defined in scope
    let var1 = null;
    console.log(var1);
}

test();
console.log(var1);