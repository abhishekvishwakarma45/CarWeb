import React from "react";

const PriceFormatter = ({ price }) => {
  return Intl.NumberFormat("en-In", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(price / 1);
};

export default PriceFormatter;
