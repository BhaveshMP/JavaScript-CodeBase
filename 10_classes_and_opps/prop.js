class User{
    constructor(uname){
        this.uname = uname
    }

    logMe(){
        console.log("Username: ",this.uname)
    }
    //no object can access it
    static createId(){
        return 123
    }
}

const u1 = new User("raj")
console.log(User.createId())