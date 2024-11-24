const coding = ['js', 'java','ruby','python','cpp' ]

// return not possible in forEach
// const v = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = []
arr1.forEach(item => {
    if(item > 4){
        arr2.push(item)
    }
})
console.log(arr2)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNumns = nums.filter((num)=> { 
    return num>4
})
// const newNumns2 = nums.filter((num)=> num>4)
console.log(newNumns)

// data from dB
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let bFilter = books.filter(bk=> bk.genre === 'History')
bFilter.forEach(i => console.log(i.title ,' ',i.genre,' ',i.publish,' ',i.edition))

bFilter = books.filter(bk=> bk.publish > 2000)
console.log(bFilter)

bFilter = books.filter((bk)=> {
    return bk.publish > 1995 && bk.genre === 'History'})
console.log(bFilter)