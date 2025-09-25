function sum(...args){
    return args.reduce((a,b)=>a+b,0)
    // args[0]*args[1]
}

function square(a){
     return a*a
}

// generic composition function
const compose=function(fn1 ,fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    };
}

// composing unlimited function

const compose2=(...fns)=>{

    return function(...values){// accempting parameter of type array
       return fns.reduceRight((a,b)=>b(a),values);// we are using reduceRight as we are going from right to 
        // means we are traversing in a reverse order
    };

}

const task=compose(sum,square)
console.log(task(2,3))

const task2=compose2(sum,square)
console.log(task2(2,3))

