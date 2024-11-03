function addArticle(input) {
  const firstLetter = input[0];

  if ("aeiouAEIOU".includes(firstLetter)) {
    return "an " + input;
  } else {
    return "a " + input;
  }
}

let nounWithArticle = addArticle("eagle");
console.log(`He set his glass of icy lemonade on ${nounWithArticle}.`);
