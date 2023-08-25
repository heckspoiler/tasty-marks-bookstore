import React from "react";

export const ProductDetails = ({ product }) => {
  return (
    <div>
      <div key={product._id}>{product.name}</div>
    </div>
  );
};
