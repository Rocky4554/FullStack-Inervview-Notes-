let arr=[["john",20],
        ["john",20],
        ["john",20]
    ]
    
    // console.log(arr[0][0]);  // it will print john
    // console.log(arr[0]);  // it will print [john, 20]

    // arr.forEach(data=>{// using forEach loop
    //     data.forEach(val=>{
    //         console.log(val);
            
    //     })
    // })

    //using for of 
    for(let i of arr){
        for (let j of i){
            console.log(j);
            
        }
    }
