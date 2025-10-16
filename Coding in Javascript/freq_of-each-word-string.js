function solve(ar){
    const freq={};

    arr.forEach((it)=>{
        freq[it]=(freq[it] || 0) +1;
    })

    // for(const it in freq){
    //     if(freq[it]>1){
    //         console.log(`${key} → ${freq[key]} times`);
    //     }
    // }

    return freq;
}
const arr = [1, 2, 2, 3, 1, 4, 2, 3];
const ans=solve(arr);
console.log(ans);



