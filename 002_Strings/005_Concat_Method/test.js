import { expect } from "chai";
import { concatString } from "./source.js";

it("`concatString` matches the target sentence", function () {
  expect(concatString).to.equal(
    "Pablito the pugnacious platypus struts across the playa.",
  );
});
