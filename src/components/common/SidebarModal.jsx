import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  LineIcon,
} from "../../assets/icons";
import smallLogo from "../../assets/icons/logo-small.jpg";

const StyledSidebar = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(20, 20, 20, 0.9);
  }
`;

const StyledContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
  background: rgba(50, 55, 58, 1);
  color: var(--white);
  .top {
    display: flex;
    flex-flow: column;
    background-color: #ffffff1a;
    padding: 15px;
    gap: 10px;
    .logo-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      .logo {
        width: 60px;
        height: 60px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      h2 {
        font-size: 14px;
        line-height: 1.4;
        font-weight: 500;
      }
    }
    .icons-group {
      display: flex;
      gap: 10px;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: #2b3033;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
  .bottom {
    .item {
      display: flex;
      flex-flow: column;
      position: relative;
      padding: 10px 10px 10px 20px;
      font-size: 14px;
      line-height: 1.4;
      font-weight: bolder;
      cursor: pointer;
    }
    .blogs {
      position: relative;
    }
    .blogs::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto 0;
      width: 6px;
      height: 6px;
      border-top: 2px solid var(--white);
      border-right: 2px solid var(--white);
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transition: 0.2s ease;
    }
    .article {
      display: none;
    }
    .active {
      .blogs::after {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
        transition: 0.2s ease;
      }
      .article {
        display: flex;
        flex-flow: column;
        width: 300px;
        background-color: #ffffff0d;
        margin-top: 10px;
        margin-bottom: -10px;
        font-size: 12px;
        font-weight: 400;
        transform: translateX(-20px);
        li{
          padding: 10px 10px 10px 36px;

        }
      }
    }
  }
`;

const SidebarModal = ({ setIsSideabrOpen }) => {
  const navigate = useNavigate();
  const [isArticleOpen, setIsArticleOpen] = useState(false)

  function handleToggleArticle() {
    setIsArticleOpen(!isArticleOpen);
  }
  function GoToHome() {
    navigate("/");
    setIsSideabrOpen(false);
  }
  function GoToAbout() {
    navigate("/about");
    setIsSideabrOpen(false);
  }
  function GoToProductAll() {
    navigate("/product/all");
    setIsSideabrOpen(false);
  }
  function GoToProductDog() {
    navigate("/product/dog");
    setIsSideabrOpen(false);
  }
  function GoToProductCat() {
    navigate("/product/cat");
    setIsSideabrOpen(false);
  }
  function GoToBlogs() {
    navigate("/blogs");
    setIsSideabrOpen(false);
  }
  function GoToOrderSearch() {
    navigate("/order/query");
    setIsSideabrOpen(false);
  }
  function GoToFaq() {
    navigate("/faq");
    setIsSideabrOpen(false);
  }

  return (
    <StyledSidebar>
      <div className='overlay' onClick={() => setIsSideabrOpen(false)}></div>
      <StyledContainer>
        <div className='top'>
          <div className='logo-wrapper'>
            <div className='logo'>
              <img src={smallLogo} alt='' />
            </div>
            <h2>毛孩時代Petstimes | 寵物保健食品領導品牌NO.1</h2>
          </div>
          <div className='icons-group'>
            <FacebookIcon className='icon' />
            <InstagramIcon className='icon' />
            <LineIcon className='icon' />
            <div className='icon' onClick={GoToHome}>
              <HomeIcon />
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='item' onClick={GoToHome}>
            <p>首頁</p>
          </div>
          <div className='item' onClick={GoToAbout}>
            <p>關於</p>
          </div>
          <div className='item' onClick={GoToProductAll}>
            <p>全部商品</p>
          </div>
          <div className='item' onClick={GoToProductDog}>
            <p>狗狗專區</p>
          </div>
          <div className='item' onClick={GoToProductCat}>
            <p>貓咪專區</p>
          </div>
          <div
            className={`item ${isArticleOpen ? "active" : ""}`}
            onClick={handleToggleArticle}
          >
            <p className='blogs'>部落格</p>
            <ul className='article'>
              <li onClick={GoToBlogs}>狗狗健康知識庫</li>
              <li onClick={GoToBlogs}>貓貓健康知識庫</li>
            </ul>
          </div>
          <div className='item' onClick={GoToOrderSearch}>
            <p>訂單查詢</p>
          </div>
          <div className='item' onClick={GoToFaq}>
            <p>購物說明</p>
          </div>
        </div>
      </StyledContainer>
    </StyledSidebar>
  );
};

export default SidebarModal;
