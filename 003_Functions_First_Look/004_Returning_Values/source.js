function capitalize(word) {
  const firstLetter = word[0];
  const capitalized = firstLetter.toUpperCase() + word.slice(1);
}

console.log(capitalize("javascript"));
