import { expect } from "chai";
import { getLastElement } from "./source.js";

it("getLastElement is a function", function () {
  expect(getLastElement).to.be.a("function");
});
it("getLastElement returns the last element in the input array", function () {
  expect(getLastElement([1, 2, 3, 4])).to.eql(4);
  expect(getLastElement(["z", "y", "x"])).to.eql("x");
});
