//uncomment to remove problems with adding values to the global object through functions
// "use strict" 

console.log(this) 

function whatIsThis(){
    return this
}

// console.log(whatIsThis())

function variablesInThis(){
    this.person = "Elie"
}
//adding person:Elie into the global object: NO BUENO
variablesInThis()

console.log(person)

var dog = "rusty"

function makePerson(){
    var person = "colt"
    //return is necessary to get a return on our variable. Otherwise we get nothing. We could also ommit var, which is bad practice.
    return person
}

console.log(makePerson())