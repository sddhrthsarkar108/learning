class Person {
    name: string; // default access is public
    private type: string; // js doesn't have access modifier
    protected age: number

    // public username: string is shortcut 
    constructor(name: string, age: number = 10) {
        this.name = name;
        this.age = age;
    }

    printAge() { // method is function without function keyword
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
    }

    private setAge(age: number) {
        this.age = age;
    }
}

const person = new Person("sid");
console.log(person);
console.log(person.name);
person.printAge();
person.setType('cool!!!');
