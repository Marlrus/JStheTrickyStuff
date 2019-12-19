
function Vehicle(make,model,year){
    this.make = make
    this.model = model
    this.year = year
    this.isRunning = false
    this.turnOn = function(){
        if (!this.isRunning){
            return this.isRunning=true
        }
        return this.isRunning=false
    }
    this.honk = function(){
        if(this.isRunning){
            return "beep"
        } 
    }
}

var car = new Vehicle("ford","mustang","1969")

console.log(car)

console.log(car.isRunning)

car.turnOn()

console.log(car.isRunning)
console.log(car.honk())
car.turnOn()

console.log(car.isRunning)
console.log(car.honk())

//V2 Refactor to prototype


function Vehicle2(make,model,year){
    this.make = make
    this.model = model
    this.year = year
    this.isRunning = false
}

Vehicle2.prototype.turnOn = function(){
    if (!this.isRunning){
        return this.isRunning=true
    }
    return this.isRunning=false
}

Vehicle2.prototype.honk = function(){
    if(this.isRunning){
        return "beep"
    } 
}

var car2 = new Vehicle2("ford","mustang","1969")

console.log(car2)

console.log(car2.isRunning)

car2.turnOn()

console.log(car2.isRunning)
console.log(car2.honk())
car2.turnOn()

console.log(car2.isRunning)
console.log(car2.honk())