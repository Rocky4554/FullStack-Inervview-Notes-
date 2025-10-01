const datas = [
  { name: "Raunak", roll: 45 },
  { name: "Muskan", roll: 56 },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.roll}</li>`;
    });
    console.log(output);
  }, 1000);
}

function createdata(newdata) {
  setTimeout(() => {
    datas.push(newdata);
  }, 2000);
}

getDatas();

createdata({ name: "Rocky", roll: 67 });

//The code you've written demonstrates the use of setTimeout to simulate asynchronous behavior. However, 
//there's a timing issue: the getDatas function logs the output after 1 second, but the createdata function 
// adds the new data after 2 seconds. This means that when getDatas runs, the new data ({name: 'Rocky', roll: 67}) 
// hasn't been added to the datas array yet.

//To ensure that getDatas logs the updated list after the new data is added, you can use a callback, 
// a promise, or async/await. Here's how you can modify the code using a callback function ,Promises and async/await://

// //handling above difficulty by  callback functions

const datass = [
  { name: "Raunak", roll: 45 },
  { name: "Muskan", roll: 56 },
];

function getDatass() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    console.log(output);
  }, 1000);
}

function createdatas(newdata, callback) {
  setTimeout(() => {
    datas.push(newdata);
    console.log("After using callback: ");
    callback();
  }, 2000);
}

// getDatas();

createdatas({ name: "Rocky", roll: 67 }, getDatass);

// now handling with the help of a Promise

const datasss = [
  { name: "Raunak", roll: 45 },
  { name: "Muskan", roll: 56 },
];

function getDatasss() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    console.log(output);
  }, 1000);
}

function createdatass(newdata, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      datas.push(newdata);
      if (!error) {
        resolve();
      } else {
        reject("There is some error");
      }
    }, 2000);
  });
}

createdatass({ name: "Rocky", roll: 67 })
  .then(getDatasss)
  .catch((err) => console.log(err));


  // handling with the help of using async/await

  const datas = [
    { name: 'Raunak', roll: 45 },
    { name: 'Muskan', roll: 56 }
];

function getDatas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let output = "";
            datas.forEach((data) => {
                output += `<li>${data.roll}</li>`;
            });
            console.log(output);
            resolve();
        }, 1000);
    });
}

function createdata(newdata) {
    return new Promise((resolve) => {
        setTimeout(() => {
            datas.push(newdata);
            resolve();
        }, 2000);
    });
}

// Execute in sequence using async/await
async function main() {
    await createdata({ name: 'Rocky', roll: 67 });
    await getDatas();
}

main();

/////----------------------------------------------------------------------------------------//////
