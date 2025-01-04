const secretIdentities = {
  "Spider Man": "Peter Parker",
  Superman: "Clark Kent",
  Batman: "Bruce Wayne",
};

console.log("Before function: ", secretIdentities.Superman);

function lowercaseVals(obj) {
  for (const key in obj) {
    obj[key] = obj[key].toLowerCase();
  }

  return obj;
}

const result = lowercaseVals(secretIdentities);

console.log("After function: ", secretIdentities.Superman);
console.log("Result: ", result.Superman);
console.log("Same object? ", result === secretIdentities);
