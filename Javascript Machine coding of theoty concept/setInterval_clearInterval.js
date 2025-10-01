//this function repeteadly call the function after the given set of interval
let a=0;
// setInterval(() => {
//     a=a+10
//     console.log(a)
// }, 2000);

// it will print 20,30,40.......

// how to destroy setInterval using clearInterval

let increase=setInterval(counter,2000);

function counter(){
    a=a+10
    
    if(a==50){ 
        clearInterval(increase)
    }else{
        console.log(a)
    }

}