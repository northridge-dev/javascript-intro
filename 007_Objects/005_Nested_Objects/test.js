import { expect } from "chai";
import { president } from "./source.js";

it("president.birthplace.state should be 'Illinois'", function () {
  expect(president.birthplace.state).to.equal("Illinois");
});
