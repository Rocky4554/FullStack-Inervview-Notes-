const datas =[{name:'Raunak',roll:45},
                        {name:'Muskan',roll:56}];

function getDatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
                output +=`<li>${data.name}</li>`
        });
           console.log(output)     
    },1000);
}

function createdata(newdata) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        datas.push(newdata);
        resolve();
      }, 2000);
    });
  }

async function start(){
    await createdata({name:"Rocky",roll:56})// await stops all the remaining function until it is finished
    getDatas()                               // it only works with async 
}

start()
