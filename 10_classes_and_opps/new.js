// OOPS

const obj1 = {
    uname : "bhavesh",
    rnum : 9158,
    signedIn : true,

    getUserDetails : function(){
        console.log("USER Details :" ,this.uname)
    }
}

console.log(obj1.uname)
console.log(obj1.getUserDetails())

// costruction function
const obj2 = new Object()

function User(fname, lname){
    this.fname = fname
    this.lname = lname

    this.getUserDetails = function(){
        console.log("USER Details :" ,this.uname)
    }

    return this
}

const u1 = User("Bhavesh", "Patil")
console.log(u1.lname)

const u2 = new User("Kashyap", "Patil")
console.log(u2.lname)
console.log(u1.constructor)

User.prototype.printME = function(){
    console.log("HEY 1233")
}

//u1.printME()
u2.printME()