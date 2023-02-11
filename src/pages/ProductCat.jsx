import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PriceUpIcon, PriceDownIcon } from '../assets/icons/index';
import { ProductItem } from './ProductItem';

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
const ProductCat = ({
  productHot,
  productNew,
  productPrice,
  priceToggle,
  sortSelect,
  sortSelectToggle
}) => {
  const [productsCatHot, setProductsCatHot] = useState([]);
  const [productsCatNew, setProductsCatNew] = useState([]);
  const [productsCatPrice, setProductsCatPrice] = useState([]);

  useEffect(() => {
    setProductsCatHot(
      productHot?.filter((productHot) => productHot.Category.name === 'cat')
    );
  }, [productHot]);

  useEffect(() => {
    setProductsCatNew(
      productNew?.filter((productNew) => productNew.Category.name === 'cat')
    );
  }, [productNew]);

  useEffect(() => {
    if (priceToggle) {
      setProductsCatPrice(
        productPrice?.filter(
          (productPrice) => productPrice.Category.name === 'cat'
        )
      );
    }
  }, [productPrice, priceToggle]);

  return (
    <>
      <ProductsSort>
        <ul className='sort-nav'>
          <button
            key={1}
            className={sortSelect?.top ? 'sort active' : 'sort'}
            onClick={sortSelectToggle}
            value='top'
          >
            熱銷排行
          </button>
          <button
            key={2}
            className={sortSelect?.new ? 'sort active' : 'sort'}
            onClick={sortSelectToggle}
            value='new'
          >
            最新上架
          </button>
          <button
            key={3}
            className={sortSelect?.price ? 'sort active' : 'sort'}
            onClick={sortSelectToggle}
            value='price'
          >
            價格
            {sortSelect?.price &&
              (priceToggle === 'asc' ? (
                <PriceUpIcon
                  style={{ fontSize: '14px', pointerEvents: 'none' }}
                />
              ) : (
                <PriceDownIcon
                  style={{ fontSize: '14px', pointerEvents: 'none' }}
                />
              ))}
          </button>
        </ul>
      </ProductsSort>
      <ProductList>
        {sortSelect?.top &&
          productsCatHot?.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                price={product.price}
                image={product.Images.url}
                name={product.name}
              />
            );
          })}
        {sortSelect?.new &&
          productsCatNew?.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                price={product.price}
                image={product.Images.url}
                name={product.name}
              />
            );
          })}
        {sortSelect?.price &&
          productsCatPrice?.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                price={product.price}
                image={product.Images.url}
                name={product.name}
              />
            );
          })}
      </ProductList>
    </>
  );
};

export default ProductCat;
