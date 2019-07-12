class Person1 {
    // public username: string is shortcut for creating and intializing properties
    constructor(public name: string, private type: string, protected age: number) {
    }
}

class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {

    }

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("this is the one");
        }

        return OnlyOne.instance;
    }
}

// const wrong = new OnlyOne(""); // can't call private constructor for creating instance
const right = OnlyOne.getInstance();
// right.name = ""; // CE as name is read only