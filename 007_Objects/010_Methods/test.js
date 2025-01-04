import { expect } from "chai";
import { team } from "./source.js";

it("team.count is a method", function () {
  expect(team.count).to.be.a("function");
});

it("team.count returns the number of players on the roster", function () {
  const originalCount = team.count();
  team.addPlayer("test player");
  team.addPlayer("another player");
  expect(team.count()).to.equal(originalCount + 2);
});
