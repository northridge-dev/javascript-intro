import { expect } from "chai";
import { add } from "./source.js";

it("add is a function", function () {
  expect(add).to.be.a("function");
});
it("add correctly adds a list of numbers", function () {
  expect(add([1, 2, 3, 4, 5])).to.equal(15);
  expect(add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(55);
});
it("add correctly handles an empty list", function () {
  expect(add([])).to.equal(0);
});
