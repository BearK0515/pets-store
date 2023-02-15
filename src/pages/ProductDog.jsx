import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PriceUpIcon, PriceDownIcon } from "../assets/icons/index";
import { ProductItem } from "./ProductItem";

const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vmin;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductsSort = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 3vmin;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    .sort {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--gray);
      color: var(--white);
      font-size: 14px;
      line-height: 32px;
      &:hover {
        background-color: #9e9e9e;
        cursor: pointer;
      }
    }
    .active {
      background-color: var(--gray-dark);
      &:hover {
        background-color: var(--gray-dark);
        cursor: pointer;
      }
    }
  }
`;
const ProductDog = ({
  productHot,
  productNew,
  productPrice,
  priceToggle,
  sortSelect,
  sortSelectToggle,
}) => {
  const [productsDogHot, setProductsDogHot] = useState([]);
  const [productsDogNew, setProductsDogNew] = useState([]);
  const [productsDogPrice, setProductsDogPrice] = useState([]);

  useEffect(() => {
    setProductsDogHot(
      productHot?.filter((productHot) => productHot.Category.name === "dog")
    );
  }, [productHot]);

  useEffect(() => {
    setProductsDogNew(
      productNew?.filter((productNew) => productNew.Category.name === "dog")
    );
  }, [productNew]);

  useEffect(() => {
    if (priceToggle) {
      setProductsDogPrice(
        productPrice?.filter(
          (productPrice) => productPrice.Category.name === "dog"
        )
      );
    }
  }, [productPrice, priceToggle]);

  return (
    <>
      <ProductsSort>
        <ul className="sort-nav">
          <button
            key={1}
            className={sortSelect?.top ? "sort active" : "sort"}
            onClick={sortSelectToggle}
            value="top"
          >
            熱銷排行
          </button>
          <button
            key={2}
            className={sortSelect?.new ? "sort active" : "sort"}
            onClick={sortSelectToggle}
            value="new"
          >
            最新上架
          </button>
          <button
            key={3}
            className={sortSelect?.price ? "sort active" : "sort"}
            onClick={sortSelectToggle}
            value="price"
          >
            價格
            {sortSelect?.price &&
              (priceToggle === "asc" ? (
                <PriceUpIcon
                  style={{ fontSize: "14px", pointerEvents: "none" }}
                />
              ) : (
                <PriceDownIcon
                  style={{ fontSize: "14px", pointerEvents: "none" }}
                />
              ))}
          </button>
        </ul>
      </ProductsSort>
      <ProductList>
        {sortSelect?.top &&
          productsDogHot?.map((product) => {
            return <ProductItem product={product} key={product.id}/>;
          })}
        {sortSelect?.new &&
          productsDogNew?.map((product) => {
            return <ProductItem product={product} key={product.id}/>;
          })}
        {sortSelect?.price &&
          productsDogPrice?.map((product) => {
            return <ProductItem product={product} key={product.id}/>;
          })}
      </ProductList>
    </>
  );
};

export default ProductDog;
