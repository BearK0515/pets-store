import React from "react";
import styled from "styled-components";
import { FacebookIcon, LineIcon } from "../../assets/icons";

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

      li {
        box-sizing: border-box;
        height: 30px;
        margin: 0 10px;
        font-size: 20px;
        line-height: 30px;

        &:hover {
          color: var(--text-hover);
          border-bottom: 2px solid var(--text-hover);
        }
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="nav">
        <nav className="tool-box-left">
          <div className="icon order">訂</div>
          <div className="icon info">買</div>
          <div className="login">
            <img src="" alt="" />
            登入
          </div>
        </nav>
        <nav className="tool-box-right">
          <FacebookIcon className="icon facebook" />
          {/* <div className="icon instagram"></div> */}
          <LineIcon className="icon line" />
          <div className="icon homepage"></div>
        </nav>
      </div>

      <div className="banner">
        <img src="https://picsum.photos/380/121" alt="" className="brand-img" />
        <ul>
          <li className="link">首頁</li>
          <li className="link">關於</li>
          <li className="link">全部商品</li>
          <li className="link">狗狗專區</li>
          <li className="link">貓咪專區</li>
          <li className="link">部落格</li>
        </ul>
      </div>
    </HeaderStyled>
  );
}
