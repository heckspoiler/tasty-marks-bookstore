import React from "react";

export const ProductDetails = ({ products }) => {
  return (
    <div>
      <div key={products._id}>{products.name}</div>
    </div>
  );
};
