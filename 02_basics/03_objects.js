/*
Objects
1. Literal - Non-Sigleton
2. Constructor - Singleton
Obeject.create
*/

// Object Literal
const loc = Symbol('panvel')
const obj1 = {
    fname : "Bhavesh",
    age : 22,
    //Symbol
    [loc]:"panvel",
    isLogged : true,
    lastLoginDays : ['mon', 'wed']
}

console.log(obj1.fname)
console.log(obj1['fname'])

obj1.age = 21
// Object.freeze(obj1)
obj1.isLogged = false
console.log(obj1)
console.log(typeof(obj1.loc))

obj1.greeting = function(){
    console.log("Hello User")
}

obj1.greeting2 = function(){
    console.log(`Hello ${this.fname}`)
}
console.log(obj1.greeting())
console.log(obj1.greeting2())