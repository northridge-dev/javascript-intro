import { expect } from "chai";
import { forecast } from "./source.js";

it("forecast is a function", function () {
  expect(forecast).to.be.a("function");
});
it("forecasts hot days", function () {
  expect(forecast(100)).to.equal("hot");
  expect(forecast(90)).to.equal("hot");
});
it("forecasts warm days", function () {
  expect(forecast(80)).to.equal("warm");
  expect(forecast(70)).to.equal("warm");
});
it("forecasts cool days", function () {
  expect(forecast(60)).to.equal("cool");
  expect(forecast(40)).to.equal("cool");
});
it("forecasts cold days", function () {
  expect(forecast(30)).to.equal("cold");
});
