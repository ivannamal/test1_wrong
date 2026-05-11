const assert = require("assert");
const { calculateDiscount, formatPrice } = require("./index");

assert.strictEqual(
  calculateDiscount(100, 20),
  80,
  "20 percent discount from 100 should be 80"
);

assert.strictEqual(
  calculateDiscount(200, 10),
  180,
  "10 percent discount from 200 should be 180"
);

assert.strictEqual(
  formatPrice(19.5),
  "$19.50",
  "Price should be formatted with two decimal places"
);

console.log("All tests passed");
