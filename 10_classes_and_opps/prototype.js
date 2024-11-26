
let myString = "Bhavesh   "

let myArray = ["thor", "spidy"]

let myHeroes = {
    thor : "Lord of Thunder",
    spidy : "Spidy sense",

    SpidyPower : function(){
        return `${this.spidy}`
    }
}


Array.prototype.bhavesh = function(str){
    return "Bhavesh is present in all objects"
}

console.log(myHeroes.SpidyPower)
// console.log(myHeroes.bhavesh())
console.log(myArray.bhavesh())
// console.log(myString.bhavesh())

String.prototype.trueLength = function(){
    return this.trim().length
}

// inheritance