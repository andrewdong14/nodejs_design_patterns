function Person (firstName, lastName) {  
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}
//creating objects
function create(firstName, lastName) {  
  return new Person(firstName, lastName);
}

module.exports.create = create;  