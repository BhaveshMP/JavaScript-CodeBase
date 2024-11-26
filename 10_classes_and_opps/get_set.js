class User{
    constructor(uname, pass){
        this.pass = pass
        this.uname = uname
    }

    get pass(){
        return this._pass
    }
    set pass(val){
        this._pass = val
    }
}

const u1 = new User("Bhavesh","Admin")
console.log(u1.pass)