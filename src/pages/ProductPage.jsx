import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import ProductAside from "./ProductAside";
import ProductAll from "./ProductAll";
import ProductCat from "./ProductCat";
import ProductDog from "./ProductDog";
import { HomeIcon } from "../assets/icons/index"
import { HomeLinkWrapper } from "../components/common/HomeLinkWrapper";

const ProductPageStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-gap: 0 15px;
  grid-template-columns: 150px 1fr;
  max-width: 1140px;
  margin: 30px auto;
  padding: 0 30px;
`
const ProductWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column;
  font-size: 30px;
  text-align: center;
  margin: 5px;
`
const GoToHome = styled.div`
  display: flex;
  justify-content: flex-end;
  align-contents: center;
  width: 100%;
  text-align: right;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--dark);
`
const Breadcrumb = styled.div`
  margin-bottom: 20px;
  position: relative;
`
const ProductsSort = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 3vmin;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    li {
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
      &.active {
        background-color: var(--gray-dark);
      }
    }
  }
`;

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname;
  let NowPage = '';

  if (page === "/product/all") {
    NowPage = "全部商品"
  } else if (page === "/product/dog") {
    NowPage = "狗狗專區"
  } else {
    NowPage = "貓貓專區"
  }
  
  return (
    <ProductPageStyled>
      <ProductAside />
       <ProductWrapper>
        <HomeLinkWrapper>
          <GoToHome><HomeIcon onClick={() => navigate("/home")} style={{ color:'var(--dark)',cursor: "pointer" }} /><p className='text'>{NowPage}</p></GoToHome>
        </HomeLinkWrapper>
        <Breadcrumb />
        <ProductsSort>
          <ul className='sort-nav'>
            <li className='active'>熱銷排行</li>
            <li>最新上架</li>
            <li>價格</li>
          </ul>
        </ProductsSort>
        {page === "/product/all" && <ProductAll />}
        {page === "/product/dog" && <ProductDog />}
        {page === "/product/cat" && <ProductCat />}
      </ProductWrapper>
    </ProductPageStyled>
  );
};

export default ProductPage;
