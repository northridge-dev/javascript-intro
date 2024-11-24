import { expect } from "chai";
import { swap } from "./source.js";

it("swap is a function", function () {
  expect(swap).to.be.a("function");
});
it("swap swaps the first and last elements", function () {
  const testArray = ["z", "y", "x", "w", "v"];
  const testArrayCopy = testArray.slice();
  const result = swap(testArrayCopy);

  expect(result[0]).to.equal(testArray[testArray.length - 1]);
  expect(result[result.length - 1]).to.equal(testArray[0]);
  expect(result.slice(1, result.length - 1)).to.deep.equal(
    testArray.slice(1, testArray.length - 1),
  );
});
