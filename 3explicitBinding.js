var person = {
    firstName: "Colt",
    sayHi: function(){
        return `Hi ${this.firstName}`
    },
    determineContext: function (){
        return this === person
    },
    dog: {
        sayHello: function(){
            return `Hello ${this.firstName}`
        },
        determineContext: function(){
            return this === person
        }
    }
}

//this is inside object dog, so this is dog which doesn't have a firstName property
console.log(person.dog.sayHello())
//setting the context of "this" to person via .call()
console.log(person.dog.sayHello.call(person))
//false as this is refering to dog, the object the function is in
console.log(person.dog.determineContext())
//setting "this" with call
console.log(person.dog.determineContext.call(person))

var colt = {
    firstName: "Colt",
    sayHi: function(){
        return `Hi ${this.firstName}`
    }
}

var elie = {
    firstName: "Elie",
}

console.log(colt.sayHi())
// we removed the sayHi method from elie
// console.log(elie.sayHi())
//we used call to return elie inside colt
console.log(colt.sayHi.call(elie))