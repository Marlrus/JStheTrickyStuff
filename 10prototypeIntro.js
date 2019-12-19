function Person(name){
    this.name = name
}

var oerse = new Person("Oerse")
var marmot = new Person("Marmot")

console.log(oerse)
console.log(marmot)

//Checking the Person.prototype
console.log(Person.prototype)
//checking oerse prototype
console.log(oerse.__proto__)
//Verifying if they are the same
console.log(oerse.__proto__===Person.prototype)
//Checking constructor property inside the prototype
console.log(Person.prototype.constructor===Person)
//the constructor CHECK IN BROWSER
console.log(Person.prototype.constructor)