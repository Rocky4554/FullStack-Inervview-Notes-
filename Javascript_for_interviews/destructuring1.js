const grocerylist = [
    {item:"Apple",price:34,category:"fruits"},
    {item:"MAngoes",price:44,category:"fruits"},
    {item:"Potato",price:54,category:"vegetable"},
];

// console.log(ans);
//let ans = grocerylist[0].item;

// instead do this through object destructuring

const [{item,price   }]= grocerylist;
console.log(item,price);




