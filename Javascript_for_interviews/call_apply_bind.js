// const employee1 ={
//     name:"raunak",
//     roll:45,
//     designation:"software Engineer",
//     printdetails:function(){
//         console.log(this);
//     }
// }

// // employee.printdetails();

// // now we have the same employee as employee 2 with almost same details now we will use call function here

// const employee2 ={
//     name:"raunak",
//     roll:35,
//     designation:"software Engineer",
//     // printdetails:function(){   // why writing this extra line of code
//     //     console.log(this);
//     // }
// }
// // fuction borrowing
// employee.printdetails.call(employee2);// priting the details using this keyword of employee1;

const employee1 ={
    name:"raunak",
    roll:45,
    designation:"software Engineer",

}

const employee2 ={
    name:"raunak",
    roll:55,
    designation:"software Engineer",

}

const printdetails=function(){
    console.log(this);
}

printdetails.call(employee1);
printdetails.call(employee2);

// here we have created a common printing fuction of the objects and using it using call function 

////////// function borrowing //////////////

let name ={
    first:"Raunak",
    last:"Kumar",
    print:function(){
        console.log("My name is : " + this.first + " " + this.last);
    },
}

name.print();


let name2 ={
    first:"Rocky",
    last:"Kumar",
    }

 name.print.call(name2); // borrowing function print from the name and changing this here 


 ///////// use of apply ///

 let details ={
    first:"Raunak",
    last:"Kumar",
 }

const display=function(hometown , city ){
        console.log("My name is : " + this.first + " " + this.last + " from " + hometown + " , " + city);
    } 

let details2 ={
    first:"Rocky",
    last:"Kumar",
    }

 display.call(details2, "Bihar", "patna"); // borrowing function print from the name and changing this here 
 display.apply(details,["Bihar", "Patna"]); // apply as it takes input as array 

 ///////////// using bind ()//////

 let later =  display.bind(details2, "Bihar", "patna"); // stroing the function so that it an be used later using bind;
 later();
