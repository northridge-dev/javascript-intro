import { expect } from "chai";
import { topSecret } from "./source.js";

it("topSecret is a function", function () {
  expect(topSecret).to.be.a("function");
});
it("topSecret replaces the correct element with 'CLASSIFIED'", function () {
  const testArray = ["z", "y", "x", "w", "v"];
  const testIndex = 2;
  const result = topSecret(testArray, testIndex);
  expect(result).to.equal(testArray);
  expect(result).to.deep.equal(["z", "y", "CLASSIFIED", "w", "v"]);
});
