import { expect } from "chai";
import { index_of_seventh_e, index_of_eleventh_e } from "./source.js";

let phrase = "experienced engineers excelled effortlessly";
let indexes = [];
phrase.split("").forEach((char, index) => {
  if (char === "e") indexes.push(index);
});

it("correct index of 7th 'e'", () => {
  expect(index_of_seventh_e).to.equal(indexes[6]);
});
it("correct index of 11th 'e'", () => {
  expect(index_of_eleventh_e).to.equal(indexes[10]);
});
