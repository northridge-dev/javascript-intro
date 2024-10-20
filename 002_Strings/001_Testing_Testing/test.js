import { expect } from "chai";
import { smallestPerfectNumber, favoriteNumber } from "./source.js";

it("correctly stores smallest perfect number", function () {
  expect(smallestPerfectNumber).to.equal(6);
});
it("`favoriteNumber` is a number", function () {
  expect(favoriteNumber).to.be.a("number");
});
