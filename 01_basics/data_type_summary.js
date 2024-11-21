// Primitive
// 7 Types - String, boolean, null, number, undefined, Symbol, BigInt

const name = "bhavesh"
const isAlive = true
const location = null
let state
const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 == id2)

// Reference (Non - primitive)
// Array, Object, Functions

const Heroes = ['hulk', 'deadpool', 'Batman']
let myObj = {
    name:'ram',
    age: 22
}

const myFunction = function(){
    console.log("Hello World!!!")
}