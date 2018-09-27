// once alias is assigned only that has to be used
import {keyValue as keyMap, update} from './export.js'
import defaultValue1, * as imported from './export.js'
import defaultValue2 from './export.js'

console.log(keyMap);
update();
// reference to the keyValue is imported
console.log(keyMap);

console.log(defaultValue1);
console.log(defaultValue2);

// packing all exports to a object
console.log(imported);

/*
* Modules are always in Strict Mode (no need to define "use strict")
*   with strict mode we can't use undeclared variable.
* Modules don't have a shared, global Scope. Instead each Module has its own Scope
*/

/*
 Why Strict Mode?
 Strict mode makes it easier to write "secure" JavaScript.

 Strict mode changes previously accepted "bad syntax" into real errors.

 As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
 In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

 In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

 In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property,
 a non-existing variable, or a non-existing object, will throw an error.
*/