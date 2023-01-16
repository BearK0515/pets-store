import React from "react";
import { useLocation } from "react-router-dom";
import ProductAll from "./ProductAll";
import ProductCat from "./ProductCat";
import ProductDog from "./ProductDog";

const ProductPage = () => {
  const location = useLocation();
  const page = location.pathname;
  return (
    <>
      {page === "/product/all" && <ProductAll />}
      {page === "/product/dog" && <ProductDog />}
      {page === "/product/cat" && <ProductCat />}
    </>
  );
};

export default ProductPage;
