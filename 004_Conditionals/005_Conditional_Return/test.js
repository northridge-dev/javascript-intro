import { expect } from "chai";
import { isValidPassword } from "./source.js";

it("isValidPassword is a function", function () {
  expect(isValidPassword).to.be.a("function");
});
it("returns false if input has fewer than 8 letters", function () {
  expect(isValidPassword("short")).to.be.false;
});
it("returns true if input has 8 or more letters", function () {
  expect(isValidPassword("moreThanEightChars")).to.be.true;
});
