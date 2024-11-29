import { expect } from "chai";
import { strangeAddition } from "./source.js";

it("strangeAddition is a function", function () {
  expect(strangeAddition).to.be.a("function");
});
it("strangeAddition removes the last number, adds it to the first number, and returns the shortened array", function () {
  expect(strangeAddition([5, 2, 1, 4])).to.deep.equal([9, 2, 1]);
});
it("strangeAddition can be called repeatedly to sum a list of numbers", function () {
  let testArray = [5, 2, 1, 4, 7];
  let sum = testArray.reduce((a, b) => a + b);
  while (Array.isArray(testArray)) {
    testArray = strangeAddition(testArray);
  }
  expect(testArray).to.equal(sum);
});
