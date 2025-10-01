// valure are retained in closure
console.log("Raunak");
var result=function ans(n){
    console.log(n)
    // var sum=n
    return function(){     
        return ++n;
    }
}
var disc=result(10)
console.log(disc());
console.log(result(10));


var sum=function(a,b,c){
    return {
        getsum:function(){
            return a+b;
        },
        getsum2:function(){
            return a+b+c;
        }
    }
}
// var store=sum(2,3,4)
// console.log(store.getsum());
// console.log(store.getsum2());

var createCounter=function(a){
    copy=a
    return{
        ans:()=>{
            return ++copy
        },
        ans1:()=>{
            return copy=a
        },
        ans2:()=>{
            return --copy
        }
    }
}

var input=createCounter(2)
console.log(input.ans())
console.log(input.ans1())
console.log(input.ans2())

//calling a function in another function is called closure with its lexoscopic environment



