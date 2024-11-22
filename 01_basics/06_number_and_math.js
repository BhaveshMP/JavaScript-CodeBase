let score = 400.128456
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(score.toFixed(4))

console.log(score.toPrecision(5))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


console.log('************ MATH *******')

console.log(Math.abs(-5))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.6))
console.log(Math.min(4,6))
console.log(Math.max(4,6))

console.log(Math.random())
console.log(Math.random() * 10)

// random num between 30 - 40

let min = 30
let max = 50
console.log(Math.random() * (max - min + 1) + min)
