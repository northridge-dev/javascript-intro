import { expect } from "chai";
import { testArray } from "./source.js";

it("testArray is an array", function () {
  expect(Array.isArray(testArray)).to.be.true;
});
it("testArray has 5 items", function () {
  expect(testArray.length).to.equal(5);
});
it("the first item is a number", function () {
  expect(testArray[0]).to.be.a("number");
});
it("the fourth item is a string", function () {
  expect(testArray[3]).to.be.a("string");
});
it("the last item is a boolean", function () {
  expect(testArray[4]).to.be.a("boolean");
});
