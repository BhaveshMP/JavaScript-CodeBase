const myNums = [1, 2, 3, 4, 5]

const newNums = myNums.map(n => n+10)
console.log(newNums)

const newNums2 = myNums
.map( (n) => n * 10)
.map( (n) => n + 1)
.filter( (n) => n >= 40)
console.log(newNums2)