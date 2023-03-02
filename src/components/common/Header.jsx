import React, { useEffect, useRef, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import {
  InstagramIcon,
  FacebookIcon,
  LineIcon,
  OrderIcon,
  FaqIcon,
  AccountIcon,
  HomeIcon,
  MenuIcon,
  LoginIcon,
  SearchIcon,
  CartIcon,
} from "../../assets/icons";
import bigLogo from "../../assets/icons/logo.png";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  .searchbar {
    display: none;
    @media screen and (max-width: 992px) {
      display: unset;
      position: absolute;
      top: 52px;
      padding: 0 10px;
      height: 30px;
      width: 100vw;
      
    }
  }

  .back-drop {
    display: none;
    z-index: 1;
    @media screen and (max-width: 992px) {
      display: unset;
      position: absolute;
      background: rgba(60, 60, 60, 0.3);
      width: 100vw;
      height: 100vh;
    }
  }
  .nav-mobile {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(50, 55, 58, 0.85);
    width: 100%;
    z-index: 3;
    ul {
      display: none;
      @media screen and (max-width: 992px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        li {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          padding: 4px;
          cursor: pointer;
          .icon {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;
            margin-bottom: 2px;
            padding: 2px;
            .count {
              position: absolute;
              top: 0;
              right: 0;
              transform: translate(50%, -10%);
              display: flex;
              justify-content: center;
              align-items: center;
              width: 20px;
              height: 20px;
              padding: 3px;
              font-size: 80%;
              color: var(--white);
              background: #c14848;
              border-radius: 50%;
            }
          }
          .text {
            font-size: 12px;
            color: var(--white);
          }
        }
      }
    }
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    @media screen and (max-width: 992px) {
      display: none;
    }
    .tool-box-left {
      display: flex;
      gap: 5px;
      .icon-wrapper {
        display: flex;
        flex-flow: column;
        position: relative;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--gray-dark);
          line-height: 30px;
          cursor: pointer;
        }
        .tips {
          position: absolute;
          transform: scale(0);
        }
        &.icon-wrapper:hover {
          .tips {
            transform: scale(1);
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            padding: 4px 5px 5px;
            top: 45px;
            left: 0;
            transform: translatex(-25%);
            font-size: 12px;
            line-height: 1;
            background-color: rgba(50, 55, 58, 0.85);
            color: var(--white);
            &.tips::after {
              content: "";
              position: absolute;
              top: -12px;
              width: 0;
              height: 0;
              border: 6px solid;
              border-top-color: transparent;
              border-right-color: transparent;
              border-bottom-color: rgba(50, 55, 58, 0.85);
              border-left-color: transparent;
            }
          }
          .login + .tips {
            transform: translatex(0);
          }
        }
        .login {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 62px;
          height: 30px;
          border-radius: 20px;
          background-color: var(--gray-dark);
          line-height: 30px;
          font-size: 12px;
          color: var(--white);
        }
      }
      .logout,
      .admin {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 62px;
        height: 30px;
        border-radius: 20px;
        background-color: var(--text-hover);
        line-height: 30px;
        font-size: 12px;
        color: var(--white);
      }
      .admin {
        background-color: #734434;
      }
    }

    .tool-box-right {
      display: flex;
      * {
        margin: 0px 5px;
      }
    }

    .icon {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .homepage {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--gray-dark);
      line-height: 30px;
    }
  }
  .banner {
    height: 293px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      height: 72px;
      padding: 20px;
      display: flex;
    }
  }
  @media screen and (max-width: 992px) {
    .banner {
      margin-top: 38px;
      height: 200px;
      img {
        margin: 0 auto;
        width: 250px;
        height: 90px;
      }
      ul {
        display: none;
      }
    }
  }
`;

const NavLink = styled(Link)`
  box-sizing: border-box;
  height: 30px;
  margin: 0 10px;
  font-size: 20px;
  line-height: 30px;
  color: var(--dark);
  &:hover {
    color: var(--text-hover);
    border-bottom: 2px solid var(--text-hover);
  }
  &.active {
    color: var(--text-hover);
    border-bottom: 2px solid var(--text-hover);
  }
