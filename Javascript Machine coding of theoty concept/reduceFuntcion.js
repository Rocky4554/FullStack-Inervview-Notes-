const arr=[1,2,4,2,3]

function sum(arr){
let sum=0;
for(let i=0;i<arr.length;i++){
    sum += arr[i]
}
return sum
}

const output=arr.reduce(function(acc,curr){//
    acc=acc+curr
    return acc
},0);

const output1=arr.reduce(function(acc,curr){
    if(acc<curr){
        acc=curr
    }
    return acc
},0);

console.log(output)
console.log(output1)