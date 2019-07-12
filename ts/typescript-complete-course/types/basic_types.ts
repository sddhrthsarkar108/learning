// string
let myName = 'Max';
// myName = 1; // compiler error since myNmae is assigned a string

// number
let myAge = 27.5; // ts doesn't care about type of number

// boolean
let isHobbies = false;

let myRealAge; // default type is any
myRealAge = 27;
myRealAge = '27';

let myRealAge_dup1: string; // default type is any
// myRealAge_dup1 = 27;  // compiler error since myNmae is assigned a string
myRealAge_dup1 = '27';

// array
let hobbies = ['Cooking', 'Sports'];
// hobbies = [100]; // compiler error since hobbies is assigned to a array of string

let hobbies_dup1: any[] = ['Cooking', 'Sports'];
hobbies_dup1 = [100]; // no compiler error since hobbies_dup1 is of type any

// tuples
let address: [string, number] = ["superstreet", 99] 
// address = [99, ""]; // order is impoertant

// enum
enum Color {
    GREY,
    GREEN = 100,
    BLUE // value of BLUE would be 101
}

let myColor: Color = Color.GREEN;
console.log(myColor);

// any
let car: any = 'bmw';
car = {
    brand: 'bmw',
    series: 3
}

// never
function neverReturns(): never { // this function never finishes since it never returns
    throw new Error('an error');
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; 
canAlsoBeNull = null; // if var is undifined then it can be null

let canThisBeAny = null;
// canThisBeAny = 12;