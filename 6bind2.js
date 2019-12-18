
var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log(`Hi ${this.firstName}`)
        },1000)
    }
}

//setTimeout changes the context of this to the global object
console.log(colt.sayHi())

var elie = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log(`Hi ${this.firstName}`)
        }.bind(this),1000)
    }
}

//setTimeout changes the context of this to the global object
console.log(elie.sayHi())