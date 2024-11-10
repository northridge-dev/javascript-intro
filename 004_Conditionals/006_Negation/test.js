import { expect } from "chai";
import { isValidVariableName } from "./source.js";

it("isValidVariableName is a function", function () {
  expect(isValidVariableName).to.be.a("function");
});
it("returns false if input begins with a number (0-9)", function () {
  expect(isValidVariableName("0test")).to.be.false;
});
it("returns true if input does not begin with a number", function () {
  expect(isValidVariableName("test0")).to.be.true;
});
