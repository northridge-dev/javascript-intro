import { expect } from "chai";
import { giveMeFive } from "./source.js";

it("giveMeFive is a function", function () {
  expect(giveMeFive).to.be.a("function");
});
it("giveMeFive gives me 5", function () {
  expect(giveMeFive()).to.equal(5);
});
