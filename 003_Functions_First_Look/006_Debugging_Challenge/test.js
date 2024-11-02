import { expect } from "chai";
import { capitalize } from "./source.js";

it("capitalize is a function", function () {
  expect(capitalize).to.be.a("function");
});
it("capitalize returns a capitalized string", function () {
  expect(capitalize("testing")).to.equal("Testing");
  expect(capitalize("aNother")).to.equal("ANother");
});
