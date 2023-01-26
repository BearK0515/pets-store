import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import GoTop from "./GoTop";
import ChatRobot from "./ChatRobot";

import { CartIcon, SearchIcon } from "../../assets/icons";
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
  @media screen and (max-width: 1300px) {
    max-width: 80%;
  }
`;

const StyledButtonWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 10px 0;
  .search-bar {
    display: flex;
    flex-direction: row-reverse;
    position: relative;

    #search-input {
      box-sizing: border-box;
      width: 300px;
      height: 50px;
      padding-left: 10px;
      padding-right: 60px;
      position: absolute;
      z-index: -1;
      background-color: var(--button-background);
      border: none;
      border-radius: 4px;
      color: var(--white);
    }

    .none {
      display: none;
    }
    .active {
      display: unset;
    }
  }

  .popular-items {
    position: relative;
    background-color: var(--white);
    width: 300px;
    border-radius: 4px;
    box-shadow: 0 3px 8px #00000026;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .popular-item {
      background-color: #f1f1f1;
      border-radius: 4px;
      padding: 4px 10px;
      font-size: 14px;
      line-height: 16px;
      cursor: pointer;

      &:hover {
        background-color: var(--button-background);
        color: var(--white);
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: -16px;
      width: 0;
      height: 0;
      border: 8px solid;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: var(--white);
      border-left-color: transparent;
    }
  }
  .cart-button,
  .search {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--button-background);
    cursor: pointer;
  }
  .cart-button {
    position: relative;
  }
  .count {
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: var(--red-dark);
    color: var(--white);
    transform: translate(50%, -50%);
  }
`;

const StyledSearchWrapper = styled.div`
  width: 72px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  margin: auto;
  background-color: var(--button-background);
  border-radius: 4px;
  h6,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 24px;
    color: var(--white);
  }
  h6 {
    border-bottom: 1px solid var(--gray);
  }
  span {
    cursor: pointer;
  }
  .product-wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 5px 0;
    padding: 5px;
  }
  .product {
    width: 60px;
    height: 60px;
    background-size: cover;
    background-image: url("https://picsum.photos/id/1020/600/400");
    cursor: pointer;
  }
`;

const Layout = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  
  const handleToggleLoginModal = () => {
    setIsOpenLoginModal(!isOpenLoginModal);
  };
  return (
    <>
      <StyledContainer onClick={() => setSearchBarActive(false)}>
        <Header handleToggleLoginModal={handleToggleLoginModal} />
        <Outlet />
        <StyledButtonWrapper>
          <button
            className='cart-button'
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <CartIcon />
          </button>
          <div className='count'>0</div>
          <span className='search-bar'>
            <label
              className='search'
              for='search-input'
              onClick={(e) => {
                e.stopPropagation();
                // e.nativeEvent.stopImmediatePropagation(); 不知道為什麼不用也沒差
                e.preventDefault();
                setSearchBarActive(!searchBarActive);
              }}
            >
              <SearchIcon />
            </label>
            <input
              type='text'
              id='search-input'
              className={searchBarActive ? "active" : "none"}
              placeholder='商品搜尋'
              onClick={(e) => {
                e.stopPropagation();
                // e.nativeEvent.stopImmediatePropagation(); 不知道為什麼不用也沒差
                e.preventDefault();
              }}
            />
          </span>
          {searchBarActive && (
            <ul className='popular-items'>
              <li className='popular-item'>156565</li>
              <li className='popular-item'>256555565</li>
              <li className='popular-item'>356565</li>
              <li className='popular-item'>456565</li>
              <li className='popular-item'>456565</li>
              <li className='popular-item'>4555555555556565</li>
            </ul>
          )}
        </StyledButtonWrapper>
        <StyledSearchWrapper>
          <h6>瀏覽紀錄</h6>
          <div className='product-wrapper'>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
          </div>
          <span>清除全部</span>
        </StyledSearchWrapper>
        <ChatRobot />
        <GoTop />
      </StyledContainer>
      <Footer />
      {isCartOpen && (
        <CartModal isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
      {isOpenLoginModal && (
        <LoginModal
          isOpenLoginModal={isOpenLoginModal}
          setIsOpenLoginModal={setIsOpenLoginModal}
          handleToggleLoginModal={handleToggleLoginModal}
        />
      )}
    </>
  );
};

export default Layout;
