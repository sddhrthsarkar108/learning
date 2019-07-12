// complex types
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [1,2,3],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

// duplication of types
let complex2: {data: number[], output: (all: boolean) => number[]} = {
    data: [1,2,3],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

// type alias
// we can use type alias to store type
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex3: Complex = {
    data: [1,2,3],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

// union types
let myRealAge_dup2: number | string;
myRealAge_dup2 = 27;
myRealAge_dup2 = '27';
// myRealAge_dup2 = true; // CE

// check types
let finalvalue = 'final value';
if(typeof finalvalue == 'string') {
    console.log('final value is a string')
}