const alphabet = "abcdefghijklmnopqrstuvwxyz";

console.log("The first letter of the alphabet is: " + alphabet[0]);
console.log("The last letter of the alphabet is: " + alphabet[25]);
console.log(
  "The last letter of the alphabet is: " + alphabet[alphabet.length - 1],
);
console.log("The fourteenth letter of the alphabet is: " + alphabet[13]); // 13th index = 14th letter
console.log(
  "This is what happens if you ask for an index that does not exist: " +
    alphabet[26],
);
