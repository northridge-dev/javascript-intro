import { expect } from "chai";
import { emptyString, text, upperCase, sentence } from "./source.js";

it("`emptyString` is an empty string", function () {
  expect(emptyString).to.be.a("string");
  expect(emptyString).to.be.empty;
});
it("`text` is a string that contains at least 10 and no more than 20 characters", function () {
  expect(text).to.be.a("string");
  expect(text.length).to.be.within(10, 20);
});
it("`upperCase` is a string that contains only uppercase letters", function () {
  expect(upperCase).to.be.a("string");
  expect(upperCase.toUpperCase()).to.equal(upperCase);
});
it("`sentence` is a string that contains exactly 10 words", function () {
  expect(sentence).to.be.a("string");
  expect(sentence.split(" ").length).to.equal(10);
});
