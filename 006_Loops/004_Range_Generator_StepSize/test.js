import { expect } from "chai";
import { makeRange } from "./source.js";

it("makeRange is a function", function () {
  expect(makeRange).to.be.a("function");
});
it("makeRange generates a range with a stepSize of 1", function () {
  expect(makeRange(1, 5, 1)).to.deep.equal([1, 2, 3, 4, 5]);
  expect(makeRange(105, 109, 1)).to.deep.equal([105, 106, 107, 108, 109]);
});
it("makeRange generates a range with a stepSize of 2", function () {
  expect(makeRange(1, 6, 2)).to.deep.equal([1, 3, 5]);
});
it("makeRange generates a range with a stepSize of 3", function () {
  expect(makeRange(3, 33, 3)).to.deep.equal([
    3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33,
  ]);
});
