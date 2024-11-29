import { expect } from "chai";
import { addElements } from "./source.js";

it("addElements is a function", function () {
  expect(addElements).to.be.a("function");
});
it("addElements appends elements to the front and end of the array", function () {
  expect(addElements(["a", "b", "c"], "x", "y")).to.eql([
    "x",
    "a",
    "b",
    "c",
    "y",
  ]);
});
