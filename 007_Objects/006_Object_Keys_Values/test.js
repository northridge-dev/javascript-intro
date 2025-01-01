import { expect } from "chai";
import { countKeys, countCharacters } from "./source.js";

function verifyCountKeys(obj) {
  return Object.keys(obj).length;
}

function verifyCountCharacters(obj) {
  let chars = 0;
  for (let value of Object.values(obj)) {
    if (typeof value === "string") {
      chars += value.length;
    }
  }

  return chars;
}

const testObj = {
  a: 1,
  b: "cat",
  c: "sat",
  d: [1, 2, 3],
  e: "on",
  f: "the",
  g: "mat",
};

it("countKeys returns the number of keys in an object", function () {
  expect(countKeys(testObj)).to.equal(verifyCountKeys(testObj));
});
it("countCharacters returns the count of characters in string values", function () {
  expect(countCharacters(testObj)).to.equal(verifyCountCharacters(testObj));
});
