import { expect } from "chai";
import { greeting, name, welcomeMessage } from "./source.js";

it("`greeting` is equal to 'Hello'", function () {
  expect(greeting).to.equal("Hello");
});
it("`name` is a string", function () {
  expect(name).to.be.a("string");
});
it("`welcomeMessage` is a string that concatenates `greeting` and `name`", function () {
  expect(welcomeMessage).to.be.a("string");
  expect(welcomeMessage).to.equal(`Hello, ${name}!`);
});
