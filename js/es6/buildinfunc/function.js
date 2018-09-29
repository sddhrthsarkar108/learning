function Person(dob) {
    this.dob = dob;
 }

 /*
 Person.prototype property is created internally 
 once you declare above function. Many properties
  can be added to the Person.prototype which are 
  shared by Person instances created using new Person().
  */

 console.log(Person);
 console.log(Person.prototype);

 /* Every instance created using new Person() 
 has a __proto__ property which points to the Person.prototype. 
 This is the chain that is used to traverse to find a 
 property of a particular object.
 */

var person1 = new Person(27);
var person2 = new Person(28);

/*
 * In the above picture you can see that Foo is a Function Object 
 * and therefore it has a __proto__ link to the Function.prototype
 * which in turn is an instance of Object and has a __proto__ link 
 * to Object.prototype. The proto link ends here with __proto__ in 
 * the Object.prototype pointing to null.
 */