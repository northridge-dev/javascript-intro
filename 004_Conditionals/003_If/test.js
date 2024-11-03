import { expect } from "chai";
import { validPassword, invalidPassword } from "./source.js";

function testPassword(password) {
  return password.length >= 8;
}

it("validPassword is a string", function () {
  expect(validPassword).to.be.a("string");
});
it("invalidPassword is a string", function () {
  expect(invalidPassword).to.be.a("string");
});
it("validPassword is 8 or more characters", function () {
  expect(testPassword(validPassword)).to.be.true;
});
it("invalidPassword is fewer than 8 characters", function () {
  expect(testPassword(invalidPassword)).to.be.false;
});
