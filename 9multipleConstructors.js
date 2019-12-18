function Car(make,model,year){
    this.make = make
    this.model = model
    this.year = year
    this.numWheels = 4
}

function OldMotorcycle(make,model,year){
    this.make = make
    this.model = model
    this.year = year
    this.numWheels = 2
}

//refactored using call
function Motorcycle(make,model,year){
    Car.call(this, make,model,year)
    this.numWheels = 2
}

var car1 = new Car("Ford","mustang",1969)
console.log(car1)

var motorcycle1 = new Motorcycle("Ducati","Scrambler","2017")
console.log(motorcycle1)

//refactored using apply
function MotorcycleApp(make,model,year){
    Car.apply(this, [make,model,year])
    this.numWheels = 2
}

var motorcycle2 = new MotorcycleApp("Ducati","Scrambler","2017")
console.log(motorcycle2)

//refactored using apply and arguments

//arguments test
function listArguments(){
    return arguments
}
var list = listArguments(1,2,3,4,5)
//arguments returns the arguments passed into a function as a list with a few more things
console.log(list)

function MotorcycleAppArg(){
    Car.apply(this, arguments)
    this.numWheels = 2
}

var motorcycle3 = new MotorcycleAppArg("Ducati","Scrambler","2017")
console.log(motorcycle3)