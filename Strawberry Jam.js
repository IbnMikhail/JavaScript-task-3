const Strawberry = (orders, cash) => {
  const jarPrice = 40;
  const discountJars = 3;
  const discountPrice = 100;

  const totalJars = orders;
  const totalDiscountSets = Math.floor(totalJars / discountJars);

  const regularJars = totalJars - (totalDiscountSets * discountJars);

  const totalPrice = (totalDiscountSets * discountPrice) + (regularJars * jarPrice);

  const change = cash - totalPrice;

  if (change >= 0) {
    return `Change: ${change}`;
  } else {
    return "Insufficient Funds";
  }
};
