function strangeAddition(arr) {
  // -- DO NOT CHANGE --
  if (arr.length < 2) {
    return "Whoops! You need at least two numbers to add together.";
  }
  if (arr.length === 2) {
    return arr[0] + arr[1];
  }

  // write your code here
}

const numsToAdd = [1, 2, 3, 4, 5];
const firstResult = strangeAddition(numsToAdd);
console.log("first result: ", firstResult); // [6, 2, 3, 4]

const secondResult = strangeAddition(firstResult);
console.log("second result: ", secondResult); // [10, 2, 3]

const thirdResult = strangeAddition(secondResult);
console.log("third result: ", thirdResult); // [13, 2]

const fourthResult = strangeAddition(thirdResult);
console.log("fourth result: ", fourthResult); // 15