`;

const BigLogo = styled.img`
  cursor: pointer;
  width: 380px;
  height: 121px;
`;

export default function Header({
  handleToggleLoginModal,
  handleToggleCartModal,
  handleToggleSidebar,
  handleSearch,
  countProducts,
  setLogin,
  login,
}) {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const headerSearchRef = useRef();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("UserId");
    setLogin(false);
  };
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [setLogin]);

  return (
    <HeaderStyled>
      {searchBarActive && (
        <div
          className="back-drop"
          onClick={() => setSearchBarActive(false)}
        ></div>
      )}
      <div className="nav-mobile">
        {searchBarActive && (
          <input
            type="text"
            id="search-input"
            className="searchbar"
            placeholder="商品搜尋"
            ref={headerSearchRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(
                  headerSearchRef,
                  searchBarActive,
                  setSearchBarActive
                );
              }
            }}
          />
        )}
        <ul>
          <li onClick={handleToggleSidebar}>
            <div className="icon">
              <MenuIcon />
            </div>
            <div className="text">選單</div>
          </li>
          <li>
            <Link to="order/query">
              <div className="icon">
                <OrderIcon size="30px" />
              </div>
              <div className="text">查訂單</div>
            </Link>
          </li>
          {login ? (
            <li onClick={handleLogout}>
              <div className="icon">
                <LoginIcon />
              </div>
              <div className="text ">登出</div>
            </li>
          ) : (
            <li onClick={handleToggleLoginModal}>
              <div className="icon">
                <LoginIcon />
              </div>
              <div className="text ">登入</div>
            </li>
          )}
          <li>
            <div className="icon">
              <SearchIcon
                onClick={(e) => {
                  setSearchBarActive(!searchBarActive);
                  e.preventDefault();
                  e.stopPropagation();
                }}
              />
            </div>
            <div className="text">搜尋</div>
          </li>
          <li onClick={handleToggleCartModal}>
            <div className="icon">
              <CartIcon />
              <div className="count">{countProducts}</div>
            </div>
            <div className="text">購物車</div>
          </li>
        </ul>
      </div>
      <div className="nav">
        <nav className="tool-box-left">
          <div className="icon-wrapper">
            <Link to="order/query">
              <div className="icon order">
                <OrderIcon />
              </div>
            </Link>
            <div className="tips">訂單查詢</div>
          </div>
          <div className="icon-wrapper">
            <Link to="faq">
              <div className="icon info">
                <FaqIcon />
              </div>
            </Link>
            <div className="tips">購物說明</div>
          </div>

          {login ? (
            <Link to="/">
              <div className="icon logout" onClick={handleLogout}>
                登出
              </div>
            </Link>
          ) : (
            <div className="icon-wrapper">
              <div className="icon login" onClick={handleToggleLoginModal}>
                <AccountIcon />
                登入
              </div>
              <div className="tips">會員登入</div>
            </div>
          )}

          <Link to='login'>
            <div className='icon admin'>管理員</div>
          </Link>
        </nav>
        <nav className="tool-box-right">
          <FacebookIcon className="icon facebook" />
          <InstagramIcon className="icon instagram" />
          <LineIcon className="icon line" />
          <Link to="/">
            <div className="icon homepage">
              <HomeIcon />
            </div>
          </Link>
        </nav>
      </div>

      <div className="banner">
        <Link to="/">
          <BigLogo src={bigLogo} alt="logo-big" />
        </Link>
        <ul>
          <NavLink to="/">首頁</NavLink>
          <NavLink to="about">關於</NavLink>
          <NavLink to="product/all">全部商品</NavLink>
          <NavLink to="product/dog">狗狗專區</NavLink>
          <NavLink to="product/cat">貓咪專區</NavLink>
          <NavLink to="blogs">部落格</NavLink>
        </ul>
      </div>
    </HeaderStyled>
  );
}
