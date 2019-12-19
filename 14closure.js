function outer(){
    var data = "clsoures are "
    return function inner(){
        var innerData = "awesome"
        return data + innerData
    }
}

console.log(outer()())

function counter(){
    var count = 0
    return function(){
        return ++count
    }
}

//not affected by counter2
counter1 = counter()
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())

//not affected by counter 1
counter2 = counter()
console.log(counter2())
console.log(counter2())
console.log(counter2())
console.log(counter2())
console.log(counter2())

//the var count is not accessible, therefore a private variable
// console.log(count)

function classRoom(){
    var instructors = ["Colt","Elie"]
    return {
        getInstructors: function(){
            return instructors
        },
        addInstructors: function(instructor){
            instructors.push(instructor)
            return instructors
        }
    }
}

course1 = classRoom()
console.log(course1.getInstructors())
console.log(course1.addInstructors("Ian"))
console.log(course1.getInstructors())

//two separate branches and the variable inside is not accessible
course2 = classRoom()
console.log(course2.getInstructors())

