function PersonOld(name){
    this.name = name
    this.sayHi = function(){
        return `Hi ${this.name}`
    }
}

oerse = new PersonOld("Oerse")

console.log(oerse)
console.log(oerse.sayHi())
//The function is inside the object we created with new PersonOld
console.log(oerse)


//Every time that this object is created we have to declare this function on that object. If we make 100000 we do this that amount of times

//refactor

function Person(name){
    this.name = name
}

Person.prototype.sayHi = function(){
    return `Hi ${this.name}`
}

marmot = new Person("Marmot")

console.log(marmot)
console.log(marmot.sayHi())
//the function is not in the object but inside the Person.prototype
console.log(marmot.__proto__)
console.log(marmot)