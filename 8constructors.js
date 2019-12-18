//constructor (blueprint)
function House(bedrooms, bathrooms, numSqft){
    this.bedroom = bedrooms
    this.bathroomes = bathrooms
    this.numSqft = numSqft
}

//new object
var house1 = new House(2,2,1000)

console.log(house1)

//Exercise, create a constructor with a function and call it successfuly
function Dog(name,age){
    this.name = name
    this.age = age
    //forgot this.bark originally, it needs this to add the "varName" to the function to execute it.
    this.bark = function(){
        console.log(`${this.name} just barked!`)
    }
}

var rusty = new Dog("rusty",3)
var fido = new Dog("fido",3)

console.log(rusty.bark())
console.log(fido.bark())