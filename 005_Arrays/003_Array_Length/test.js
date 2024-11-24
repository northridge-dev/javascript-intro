import { expect } from "chai";
import { shorterList, longerList } from "./source.js";

it("shorterList is an array", function () {
  expect(Array.isArray(shorterList)).to.be.true;
});
it("longerList is an array", function () {
  expect(Array.isArray(longerList)).to.be.true;
});
it("shorterList is shorter than LongerList by three elements", function () {
  expect(longerList.length - shorterList.length).to.equal(3);
});
