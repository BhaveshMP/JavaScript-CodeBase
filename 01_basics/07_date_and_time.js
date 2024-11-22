let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let date1 = new Date(2024, 10 , 6, 20, 43 )
console.log(date1.toLocaleString())

let date2 = new Date("2024-11-21")

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myDate.getTime())

console.log(Math.floor(Date.now()/1000))

let date3 = new Date()
console.log(date3)
console.log(date3.getMonth() + 1)