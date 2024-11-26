class User{
    constructor(uname, email, pass){
        this.uname = uname
        this.email = email
        this.pass = pass
    }

    encryptPass(){
        return this.pass + "abc"
    }

}

const chai = new User("chai", "chai@fb.com","admin")
console.log(chai.encryptPass())
cons

// behind the scent
function User2(uname, email, pass){
    this.uname = uname
    this.email = email
    this.pass = pass
}
User2.prototype.encryptPass = function(){
    return this.pass + "abc"
}

