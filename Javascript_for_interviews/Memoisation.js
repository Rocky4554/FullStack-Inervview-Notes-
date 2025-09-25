// Memoisation is a optimasation techinique to save the output of a fuction as a cache so we don't have to 
//call the function again and again

let sum = 0;
const calc = (n) => {
  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
};


const memoise=(fun)=>{
    let cache={}
    return function(...args){
        let n=args[0]
        if(n in cache){// this is not a for loop
            console.log("cache")
            console.log(cache)
            return cache[n]
        }
        else{
            console.log("Calculating first time")
            let result=fun.apply(this,args)
            cache[n]=result
            return result;
        }
    }
}
// console.time();
// console.log(calc(10));
// console.timeEnd();

console.time()
const ans= memoise(calc);
console.log(ans(10))
console.timeEnd()


console.time()
console.log(ans(10))
console.timeEnd()