const arr=[1,2,3,4]

const double=(x)=>{
   return 2*x
}

const output=arr.map(double)// doubling the value of array
const output1=arr.map((x)=>{ // another way of writing it
    return 2*x})

console.log(output)
console.log(output1)