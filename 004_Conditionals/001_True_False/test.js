import { expect } from "chai";
import { isRaining, isTuesday, isCodingRad } from "./source.js";

it("isRaining is a Boolean", function () {
  expect(isRaining).to.be.a("boolean");
});
it("isTuesday is a Boolean", function () {
  expect(isTuesday).to.be.a("boolean");
});
it("codingIsFun is a Boolean", function () {
  expect(isCodingRad).to.be.a("boolean");
});
