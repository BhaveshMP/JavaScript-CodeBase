const a1 = [1, 2, 3, 4, 5]
const a2 = [2, 4, 6, 8]

const a3 = ['a','b','c']

console.log(typeof a1)
console.log(typeof a2)

console.log(a1)
console.log(a1[2])

a1.push(6)
a1.push(7)
a1.pop()
console.log(a1)
a1.unshift(0)
a1.shift()
console.log(a1)

console.log(a1.indexOf(2))
console.log(a1.includes(5))

console.log(a1.length)

const newArr = a1.join("-")
console.log(newArr)

console.log(a1.slice(1,3))
console.log(a1.splice(1,3))
console.log(a1)

