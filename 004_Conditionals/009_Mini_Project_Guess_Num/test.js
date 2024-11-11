import { expect } from "chai";
import { checkGuess } from "./script-test.js";

const upperBound = 99;
const lowerBound = 2;
const secretNumber = 42;

it("checkGuess is a function", function () {
  expect(checkGuess).to.be.a("function");
});
it("returns INVALID GUESS when the guess is out of bounds", function () {
  expect(checkGuess(1, upperBound, lowerBound, secretNumber)).to.equal(
    "INVALID GUESS",
  );
  expect(checkGuess(100, upperBound, lowerBound, secretNumber)).to.equal(
    "INVALID GUESS",
  );
});
it("returns TOO LOW when the guess is less than the secret number", function () {
  expect(
    checkGuess(secretNumber - 1, upperBound, lowerBound, secretNumber),
  ).to.equal("TOO LOW");
});
it("returns TOO HIGH when the guess is greater than the secret number", function () {
  expect(
    checkGuess(secretNumber + 1, upperBound, lowerBound, secretNumber),
  ).to.equal("TOO HIGH");
});
it("returns CORRECT when the guess is equal to the secret number", function () {
  expect(
    checkGuess(secretNumber, upperBound, lowerBound, secretNumber),
  ).to.equal("CORRECT");
});
