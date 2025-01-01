import { expect } from "chai";
import { schedule } from "./source.js";

it("schedule.second is 'Gym'", function () {
  expect(schedule.second.toLowerCase()).to.equal("gym");
});
it("schedule.third is 'Math'", function () {
  expect(schedule.third.toLowerCase()).to.equal("math");
});
