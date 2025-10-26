function solve(arr) {
  let l = -Infinity;
  let s = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) {
      s = l;
      l = arr[i];
    } else if (arr[i] > s && arr[i] < l) {
      s = arr[i];
    }
  }

  return s === -Infinity ? null : s;
}

const arr = [10, 5, 20, 8, 20, 15];
console.log(solve(arr)); 
