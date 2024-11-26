// simple understandable 
const promiseFirst = new Promise(function(resolve, reject){
    
    setTimeout(()=>{
        console.log("Welcome!!!")
        resolve()
    },1000)
})

promiseFirst.then(function(){
    console.log("BACK !!!!!!!!")
})

// in one go
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("WELCOME!!!!!!!")
        resolve()
    },2000)
}).then(function(){
    console.log("BACK!!!!!!!")
})

// passing value
const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("HEllO !!!")
        let mess = "WORLD !!!"
        resolve(mess)
    },3000)
})
promiseThree.then(function(mess){
    console.log(mess)
})


// returning 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({uname : "admin", password:"pass"})
        }else{
            reject("Error: SOMETHING WENT WRONG")
        }
        console.log("HEY !!!!")
    },5000)
})

promiseFour
.then((obj)=>{
    return obj.uname
})
.then((objValue)=>{
    console.log(objValue)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("Finally END")
})


// using asyn
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({uname : "admin", password:"pass"})
        }else{
            reject("Error: SOMETHING WENT WRONG")
        }
        console.log("HEY !!!!!")
    },6000)
})

async function GetData(){
    try {
        const data = await promiseFive
        console.log(data.password)
    } catch (error) {
        console.log("Error: ",error)
    }
}
GetData()


// fetch

async function GetData2(){

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log("Error: ",error)
    }
}
// GetData2()

const res = fetch("https://jsonplaceholder.typicode.com/todos/")
res.then((data1)=>{
    let data = data1.json()
    return data
}).then((data2)=>{
    console.log(data2)
}).catch((error)=>{
    console.log("ERROR: ", error)
})