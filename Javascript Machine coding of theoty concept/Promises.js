// Example: Simulating an asynchronous operation using a promise

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const data = { id: 1, name: 'John Doe', age: 30 };
        // Resolve the promise with the data
        resolve(data);
        // Reject the promise with an error
        reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  }
  
  // Using the promise
  fetchData()// calling the function
    .then((data) => {
      console.log('Data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  //-----------------------------------------------------------------------------------------------///
// Using Promise.all

function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User Name")
        },2000);
        
    });
}

function fetchDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User details")
        },2000);
        
    });
}

function fetchComment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User Comments")
        },2000);
        
    });
}

Promise.all([fetchUser(),fetchDetails(),fetchComment()])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log('Error: ',error)
})
///----------------------------------------------------------------------------------------/////


