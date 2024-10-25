import { expect } from "chai";
import {
  index_of_Once,
  index_of_time,
  index_of_p,
  index_of_first_space,
} from "./source.js";

let beginning = "Once upon a time...";

it("correct index of 'Once'", () => {
  expect(index_of_Once).to.equal(beginning.indexOf("Once"));
});
it("correct index of 'time'", () => {
  expect(index_of_time).to.equal(beginning.indexOf("time"));
});
it("correct index of 'p'", () => {
  expect(index_of_p).to.equal(beginning.indexOf("p"));
});
it("correct index of first space", () => {
  expect(index_of_first_space).to.equal(beginning.indexOf(" "));
});
