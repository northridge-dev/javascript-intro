import { expect } from "chai";
import { calculateGrade } from "./script-test.js";

it("calcualteGrade is a function", function () {
  expect(calculateGrade).to.be.a("function");
});
it("converts 99 to A+", function () {
  expect(calculateGrade(99)).to.equal("A+");
});
it("converts 93 to A-", function () {
  expect(calculateGrade(93)).to.equal("A-");
});
it("converts 85 to B-", function () {
  expect(calculateGrade(85)).to.equal("B-");
});
it("converts 80 to C", function () {
  expect(calculateGrade(80)).to.equal("C");
});
it("converts 76 to D+", function () {
  expect(calculateGrade(76)).to.equal("D+");
});
it("converts 68 to F", function () {
  expect(calculateGrade(68)).to.equal("F");
});
it("converts 0 to F", function () {
  expect(calculateGrade(0)).to.equal("F");
});
