const coding = ['js', 'java','ruby','python','cpp' ]

coding.forEach(function (val){
    console.log(val);
})

coding.forEach((val)=>{
    console.log(val);
})
console.log("*******************")

function printMe(item, index, arr){
    console.log(item)
    console.log(index)
    console.log(arr)
}
coding.forEach(printMe)


arr1 = [
    {
        id: 101,
        pass: "admin"
    },
    {
        id: 102,
        pass: "admin"
    },
    {
        id: 103,
        pass: "admin"
    }
]

arr1.forEach((element,index,arr) => {
    console.log(element.id, ":",element.pass)
});