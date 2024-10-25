import { expect } from "chai";
import { word } from "./source.js";

it("should include the letter 'o'", () => {
  expect(word.includes("o")).to.be.true;
});
it("should NOT include the letter 's'", () => {
  expect(word.includes("s")).to.be.false;
});
it("should include the letter combination 'th'", () => {
  expect(word.includes("th")).to.be.true;
});
it("should NOT include the letter combination 'ing'", () => {
  expect(word.includes("ing")).to.be.false;
});
it("should include a capital 'N'", () => {
  expect(word.includes("N")).to.be.true;
});
