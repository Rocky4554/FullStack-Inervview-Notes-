const radius=[1,2,3,4]
const  area=(radius)=>{//callback function(as called by another function) 
    return Math.PI * radius * radius
} 

const diameter=(radius)=>{
    return 2 * radius
}

const calculate=(radius,logic)=>{//it is high order function(calling another function as parameter)
    const ans=[]
    for(let i=0;i<radius.length;i++) {
        ans.push(logic(radius[i]))
    }
    return ans
}
// our version of map function 
Array.prototype.calculate=(logic)=>{//it is high order function(calling another function as parameter)
    const ans=[]
    for(let i=0;i<this.length;i++) {
        ans.push(logic(this[i])) 
    }
    return ans
}
console.log(radius.map(area))// map or reduce array to another array based on some logic
console.log(radius.calculate(area))
console.log(calculate(radius,area))
console.log(calculate(radius,diameter))