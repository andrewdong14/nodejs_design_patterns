var person = require('./person.js');
var person1 = person.create('John', 'Smith');
console.log(person1);
console.log(person1.fullName());