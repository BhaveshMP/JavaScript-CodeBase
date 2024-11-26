class User{
    constructor(uname){
        this.uname = uname
    }

    logMe(){
        console.log("Username: ",this.uname)
    }
}


class Teacher extends User{
    constructor(username, email,pass){
        super(username)
        this.email = email
        this.pass = pass
    }
}

const chai = new Teacher('chai','chai@fb.com', 'admin')
console.log(chai)
console.log(chai instanceof Teacher)