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