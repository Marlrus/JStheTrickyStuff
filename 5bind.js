"use strict"

var colt = {
    firstName: "Colt",
    sayHi: function(){
        return `Hi ${this.firstName}`
    },
    addNumbers: function(a,b,c,d){
        return `${this.firstName} just calculated ${(a+b+c+d)}`
    }
}

var elie = {
    firstName: "Elie"
}

var elieCalc = colt.addNumbers.bind(elie,1,2,3,4)
console.log(elieCalc())

//partial application
var elieCalc2 = colt.addNumbers.bind(elie,1,2)
//runs elieCalc2(1,2,3,4) taking 2 params from the declaration, and 2 from the execution.
console.log(elieCalc2(3,4))

//setTimeout log hellow world after 1000ms
setTimeout(function(){
    console.log("hellow world")
},1000)