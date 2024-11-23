//scope {}
// local and global scope

if(true){
    let a1 = 30
    const a2 = 30
    var a3 = 30
}
console.log(a3)// a2 and a1 cannot be print because they are declared in local scope

function one(){
    const name = "bhavesh"

    function two(){
        const website = "youtube"
        console.log(name)
    }

    // console.log(website)
    two()
}
one()

// ******** interesting ******
addOne(2)
function addOne(num){
    return num + 1
}

// addTwo(3)    //error 
const addTwo = function(num){
    return num + 2
}