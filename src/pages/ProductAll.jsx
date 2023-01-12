import React from 'react'
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import {BackHomeIcon, AboutIcon, ProductsIcon, HomeIcon} from "../assets/icons/index"


const ProductStyled = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 0 15px;
  grid-template-columns: 1fr 750px;
  max-width: 930px;
  margin: 30px auto;
`
const Aside = styled.div`
    box-sizing: border-box;
    background-color: var(--footer-background);
    font-size: 10px;
    color:#FF6600;
    padding-left: 20px;
    display: block;
    border: 2px solid;

  .aside-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    box-sizing: border-box;
  }
`
const NavLink = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 0.9rem;
  line-height: 2;
  color: var(--dark);
  font-weight: bolder;
  cursor: pointer;
  color: ${(props) =>
      props.active ? "var(--text-hover)" : "var(--dark);"};
  &:hover {
    color: var(--text-hover)
  }

`;

const ProductWrapper = styled.div`
  background-color: var(--footer-background);
  font-size: 30px;
  color:#FF6600;
  text-align: center;
  border: 2px solid;
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

const ProductAll = () => {
  const navigate = useNavigate();
  const page = useLocation().pathname
  return (
    <ProductStyled>
      <Aside>
        <ul className='aside-content'>
            <NavLink onClick={() => navigate("/home")}>
              <BackHomeIcon style={{ position: "absolute", left: "-18px" }}/>
              首頁
            </NavLink>
            <NavLink  onClick={() => navigate("/about")}>
              <AboutIcon style={{ position: "absolute", left: "-18px" }}/>
              關於
            </NavLink>
          {page.includes("all") ? 
            (<NavLink active onClick={() => navigate("/product/all")}>
              <ProductsIcon style={{ position: "absolute", left: "-18px" }}/>
              全部商品
            </NavLink>) :
            (<NavLink  onClick={() => navigate("/product/all")}>
              <ProductsIcon style={{ position: "absolute", left: "-18px" }}/>
              全部商品
            </NavLink>
          )}
          {page.includes("dog") ? 
            (<NavLink active onClick={() => navigate("/product/dog")}>狗狗專區</NavLink>) : (<NavLink onClick={() => navigate("/product/dog")}>狗狗專區</NavLink>
          )}
          {page.includes("cat") ? 
            (<NavLink active  onClick={() => navigate("/product/cat")}>貓咪專區</NavLink>) : (<NavLink onClick={() => navigate("/product/cat")}>貓咪專區</NavLink>
            )}
          {page.includes("blogs") ? 
            (<NavLink active onClick={() => navigate("/blogs")}>部落格</NavLink>) : (<NavLink onClick={() => navigate("/blogs")}>部落格</NavLink>
          )}
        </ul>
      </Aside>
      <ProductWrapper>
        <GoToHome><HomeIcon onClick={() => navigate("/home")} style={{ color:'var(--dark)',cursor: "pointer" }} />＞全部商品</GoToHome>
        <Breadcrumb></Breadcrumb>
        <StyledProductsContainer>
          <ul className='sort-nav'>
            <li className='active'>熱銷排行</li>
            <li>最新上架</li>
            <li>價格</li>
          </ul>
        </StyledProductsContainer>
          <div>商品列表</div>
      </ProductWrapper>
    </ProductStyled>
  )
}

export default ProductAll