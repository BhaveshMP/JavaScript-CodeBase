function sayHello(){
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}
sayHello()
// parameters -  defining
function add(num1, num2){
    console.log(num1+num2)
}
// argument - passing
add(4, "34")


function add2(num1, num2){
    let sum = num1 + num2
    console.log(sum)
    return sum
}
const result = add2(4, 6)
console.log(result)

function logged(username){
    if(!username){
        console.log("Please enter something")
        return
    }
    return `Hello ${username}` 
}
console.log(logged("Bhavesh"))
console.log(logged())

// Rest operator
function calCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calCartPrice(100, 200, 300, 400))

 // passing object of argument in function
 //object
 const obj1 = {
    fname: "bhavesh",
    lname: "patil"
 }
//function
 function objHandling(anyObject){
    console.log(`Fname: ${anyObject.fname}\nLname: ${anyObject.lname}`)
 }
 //function calling
 objHandling(obj1)
objHandling({
    fname: "raj",
    lname: "mhatre"
})

 // passing array as argument in function
//Array
const arr1 = [100, 200, 300, 400]
 //function
function handleArray(anyArray){
    console.log("Array Length: "+anyArray.length)
}
// function calling
handleArray(arr1)