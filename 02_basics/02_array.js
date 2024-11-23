const marvel_heroes = ['hulk', 'vonda', 'vision', 'thor']
const dc_heroes = ['flash', 'superman', 'batman']


// marvel_heroes.push(dc_heroes)
const newArr = marvel_heroes.concat(dc_heroes)
console.log(newArr)
const all_new_heroes = [...dc_heroes, ...marvel_heroes]
console.log(all_new_heroes)

const mulDimArr = [1, 2, 3, [4, 5, [6, 7, 8]]]
console.log(mulDimArr)
console.log(mulDimArr.flat(Infinity))


console.log(Array.isArray("Bhavesh"))
console.log(Array.from("Bhavesh"))
console.log(Array.from({fname:"Bhavesh"}))

const score1 = 400
const score2 = 600
const score3 = 500

console.log(Array.of(score1, score2, score3))