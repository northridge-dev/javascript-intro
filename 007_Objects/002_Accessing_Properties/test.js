import { expect } from "chai";
import { student, name, age, missing } from "./source.js";

it("name matches student.name", function () {
  expect(name).to.equal(student.name);
});
it("age matches student['age']", function () {
  expect(age).to.equal(student["age"]);
});
it("missing is undefined", function () {
  expect(missing).to.be.undefined;
});
