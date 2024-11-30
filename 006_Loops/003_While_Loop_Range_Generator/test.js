import { expect } from "chai";
import { makeRange } from "./source.js";

it("makeRange is a function", function () {
  expect(makeRange).to.be.a("function");
});
it("makeRange generates a range", function () {
  expect(makeRange(1, 5)).to.deep.equal([1, 2, 3, 4, 5]);
  expect(makeRange(105, 109)).to.deep.equal([105, 106, 107, 108, 109]);
});
