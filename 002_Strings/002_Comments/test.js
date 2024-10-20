import { expect } from "chai";
import { firstName, favoriteColor } from "./source.js";

it("assigns a non-empty string to firstName", function () {
  expect(firstName).to.be.a("string");
  expect(firstName).not.to.be.empty;
});
it("assigns a non-empty string to favoriteColor", function () {
  expect(favoriteColor).to.be.a("string");
  expect(favoriteColor).not.to.be.empty;
});
