
const form = document.querySelector("form")

const rnum = Math.floor((Math.random() * 10 + 1))
console.log(rnum)

const attempt = 10
const guesses = document.getElementById("guesses")
const lastResult = document.getElementById("lastResult")

form.addEventListener('submit',function(e){
    e.preventDefault()

    const num = parseInt(document.getElementById("guessField").value)
    attempt--
    if(num==rnum){
        console.log('win')
    }
})