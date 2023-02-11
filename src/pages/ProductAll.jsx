import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PriceUpIcon, PriceDownIcon } from '../assets/icons/index';
import { productsHot, productsNew, productsPrice } from '../api/products';
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

const ProductAll = () => {
  const [productHot, setProductHot] = useState([]);
  const [productNew, setProductNew] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [productPriceOrigin, setProductPriceOrigin] = useState([]);
  const [sortSelect, setSortSelect] = useState({
    top: true
  });
  const [priceToggle, setPriceToggle] = useState('desc');

  //抓熱銷排行
  useEffect(() => {
    const getProductHotAsync = async () => {
      try {
        const resProductlHot = await productsHot();
        const onShelvesProductHot = resProductlHot?.filter(
          (product) => product.isOnShelves === 1
        );
        setProductHot(onShelvesProductHot);
      } catch (err) {
        console.error(err);
      }
    };
    getProductHotAsync();
    return;
  }, [setProductHot]);

  //抓最新商品
  useEffect(() => {
    const getProductNewAsync = async () => {
      try {
        const resProductNew = await productsNew();
        const onShelvesProductNew = resProductNew?.filter(
          (product) => product.isOnShelves === 1
        );
        setProductNew(onShelvesProductNew);
      } catch (err) {
        console.error(err);
      }
    };
    getProductNewAsync();
    return;
  }, [setProductNew]);

  //抓價格排序
  useEffect(() => {
    const getProductPriceAsync = async () => {
      try {
        const resProductPrice = await productsPrice();
        const onShelvesProductPrice = resProductPrice?.filter(
          (product) => product.isOnShelves === 1
        );
        setProductPriceOrigin(onShelvesProductPrice);
        setProductPrice(onShelvesProductPrice);
      } catch (err) {
        console.error(err);
      }
    };
    getProductPriceAsync();
    return;
  }, [setProductPriceOrigin]);

  // 點擊時，其他二個會變成 undefine 為 false，當為 true 時不改變
  const sortSelectToggle = (e) => {
    if (e.target.value === 'price') {
      if (priceToggle === 'asc') {
        setProductPrice(
          productPriceOrigin.sort((a, b) => {
            return a.price - b.price;
          })
        );
        const priceSortOrder = priceToggle === 'asc' ? 'desc' : 'asc';
        setPriceToggle(priceSortOrder);
      } else if (priceToggle === 'desc') {
        setProductPrice(
          productPriceOrigin.sort((a, b) => {
            return b.price - a.price;
          })
        );
        const priceSortOrder = priceToggle === 'asc' ? 'desc' : 'asc';
        setPriceToggle(priceSortOrder);
      }
    } else {
      setPriceToggle('desc');
      setProductPrice(
        productPriceOrigin.sort((a, b) => {
          return b.price - a.price;
        })
      );
    }
    if (sortSelect[e.target.value] === true) {
      return;
    } else {
      setSortSelect(() => ({
        [e.target.value]: !sortSelect[e.target.value]
      }));
    }
  };

  return (
    <>
      <ProductsSort>
        <ul className='sort-nav'>
          <button
            key={1}
            className={sortSelect['top'] ? 'sort active' : 'sort'}
            onClick={sortSelectToggle}
            value='top'
          >
            熱銷排行
          </button>
          <button
            key={2}
            className={sortSelect['new'] ? 'sort active' : 'sort'}
            onClick={sortSelectToggle}
            value='new'
          >
            最新上架
          </button>
          <button
            key={3}
            className={sortSelect['price'] ? 'sort active' : 'sort'}
            onClick={sortSelectToggle}
            value='price'
          >
            價格
            {sortSelect['price'] &&
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
        {sortSelect['top'] &&
          productHot?.map((product) => {
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
        {sortSelect['new'] &&
          productNew?.map((product) => {
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
        {sortSelect['price'] &&
          productPrice?.map((product) => {
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

export default ProductAll;
