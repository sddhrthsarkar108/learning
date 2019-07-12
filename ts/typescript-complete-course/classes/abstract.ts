abstract class Project {
    abstract changeName(name: string): void;
}

class ITProject extends Project {
    changeName(name: string): void {
        throw new Error("Method not implemented.");
    }
}