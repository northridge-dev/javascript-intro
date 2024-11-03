import { expect } from "chai";
import { input, hasAn } from "./source.js";

it("input is a string", function () {
  expect(input).to.be.a("string");
});
it("hasAn is a Boolean", function () {
  expect(hasAn).to.be.a("boolean");
});
it("values for input and hasAn match", function () {
  if ("aeiouAEIOU".includes(input[0])) {
    expect(hasAn).to.be.true;
  } else {
    expect(hasAn).to.be.false;
  }
});
