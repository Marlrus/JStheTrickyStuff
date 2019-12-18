

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

var oerse = new Person("Oerse","SM")

//When executed using new an object is created and the this context refers to that object.
console.log(oerse.firstName)
console.log(oerse.lastName)

// the object created through new
console.log(oerse)
