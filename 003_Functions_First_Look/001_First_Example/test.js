import { expect } from "chai";
import { firstLetter } from "./source.js";

it("stores the result of getFirstLetter('javascript')", function () {
  expect(firstLetter).to.equal("j");
});
