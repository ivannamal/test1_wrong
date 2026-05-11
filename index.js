function calculateDiscount(price, discountPercent) {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }

  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Discount percent must be between 0 and 100");
  }

  // Intentional bug:
  // Should be: price - (price * discountPercent / 100)
  return price - discountPercent;
}

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

module.exports = {
  calculateDiscount,
  formatPrice
};
