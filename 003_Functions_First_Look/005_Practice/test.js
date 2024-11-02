import { expect } from "chai";
import { add, multiply, divide } from "./source.js";

it("add is a function", function () {
  expect(add).to.be.a("function");
});
it("add returns the sum of two numbers", function () {
  expect(add(123, 17)).to.equal(123 + 17);
});
it("multiply is a function", function () {
  expect(multiply).to.be.a("function");
});
it("multiply returns the product of two numbers", function () {
  expect(multiply(4, 5)).to.equal(4 * 5);
});
it("divide is a function", function () {
  expect(divide).to.be.a("function");
});
it("divide returns the quotient of two numbers", function () {
  expect(divide(15, 4)).to.equal(15 / 4);
});
