//using accumulator

const array = [1, 'A', 2, 1, 'B', 2, 'A'];

const reduced = array.reduce((acc,item)=>{
    acc[item]=(acc[item] || 0)+1;
    return acc;
},{});

const ans= Object.keys(reduced).filter((it)=>reduced[it]>1);
console.log(ans);

// reduce goes through each element of array.

// accumulator starts as {} (empty object).

// At each step:

// If the item doesn’t exist in accumulator, (accumulator[item] || 0) gives 0.

// Then it adds 1.


// const reduced={ 1: 2, A: 2, 2: 2, B: 1 }
 // here acc[item] means the values of the keys 


// | Step | Current `item` | Accumulator Before           | Operation Performed  | Accumulator After            |
// | ---- | -------------- | ---------------------------- | -------------------- | ---------------------------- |
// | 1    | `1`            | `{}`                         | `acc[1] = (0) + 1`   | `{ 1: 1 }`                   |
// | 2    | `'A'`          | `{ 1: 1 }`                   | `acc['A'] = (0) + 1` | `{ 1: 1, A: 1 }`             |
// | 3    | `2`            | `{ 1: 1, A: 1 }`             | `acc[2] = (0) + 1`   | `{ 1: 1, A: 1, 2: 1 }`       |
// | 4    | `1`            | `{ 1: 1, A: 1, 2: 1 }`       | `acc[1] = (1) + 1`   | `{ 1: 2, A: 1, 2: 1 }`       |
// | 5    | `'B'`          | `{ 1: 2, A: 1, 2: 1 }`       | `acc['B'] = (0) + 1` | `{ 1: 2, A: 1, 2: 1, B: 1 }` |
// | 6    | `2`            | `{ 1: 2, A: 1, 2: 1, B: 1 }` | `acc[2] = (1) + 1`   | `{ 1: 2, A: 1, 2: 2, B: 1 }` |
// | 7    | `'A'`          | `{ 1: 2, A: 1, 2: 2, B: 1 }` | `acc['A'] = (1) + 1` | `{ 1: 2, A: 2, 2: 2, B: 1 }` |
