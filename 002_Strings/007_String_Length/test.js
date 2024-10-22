import { expect } from "chai";
import {
  message,
  messageNoSpaces,
  messageNoPunctuation,
  lengthMessage,
  lengthNoSpaces,
  lengthNoPunctuation,
} from "./source.js";

it("`lengthMessage` matches the length of `message`", function () {
  expect(lengthMessage).to.equal(message.length);
});
it("`lengthNoSpaces` matches the length of `messageNoSpaces`", function () {
  expect(lengthNoSpaces).to.equal(messageNoSpaces.length);
});
it("`lengthNoPunctuation` matches the length of `messageNoPunctuation`", function () {
  expect(lengthNoPunctuation).to.equal(messageNoPunctuation.length);
});
