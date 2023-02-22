import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
const ProductSearch = ({
  productHot,
  productNew,
  productPrice,
  priceToggle,
  sortSelect,
  sortSelectToggle,
}) => {
  const [productsSearchHot, setProductsSearchHot] = useState([]);
  const [productsSearchNew, setProductsSearchNew] = useState([]);
  const [productsSearchPrice, setProductsSearchPrice] = useState([]);
  const params = useParams();
  const keyword = params.keyword;

  useEffect(() => {
    // console.log(searchKeyword);

    setProductsSearchHot(
      productHot?.filter((productHot) => productHot.name.includes(keyword))
    );
  }, [productHot, keyword]);

  useEffect(() => {
    setProductsSearchNew(
      productNew?.filter((productNew) => productNew.name.includes(keyword))
    );
  }, [productNew, keyword]);

  useEffect(() => {
    if (priceToggle) {
      setProductsSearchPrice(
        productPrice?.filter((productPrice) =>
          productPrice.name.includes(keyword)
        )
      );
    }
  }, [productPrice, priceToggle, keyword]);

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
