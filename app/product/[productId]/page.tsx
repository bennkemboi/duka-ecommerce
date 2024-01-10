import Container from "@/components/container";
import { product } from "@/utils/product";
import React from "react";
import ProductDetails from "./productDetails";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params);

  return (
    <div>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
