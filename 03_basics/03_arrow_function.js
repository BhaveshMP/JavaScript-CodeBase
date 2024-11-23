const user = {
    name : "bhavesh",
    price : 999,

    welcomeMsg : function(){
        console.log(`Welcome ${this.name}`)
    }
}

user.welcomeMsg()
user.name = "sam"
user.welcomeMsg()

//normal function
function chai(){
    let uname = "bhavesh"
    console.log(this.uname)
}
chai()

const chai2 = () => {
    let uname = "bhavesh"
    console.log(this)
}
chai2()


// basic arrow function
const addTwo = (n1, n2) => {
    return n1 + n2
}

//const addThree = (n1, n2) => n1 + n2 //OR
const addThree = (n1, n2) => (n1 + n2)

const username = () => ({username: "raj"})