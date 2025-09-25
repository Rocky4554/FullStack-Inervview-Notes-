const arr=[1,2,3,4]

function odd(x){
    if(x%2!=0) return true
}

const output=arr.filter(odd);// here we are filtering the array based on some parameter
const output1=arr.filter((x)=>{
    return (x%2!=0)
})
console.log(output)
console.log(output1)