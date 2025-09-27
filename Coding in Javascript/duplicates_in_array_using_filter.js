// using filter method 
const array = [1, 'A', 2, 1, 'B', 2, 'A'];
const seen = new Set();

const filtered=array.filter(it=>{
if(seen.has(it)){
    return true;
}
else{
    seen.add(it);
    return false;
}
})

console.log(filtered);