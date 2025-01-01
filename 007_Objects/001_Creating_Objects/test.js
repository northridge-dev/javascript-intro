import { expect } from "chai";
import { student } from "./source.js";

it("student is an object", function () {
  expect(student).to.be.a("object");
});
it("student.name is a string", function () {
  expect(student.name).to.be.a("string");
});
it("student.age is a number", function () {
  expect(student.age).to.be.a("number");
});
