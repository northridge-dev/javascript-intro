import { expect } from "chai";
import { subtract } from "./source.js";

it("subtract is a function", function () {
  expect(subtract).to.be.a("function");
});
it("subtract subtracts the second input from the first", function () {
  expect(subtract(0, 5)).to.equal(-5);
});
