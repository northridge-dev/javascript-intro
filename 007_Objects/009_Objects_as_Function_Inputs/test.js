import { expect } from "chai";
import { lowercaseVals } from "./source.js";

it("lowercaseVals does not modify its input", function () {
  const testObject = { a: "A", b: "B", c: "C" };
  lowercaseVals(testObject);
  expect(testObject).to.deep.equal({ a: "A", b: "B", c: "C" });
});

it("lowercaseVals converts keys to lowercase", function () {
  const testObject = { a: "A", b: "B", c: "C" };
  expect(lowercaseVals(testObject)).to.deep.equal({ a: "a", b: "b", c: "c" });
});
