const obj = {
  name: "Raunak",
  age: 24,
};

const arr = Object.keys(obj).reduce((acc, curr) => {
  acc.push(obj[curr]);
  return acc;
}, []); // ✅ start with empty array, not {}

console.log(arr); // ✅ print arr, not acc
