import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductAside from './ProductAside';
import ProductAll from './ProductAll';
import ProductDog from './ProductDog';
import { productsHot, productsNew, productsPrice } from '../api/products';
import { HomeIcon } from '../assets/icons/index';
import ProductCat from './ProductCat';
import SingleProduct from './SingleProduct';
import { HomeLinkWrapper } from '../components/common/HomeLinkWrapper';

const ProductPageStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-gap: 0 15px;
  grid-template-columns: 150px 1fr;
  max-width: 1140px;
  margin: 30px auto;
  padding: 0 30px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const ProductWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column;
  font-size: 30px;
  text-align: center;
  margin: 5px;
`;
const GoToHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 400;

  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    text-align: right;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--dark);
  }
`;
const Breadcrumb = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const ProductPage = () => {
  const [productHot, setProductHot] = useState([]);
  const [productNew, setProductNew] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [productPriceOrigin, setProductPriceOrigin] = useState([]);
  const [sortSelect, setSortSelect] = useState({
    top: true
  });
  const [priceToggle, setPriceToggle] = useState('desc');

  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname;
  let NowPage = '';

  if (page.includes('all')) {
    NowPage = '全部商品';
  } else if (page.includes('dog')) {
    NowPage = '狗狗專區';
  } else if (page.includes('cat')) {
    NowPage = '貓貓專區';
  }

  // useEffect
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
    <ProductPageStyled>
      <ProductAside />
      <ProductWrapper>
        <HomeLinkWrapper>
          <GoToHome>
            <HomeIcon
              onClick={() => navigate('/')}
              style={{ color: 'var(--dark)', cursor: 'pointer' }}
            />
            <p className='text'>{NowPage}</p>
          </GoToHome>
        </HomeLinkWrapper>
        <Breadcrumb />
        {page === '/product/all' && (
          <ProductAll
            productHot={productHot}
            productNew={productNew}
            productPrice={productPrice}
            priceToggle={priceToggle}
            sortSelect={sortSelect}
            sortSelectToggle={sortSelectToggle}
          />
        )}
        {page === '/product/dog' && (
          <ProductDog
            productHot={productHot}
            productNew={productNew}
            productPrice={productPrice}
            priceToggle={priceToggle}
            sortSelect={sortSelect}
            sortSelectToggle={sortSelectToggle}
          />
        )}
        {page === '/product/cat' && (
          <ProductCat
            productHot={productHot}
            productNew={productNew}
            productPrice={productPrice}
            priceToggle={priceToggle}
            sortSelect={sortSelect}
            sortSelectToggle={sortSelectToggle}
          />
        )}
        {page.includes('detail') && <SingleProduct />}
      </ProductWrapper>
    </ProductPageStyled>
  );
};

export default ProductPage;
