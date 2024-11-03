let noun = "";
let firstLetter = noun[0];

// remember the `includes` method returns a Boolean
//   - `true` if firstLetter is a vowel (lower or upper case)
//   - `false` otherwise
let needsAn = "aeiouAEIOU".includes(firstLetter);

if (needsAn) {
  console.log(`Running the if block because needsAn is ${needsAn}`);
  noun = "an " + noun;
} else {
  console.log(`Running the else block because needsAn is ${needsAn}`);
  noun = "a " + noun;
}

console.log(`He set his glass of icy lemonade on ${noun}.`);
