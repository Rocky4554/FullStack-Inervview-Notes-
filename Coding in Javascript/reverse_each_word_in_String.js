const str="I am Raunak";

const str2=str.split(" ").reverse().map((it)=>{
    return it.split("").reverse().join("");
    
}).join(" ");

console.log(str2);