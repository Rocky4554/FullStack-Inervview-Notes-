//handling above difficulty by  callback functions

// const datass =[{name:'Raunak',roll:45},
//                         {name:'Muskan',roll:56}];

// function getDatass(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//                 output +=`<li>${data.name}</li>`
//         });
//         console.log(output)        
//     },1000);
// }

// function createdatas(newdata,callback){
//     setTimeout(()=>{
//         datas.push(newdata)
//         console.log("After using callback: ")
//         callback()
//     },2000);
// }


// // getDatas();

// createdatas({name:'Rocky',roll:67},getDatass);

// // now handling with the help of a Promise


// const datasss =[{name:'Raunak',roll:45},
//                         {name:'Muskan',roll:56}];

// function getDatasss(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//                 output +=`<li>${data.name}</li>`
//         });
//         console.log(output)        
//     },1000);
// }

// function createdatass(newdata,callback){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let error=false;
//             datas.push(newdata)
//             if(!error){
//                 resolve()
//             }
//             else{
//                 reject("There is some error")
//             }
//         },2000);
//     })
  
// }

// createdatass({name:'Rocky',roll:67}).then(getDatasss).catch((err)=>console.log(err))