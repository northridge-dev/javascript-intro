import { expect } from "chai";
import { keyValSwap } from "./source.js";

function validateKeyValSwap(obj) {
  const swapped = {};
  for (const key in obj) {
    swapped[obj[key]] = key;
  }

  return swapped;
}

it("keyValSwap swaps the keys and values of the input object", function () {
  const testObj = { a: 1, b: 2, c: 3 };
  expect(keyValSwap(testObj)).to.deep.equal(validateKeyValSwap(testObj));

  const testObj2 = { a: "apple", b: "banana", c: "cherry" };
  expect(keyValSwap(testObj2)).to.deep.equal(validateKeyValSwap(testObj2));
});
