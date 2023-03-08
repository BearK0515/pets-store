import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import ProductAside from "./ProductAside";
import ProductAll from "./ProductAll";
import { productsHot } from "../api/products";
import { HomeIcon } from "../assets/icons/index";
import SingleProduct from "./SingleProduct";
import { HomeLinkWrapper } from "../components/common/HomeLinkWrapper";
import { IsLoadingComponent as Loading } from "../components/common/IsLoading";
import CATEGORY_TYPE from "../constants/categoryTypeConst";

const ProductPageStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-gap: 0 15px;
  grid-template-columns: 150px 1fr;
  max-width: 1140px;
  min-height: 1200px;
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

const ProductPage = ({ keyword }) => {
  window.scrollTo(0, 245);
  const [isLoading, setIsLoading] = useState(true);
  const [productHot, setProductHot] = useState([]);
  const [sortSelect, setSortSelect] = useState({
    top: true,
  });

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

  // useEffect
  //抓全部商品
  useEffect(() => {
    setIsLoading(true);
    const getProductHotAsync = async () => {
      try {
        const resProductlHot = await productsHot();
        const onShelvesProductHot = resProductlHot?.filter(
          (product) => product.isOnShelves === 1
        );
        setProductHot(onShelvesProductHot);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    getProductHotAsync();
    return;
  }, [setProductHot]);

  // 點擊時，其他二個會變成 undefine 為 false，當為 true 時不改變
  const sortSelectToggle = (e) => {
    if (sortSelect[e.target.value] === true) {
      return;
    } else {
      setSortSelect(() => ({
        [e.target.value]: !sortSelect[e.target.value],
      }));
    }
  };

  return (
    <>
      <ProductPageStyled>
        {isLoading && <Loading />}
        <ProductAside />
        <ProductWrapper>
          <HomeLinkWrapper>
            <GoToHome>
              <HomeIcon
                onClick={() => navigate("/")}
                style={{ color: "var(--dark)", cursor: "pointer" }}
              />
              <p className="text">{NowPage}</p>
            </GoToHome>
          </HomeLinkWrapper>
          <Breadcrumb />
          {page === "/product/all" && (
            <ProductAll
              productHot={productHot}
              sortSelect={sortSelect}
              sortSelectToggle={sortSelectToggle}
            />
          )}
          {page === "/product/dog" && (
            <ProductAll
              productHot={productHot}
              sortSelect={sortSelect}
              sortSelectToggle={sortSelectToggle}
              type={CATEGORY_TYPE.DOG}
            />
          )}
          {page === "/product/cat" && (
            <ProductAll
              productHot={productHot}
              sortSelect={sortSelect}
              sortSelectToggle={sortSelectToggle}
              type={CATEGORY_TYPE.CAT}
            />
          )}
          {page.includes("search") && (
            <ProductAll
              productHot={productHot}
              sortSelect={sortSelect}
              sortSelectToggle={sortSelectToggle}
            />
          )}
          {page.includes("detail") && <SingleProduct />}
        </ProductWrapper>
      </ProductPageStyled>
    </>
  );
};

export default ProductPage;
