var person = {
    firstName: 'John',
    lastName: 'Doe'
}
 
Object.defineProperty(person, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    
    set: function(value) {
        var parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});
 
console.log(person.fullName); //
 
person.fullName = 'John Cho';
 
console.log(person.fullName); // John Cho