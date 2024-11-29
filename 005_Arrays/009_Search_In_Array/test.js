import { expect } from "chai";
import { exactlyOnce } from "./source.js";

it("exactlyOnce is a function", function () {
  expect(exactlyOnce).to.be.a("function");
});
it("exactlyOnce returns true if value is in array once", function () {
  const testArray = ["a", "b", "c"];
  expect(exactlyOnce(testArray, "a")).to.be.true;
});
it("exactlyOnce returns false if value is not in array", function () {
  const testArray = ["a", "b", "c"];
  expect(exactlyOnce(testArray, "d")).to.be.false;
});
it("exactlyOnce returns false if value is in array more than once", function () {
  const testArray = ["a", "a", "c"];
  expect(exactlyOnce(testArray, "a")).to.be.false;
});
