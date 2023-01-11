import React from "react";
import styled from "styled-components";
import lineLink from "../assets/images/home1.png";
import productsLink from "../assets/images/home2.png";
import SGS from "../assets/images/home3.png";
import tips from "../assets/images/home4.jpg";

const StyledLinkWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  img {
    width: 100%;
  }
`;
const StyledProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--button);
      color: var(--white);
      font-size: 14px;
      line-height: 32px;
      &:hover {
        background-color: var(--button-hover);
      }
      &.active {
        background-color: var(--button-active);
      }
    }
  }
`;
const ProductsListWrapper = styled.div`
  width: 100%;
  background-color: var(--teal);
  color: var(--white);
`;

const Home = () => {
  return (
    <>
      <StyledLinkWrapper style={{ padding: "0px" }}>
        <img className='line-link' src={lineLink} alt='' />
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <img className='produts-link' src={productsLink} alt='' />
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <img className='SGS-img' src={SGS} alt='' />
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <img className='tips-img' src={tips} alt='' />
      </StyledLinkWrapper>
      <StyledProductsContainer>
        <ul className='sort-nav'>
          <li className='active'>熱銷排行</li>
          <li>最新上架</li>
          <li>價格</li>
        </ul>
        <ProductsListWrapper>商品清單</ProductsListWrapper>
      </StyledProductsContainer>
    </>
  );
};

export default Home;
