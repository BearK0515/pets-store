import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PriceUpIcon, PriceDownIcon } from "../assets/icons/index";
import useFilteredData from "../hooks/useFilterData";
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
const ProductSearch = ({
  productHot,
  priceToggle,
  sortSelect,
  sortSelectToggle,
}) => {
  const [priceFowardOrder, setPriceFowardOrder] = useState(true);
  const params = useParams();
  const keyword = params.keyword;

  const productsSearchHot = useFilteredData(
    productHot,
    0,
    keyword
  ).filteredData;
  const productsSearchNew = useFilteredData(
    productHot,
    1,
    keyword
  ).filteredData;
  const productsSearchPrice = useFilteredData(
    productHot,
    2,
    keyword,
    priceFowardOrder,
  ).filteredData;

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
            onClick={(e) => {
              setPriceFowardOrder(!priceFowardOrder);
              sortSelectToggle(e);
            }}
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
          productsSearchHot?.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        {sortSelect?.new &&
          productsSearchNew?.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        {sortSelect?.price &&
          productsSearchPrice?.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        {productsSearchHot.length === 0 && (
          <div className="non-item">找不到產品</div>
        )}
      </ProductList>
    </>
  );
};

export default ProductSearch;
