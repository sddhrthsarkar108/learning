class Sid extends Person {
    name = "sid"; // override property of parent

    constructor() {
        super('tuk')
        console.log(this.age)
    }
}

const sid = new Sid();
// console.log(sid.age); // CE since protected member becomes private