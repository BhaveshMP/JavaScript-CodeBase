const nums = [1, 2, 3]

const total = nums.reduce(function(acc, currval){
    console.log(acc ,' ',currval)
    return acc + currval
}, 0)

console.log(total)

const total2 = nums.reduce((acc, val) => (acc+val),0)
console.log(total2)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartTotal = shoppingCart.reduce((acc, item) => (acc+item.price),0)
console.log(cartTotal)