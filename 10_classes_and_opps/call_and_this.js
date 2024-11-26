function setUsername(uname){
    this.uname = uname
}   

function createUser(uname, pass){
    setUsername.call(this, uname)
    this.pass = pass
}  

const u1 = new createUser('chai', 'pass')
console.log(u1)