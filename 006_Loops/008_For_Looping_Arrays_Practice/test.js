import { expect } from "chai";
import { multiply } from "./source.js";

it("multiply is a function", function () {
  expect(multiply).to.be.a("function");
});
it("multiply correctly multiplies a list of numbers", function () {
  expect(multiply([1, 2, 3, 4, 5])).to.equal(120);
  expect(multiply([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(3628800);
});
