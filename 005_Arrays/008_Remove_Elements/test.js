import { expect } from "chai";
import { removeLast } from "./source.js";

it("removeLast is a function", function () {
  expect(removeLast).to.be.a("function");
});
it("removeLast returns the last item in the array", function () {
  const testArray = ["a", "b", "c"];
  const lastItem = removeLast(testArray);
  expect(lastItem).to.equal("c");
});
it("removeLast removes the last item from the array", function () {
  const testArray = ["a", "b", "c"];
  removeLast(testArray);
  expect(testArray).to.deep.equal(["a", "b"]);
});
