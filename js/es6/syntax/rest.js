const fn = (arg1, ...arg2) => console.log(arg1, arg2)

// REST operator captures multiple
// values in an Array
fn(1, 2, 3, 4)

// Rest parameter must be las formal parameter
// fn = (...arg1, arg2) => console.log(arg1, arg2)

fn(1, 2, 3, 4)