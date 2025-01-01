import { expect } from "chai";
import { teamsByCity } from "./source.js";

it("teamsByCity.Chicago stores ['Cubs', 'White Sox']", function () {
  expect(teamsByCity.Chicago).to.have.same.members(["Cubs", "White Sox"]);
});
it("teamsByCity['Kansas City'] stores 'Royals'", function () {
  expect(teamsByCity["Kansas City"]).to.equal("Royals");
});
