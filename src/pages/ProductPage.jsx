import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import ProductAside from "./ProductAside";
import ProductAll from "./ProductAll";
import ProductDog from "./ProductDog";
import { HomeIcon } from "../assets/icons/index";
import ProductCat from "./ProductCat";
import SingleProduct from "./SingleProduct";
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
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  text-align: right;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--dark);
`;
const Breadcrumb = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const ProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname;
  let NowPage = "";

  if (page.includes("all")) {
    NowPage = "全部商品";
  } else if (page.includes("dog")) {
    NowPage = "狗狗專區";
  } else if (page.includes("cat")) {
    NowPage = "貓貓專區";
  }

  return (
    <ProductPageStyled>
      <ProductAside />
      <ProductWrapper>
        <HomeLinkWrapper>
          <GoToHome>
            <HomeIcon
              onClick={() => navigate("/home")}
              style={{ color: "var(--dark)", cursor: "pointer" }}
            />
            <p className='text'>{NowPage}</p>
          </GoToHome>
        </HomeLinkWrapper>
        <Breadcrumb />
        {page === "/product/all" && <ProductAll />}
        {page === "/product/dog" && <ProductDog />}
        {page === "/product/cat" && <ProductCat />}
        {page.includes("detail") && <SingleProduct />}
      </ProductWrapper>
    </ProductPageStyled>
  );
};

export default ProductPage;
