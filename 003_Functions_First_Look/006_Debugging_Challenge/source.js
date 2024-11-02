function capitalize(word) {
  let first = word.charAt(1).toUpperCase();
  let capitalized = first.concat(word.slice(0));

  return capitalized;
}

console.log(capitalize("test"));
