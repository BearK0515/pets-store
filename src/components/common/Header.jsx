import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FacebookIcon, LineIcon } from "../../assets/icons";
import bigLogo from "../../assets/icons/logo.png";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;

    .tool-box-left {
      display: flex;
      * {
        margin: 0 5px;
      }
      .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: var(--gray-dark);
        line-height: 30px;
      }

      .login {
        width: 62px;
        height: 30px;
        border-radius: 20px;
        background-color: var(--gray-dark);
        line-height: 30px;
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
    }
  }
  .banner {
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      margin-top: 50px;
      display: flex;
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
  width: 380px;
  height: 121px;
  background-image: url(${bigLogo});
  background-size: cover;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className='nav'>
        <nav className='tool-box-left'>
          <div className='icon order'>訂</div>
          <div className='icon info'>買</div>
          <div className='login'>
            <img src='' alt='' />
            登入
          </div>
        </nav>
        <nav className='tool-box-right'>
          <FacebookIcon className='icon facebook' />
          {/* <div className="icon instagram"></div> */}
          <LineIcon className='icon line' />
          <div className='icon homepage'></div>
        </nav>
      </div>

      <div className='banner'>
        {/* <img src='https://picsum.photos/380/121' alt='' className='brand-img' /> */}
        <BigLogo />
        <ul>
          <NavLink to='home'>首頁</NavLink>
          <NavLink to='about'>關於</NavLink>
          <NavLink to='product/all'>全部商品</NavLink>
          <NavLink to='product/dog'>狗狗專區</NavLink>
          <NavLink to='product/cat'>貓咪專區</NavLink>
          <NavLink to='blogs'>部落格</NavLink>
        </ul>
      </div>
    </HeaderStyled>
  );
}
