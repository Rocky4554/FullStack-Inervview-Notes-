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