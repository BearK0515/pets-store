import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AllProducts, DogProducts, CatProducts } from "./products/index";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  border: 1px solid #ddd;
  overflow: hidden;
  .order-list {
    width: 100%;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid #ddd;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 10px;
  margin: 10px;
`;
const StyledButton = styled.div`
  padding: 0 5px;
  background-color: ${(props) =>
    props.active ? "var(--button-active)" : "var(--button)"};
  color: var(--white);
  font-size: 18px;
  line-height: 40px;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--button-active)" : "var(--button-hover)"};
  }
`;
const StyledProdutsContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3vmin;
  padding: 10px;
  height: calc(100vh - 110px);
  overflow-y: auto;
  //scroll底色
  &::-webkit-scrollbar-track {
    background-color: #ddd;
  }
  //scroll寬度
  &::-webkit-scrollbar {
    width: 3px;
    background-color: black;
  }
  //scroll本體顏色
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray);
  }
`;
const Products = ({ productsAll, handleTogglePriceModal }) => {
  const page = useLocation().pathname;
  return (
    <StyledContainer>
      <StyledTitle>商品列表</StyledTitle>
      <StyledButtonWrapper>
        <Link to='/admin/products/all'>
          {page.includes("all") ? (
            <StyledButton active>全部商品</StyledButton>
          ) : (
            <StyledButton>全部商品</StyledButton>
          )}
        </Link>
        <Link to='/admin/products/dog'>
          {page.includes("dog") ? (
            <StyledButton active>狗狗專區</StyledButton>
          ) : (
            <StyledButton>狗狗專區</StyledButton>
          )}
        </Link>
        <Link to='/admin/products/cat'>
          {page.includes("cat") ? (
            <StyledButton active>貓咪專區</StyledButton>
          ) : (
            <StyledButton>貓咪專區</StyledButton>
          )}
        </Link>
      </StyledButtonWrapper>
      <StyledProdutsContainer>
        {page.includes("all") && (
          <AllProducts
            productsAll={productsAll}
            handleTogglePriceModal={handleTogglePriceModal}
          />
        )}
        {page.includes("dog") && (
          <DogProducts
            productsAll={productsAll}
            handleTogglePriceModal={handleTogglePriceModal}
          />
        )}
        {page.includes("cat") && (
          <CatProducts
            productsAll={productsAll}
            handleTogglePriceModal={handleTogglePriceModal}
          />
        )}
      </StyledProdutsContainer>
    </StyledContainer>
  );
};

export default Products;
