"use strict"

var person = {
    firstName: "Elie",
    sayHi: function(){
        return `Hi ${this.firstName}`
    },
    determineContext: function (){
        return this === person
    }
}

//this is person
console.log(person.sayHi())
//evaluates as true because this is refering to the parent object person
console.log(person.determineContext())

//NESTED OBJECTS
var person = {
    firstName: "Colt",
    sayHi: function(){
        return `Hi ${this.firstName}`
    },
    determineContext: function (){
        return this === person
    },
    dog: {
        //firstName: "Rusty",
        sayHello: function(){
            return `Hello ${this.firstName}`
        },
        determineContext: function(){
            //return this === person.dog
            return this === person
        }
    }
}

//this is inside object dog, so this is dog which doesn't have a firstName property
console.log(person.dog.sayHello())
//false as this is refering to dog, the object the function is in
console.log(person.dog.determineContext())