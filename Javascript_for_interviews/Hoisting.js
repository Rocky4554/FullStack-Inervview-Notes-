// here we are accessing variable and function before they are declared; 
console.log(x)
getname()// invoking the function
console.log(getname)


function getname(){
    console.log("Raunak")
}

var x=7;

////-----------------------------------------------------------------------------------------------------////

getname1()// it will give output as getname1 is not a function because it will treat getname as a variable
// in this case 

var getname1=()=>{
    console.log("Rocky")
}