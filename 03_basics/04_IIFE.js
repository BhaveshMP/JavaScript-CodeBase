// Inmmediately Invoked Function Expression (IIFE)
// to remove global scope or declaration pollution

// function chai(){
//     console.log("DB CONNECTED 1")
// }
// chai();

//name IIFE
(function chai(){
    console.log("DB CONNECTED 1")
})();
// ; tell code editor to end code

//uname IIFE
((name) => {
    console.log("DB CONNECTED 2: " + name)
})('om')

// ()() - function def & execution