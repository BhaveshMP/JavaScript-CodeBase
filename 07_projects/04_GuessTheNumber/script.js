
const form = document.querySelector("form")
const min = 1
const max = 100

const giveRandom = () => {
    return Math.floor(((Math.random() * (max - min)) + 1))
    }
let rnum = giveRandom() 
console.log('random num: ',rnum)

let attempt = 10

const winOrloose = document.querySelector(".lowOrHi")
let guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
let lastResultArr = []

console.log(attempt)

form.addEventListener('submit',function(e){
    e.preventDefault()

    const num = parseInt(document.getElementById("guessField").value)
    lastResultArr.push(num)
    attempt--
    console.log(attempt)
    guesses.innerHTML = lastResultArr
    lastResult.innerHTML = attempt

    let status = ""
    if(num==rnum || attempt == 0){ 
    
    if(num==rnum){
        status = 'WIN !!!!!!!!!!!'
    }else if(attempt == 0){
        status = 'LOSS ??????';
    }
        console.log(status)
        attempt = 10
        lastResult.innerHTML = 10
        guesses.innerHTML = ""
        lastResultArr = []
        rnum = giveRandom() 
        console.log('random num: ',rnum)
    }
    winOrloose.innerHTML = status
    
})