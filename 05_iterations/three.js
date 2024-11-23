// for of 

// on Array
const arr = [1, 2, 3, 4, 5, 6]
for(const num of arr){
    console.log(num)
}

const s1 = "Hello"
for(const num of s1){
    console.log(num)
}


// Map
const map = new Map()
map.set('IN', 'India')
map.set('Fr', 'France')
for(const [key, value] of map){
    console.log(key,':-',value)
}


const obj1 = {
    'IN': 'India',
    'Fr': 'France'
}
for(const key in obj1){
    console.log(key,':-',obj1[key])
}

for(const key in arr){
    console.log(key,':-',arr[key])
}