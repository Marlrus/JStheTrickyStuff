function Person(name){
    this.name = name
}

var oerse = new Person("Oerse")
var marmot = new Person("Marmot")

//Setting the isInstructor property on the Person prototype
Person.prototype.isInstructor = true

//accessing that property from two different objects "__proto__"
console.log(oerse.isInstructor)
console.log(marmot.isInstructor)

//This is short hand vor var arr = new Array
var arr = []
//we can see that it has a __proto__ value with every method we can use in an array. 
console.log(arr)
console.log(arr.__proto__===Array.prototype)
console.log(Array.prototype.__proto__===Object.prototype)
console.log(Array.prototype.constructor===Array)
console.log(Array.prototype.constructor===arr.__proto__.constructor)

//this is how JS find methods and properties in an object. Checks first in context, then __proto__ then __proto__ of the __proto__ until it finds something or finds nothing.
console.log(oerse.__proto__.isInstructor)

//TESTING TO SEE PROTOTYPE STUFF

function Family(mother,father,sister){
    this.mother = mother
    this.father = father
    this.sister = sister
}

oerse.family = new Family("Adriana","Dario","Nicole")

//Has two steps in the __proto__ chain, the one for the Family.prototype and 2 for Object.prototype
console.log(oerse.family.__proto__.__proto__===Object.prototype)

marmot.family = {
    mother : "Martha",
    father : "Camilo",
    brother : "Benja"
}

//only has one __proto__ as it did not use a constructor but just marmot.family = new Object 
console.log(marmot.family.__proto__===Object.prototype)