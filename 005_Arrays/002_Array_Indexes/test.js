import { expect } from "chai";
import { testArray } from "./source.js";

it("testArray is an array", function () {
  expect(Array.isArray(testArray)).to.be.true;
});
it("testArray at index 2 is 42", function () {
  expect(testArray[2]).to.equal(42);
});
it("testArray at index 3 is 'hello'", function () {
  expect(testArray[3]).to.equal("hello");
});
it("testArray at index 0 is true", function () {
  expect(testArray[0]).to.equal(true);
});
it("testArray at index 1 to be undefined", function () {
  expect(testArray[1]).to.equal(undefined);
});
