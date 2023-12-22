import React from "react";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params);

  return <div>Product page</div>;
};

export default Product;
