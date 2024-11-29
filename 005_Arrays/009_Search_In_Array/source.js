function exactlyOnce(arr, value) {
  // write your code here
}

const oneA = ["B", "C", "A", "B", "C"]; // exactlyOnce(oneA, "A") should return true
const noA = ["B", "C", "B", "C"]; // exactlyOnce(noA, "A") should return false
const multipleA = ["A", "B", "A", "C", "A", "D"]; // exactlyOnce(multipleA, "A") should return false

console.log(exactlyOnce(oneA, "A"));
