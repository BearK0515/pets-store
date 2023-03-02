import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import GoTop from "./GoTop";

import { CartIcon, SearchIcon } from "../../assets/icons";
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";
import SidebarModal from "./SidebarModal";
import { useSelector } from "react-redux";
import { facebookLogin, lineLogin } from "../../api/userLogin";
import jwtDecode from "jwt-decode";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
  @media screen and (max-width: 1300px) {
    max-width: 80%;
  }
  @media screen and (max-width: 1200px) {
    max-width: 90%;
  }
  @media screen and (max-width: 992px) {
    max-width: 95%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 577px) {
    max-width: 100%;
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
      color: #333;
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
  @media screen and (max-width: 992px) {
    display: none;
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
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledCardItem = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background-size: cover;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .back-drop {
    opacity: 0;
    transition: 0.3s;
    z-index: 999;
  }
  .view {
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    .back-drop {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(50, 55, 58, 0.85);
      cursor: pointer;
      opacity: 1;
      transition: 0.3s;
    }
    .view {
      background: #c14848;
      border-radius: 50rem;
      font-size: 12px;
      line-height: 1;
      padding: 2px 5px;
      color: var(--white);
      z-index: 2;
      opacity: 1;
      transition: 0.3s;
    }
  }
`;

const Layout = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSideabrOpen, setIsSideabrOpen] = useState(false);
  let location = useLocation();
  const [records, setRecords] = useState(null);
  const productInCart = useSelector((state) => state.product.cart);
  const [login, setLogin] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleToggleLoginModal = () => {
    setIsOpenLoginModal(!isOpenLoginModal);
  };
  const handleToggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleToggleSidebar = () => {
    setIsSideabrOpen(!isSideabrOpen);
  };
  const handleSearch = (ref, callback, setCallback) => {
    const keyword = ref.current.value;
    if (!keyword || !callback) return;
    ref.current.value = null;
    setCallback(false);
    navigate(`../product/search/${keyword}`);
  };

  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem("productId")));
  }, [location.pathname]);

  useEffect(() => {
    const getUserInfo = async () => {
      const getUrlString = window.location.href;
      const url = new URL(getUrlString);
      const code = url.searchParams.get("code");
      if (code) {
        const data = await lineLogin(code);
        const idToken = data?.data.id_token;
        const userInfo = jwtDecode(idToken);
        const { email, name } = userInfo;
        const { token, user } = await facebookLogin({ email, name });
        localStorage.setItem("authToken", token);
        localStorage.setItem("UserId", user.id);
        setLogin(true);
      }
    };
    getUserInfo();
  }, []);

  return (
    <>
      <StyledContainer onClick={() => setSearchBarActive(false)}>
        <Header
          handleToggleLoginModal={handleToggleLoginModal}
          handleToggleCartModal={handleToggleCartModal}
          handleToggleSidebar={handleToggleSidebar}
          handleSearch={handleSearch}
          countProducts={productInCart.length}
          setLogin={setLogin}
          login={login}
        />
        <Outlet />
        <StyledButtonWrapper>
          <button
            className="cart-button"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <CartIcon />
          </button>
          <div className="count">{productInCart.length}</div>
          <span className="search-bar">
            <label
              className="search"
              htmlFor="search-input"
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
              type="text"
              id="search-input"
              className={searchBarActive ? "active" : "none"}
              placeholder="商品搜尋"
              ref={searchRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(searchRef, searchBarActive, setSearchBarActive);
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                // e.nativeEvent.stopImmediatePropagation(); 不知道為什麼不用也沒差
                e.preventDefault();
              }}
            />
          </span>
          {searchBarActive && (
            <ul className="popular-items">
              <Link to="../product/all">
                <li className="popular-item">
                  我們
                </li>
              </Link>
              <Link to="../product/all">
                <li className="popular-item">
                  分類
                </li>
              </Link>
              <Link to="../product/all">
                <li className="popular-item">
                  沒有
                </li>
              </Link>
              <Link to="../product/all">
                <li className="popular-item">
                  標籤
                </li>
              </Link>
            </ul>
          )}
        </StyledButtonWrapper>
        {records && (
          <StyledSearchWrapper>
            <h6>瀏覽紀錄</h6>
            <div className="product-wrapper">
              {records?.map((record) => {
                return <CardItem record={record} key={record.id} />;
              })}
            </div>
            <span
              onClick={() => {
                localStorage.removeItem("productId");
                setRecords(null);
              }}
            >
              清除全部
            </span>
          </StyledSearchWrapper>
        )}
        <GoTop />
      </StyledContainer>
      <Footer />
      {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
      {isOpenLoginModal && (
        <LoginModal
          setIsOpenLoginModal={setIsOpenLoginModal}
          handleToggleLoginModal={handleToggleLoginModal}
          setLogin={setLogin}
        />
      )}
      {isSideabrOpen && (
        <SidebarModal
          setIsSideabrOpen={setIsSideabrOpen}
          handleToggleSidebar={handleToggleSidebar}
        />
      )}
    </>
  );
};

export default Layout;

export const CardItem = ({ record }) => {
  const navigate = useNavigate();
  return (
    <StyledCardItem
      className="product"
      onClick={() => {
        navigate(`/product/detail/${record.id}`);
      }}
    >
      <div className="back-drop"></div>
      <img src={record.imageUrl} alt="" className="image" />
      <div className="view">檢視</div>
    </StyledCardItem>
  );
};
