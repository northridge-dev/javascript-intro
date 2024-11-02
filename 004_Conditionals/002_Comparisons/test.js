import { expect } from "chai";
import { shouldBeTrue, shouldBeFalse } from "./source.js";

it("shouldBeTrue and shouldBeFalse are Booleans", function () {
  expect(shouldBeTrue).to.be.a("boolean");
  expect(shouldBeFalse).to.be.a("boolean");
});
it("shouldBeTrue is true", function () {
  expect(shouldBeTrue).to.be.true;
});
it("shouldBeFalse is false", function () {
  expect(shouldBeFalse).to.be.false;
});
