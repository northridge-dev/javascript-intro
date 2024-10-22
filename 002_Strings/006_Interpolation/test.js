import { expect } from "chai";
import { mathFact, sentence } from "./source.js";

it("`mathFact` correctly reports the difference", function () {
  expect(mathFact).to.equal(`43,329 minus 5,424 equals ${43329 - 5424}.`);
});
it("`sentence` is correct", function () {
  expect(sentence).to.equal(
    "The Hobbit, by J.R.R. Tolkien, is a story about Bilbo Baggins.",
  );
});
