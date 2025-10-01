// console.log("start")

// // setTimeout(()=>{
// //     console.log("Callback()")
// // },5000)

// function ab(){
//     console.log("Callback")
// }

// var call=setTimeout(ab,5000)// run only one time

// console.log("end")

// how to destroy set time out function
console.log("start")

function ab(){
    console.log("Callback")
}

var call=setTimeout(ab,5000)// run only one time

var cancel=clearTimeout(call)// callback will not be printed because the clearTimeout will cancel 
//the setTimeout function before 5000(5 secs) 

console.log("end")