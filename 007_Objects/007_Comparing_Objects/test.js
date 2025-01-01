import { expect } from "chai";
import { compareObjects } from "./source.js";

const obj1 = { name: "John", age: 25 };
const obj2 = { name: "John", age: 25 };
const obj3 = { name: "John", age: 26 };
const obj4 = { first: "John", age: 25 };
const obj5 = { name: "John", age: 25, city: "New York" };

it("compareObjects should return true if the objects match", function () {
  expect(compareObjects(obj1, obj2)).to.equal(true);
});
it("compareObjects should return false if the objects have the same keys but different values", function () {
  expect(compareObjects(obj1, obj3)).to.equal(false);
});
it("compareObjects should return false if the objects have different keys", function () {
  expect(compareObjects(obj1, obj4)).to.equal(false);
  expect(compareObjects(obj1, obj5)).to.equal(false);
});
