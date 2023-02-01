import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  FacebookIcon,
  HomeIcon,
  LineIcon,
  PowerByIcon,
} from "../../assets/icons";
import smallLogo from "../../assets/icons/logo-white.png";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  .infos {
    display: flex;
    justify-content: center;
    background-color: var(--footer-background);
    color: var(--white);
    .cont {
      width: 100%;
      max-width: 1140px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 160px;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 15px;
      .brand-logo {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
        }
        .customer-service {
          display: none;
        }
      }
      .wrapper {
        display: flex;
        gap: 15px;
        .social-network {
          display: none;
        }
      }
      .info-title {
        font-size: 16px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .title {
          cursor: pointer;
        }
        .info {
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }

    .social-network {
      display: flex;
      gap: 10px;
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
  }

  .down {
    display: flex;
    justify-content: center;
    height: 208px;
    background-color: var(--power-by);
    .cont {
      width: 100%;
      max-width: 1140px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    * {
      margin-top: 5px;
    }

    .customer-service {
      color: var(--white);
    }
  }
  @media screen and (max-width: 1200px) {
    .infos {
      height: auto;
      padding: 15px;
      .cont {
        height: auto;
        max-width: 930px;
        .left {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          height: auto;
          .brand-logo {
            height: auto;
            width: 100%;
            display: flex;
            flex-flow: column;
            gap: 15px;
            img {
              width: 100px;
              height: 100px;
            }
            .customer-service {
              height: auto;
              width: auto;
              display: flex;
              flex-flow: column;
              font-size: 80%;
              font-weight: 400;
              line-height: 1.5;
            }
          }
          .wrapper {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            .social-network {
              display: flex;
              grid-area: 2/4;
            }
          }
        }
      }
      .social-network {
        display: none;
      }
    }
    .down {
      height: auto;
      .cont {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 15px;
      }
      .customer-service {
        display: none;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .infos {
      .cont {
        .left {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "wrapper"
            "brand-logo";
          .brand-logo {
            width: 100%;
            grid-area: brand-logo;
            display: flex;
            align-items: center;
            img {
              margin: 10% 0;
            }
            .customer-service {
              align-items: center;
            }
          }
          .wrapper {
            grid-area: wrapper;
            display: flex;
            flex-flow: column;
            align-items: start;
            .info-title {
              display: flex;
              align-items: start;
              width: 100%;
              gap: 0;
              position: relative;
              .title {
                width: 100%;
                font-size: 80%;
                font-weight: 400;
                line-height: 1.5;
                margin-bottom: 10px;
              }
              .menu {
                position: absolute;
                right: 0;
                width: 39.2px;
                height: 39.2px;
                transform: translate(25%, -32%);
              }
              .menu::after {
                content: "";
                position: absolute;
                right: 0;
                top: 0;
                width: 8px;
                height: 8px;
                border-top: 3px solid var(--white);
                border-right: 3px solid var(--white);
                transform: rotate(45deg) translate(0, 250%);
                -webkit-transform: rotate(45deg) translate(0, 250%);
              }
              .info {
                display: none;
              }
              &.active {
                .menu::after {
                  transform: rotate(135deg) ;
                  -webkit-transform: rotate(135deg) translate(250%, 0);
                }
                .info {
                  display: flex;
                  width: calc(100% + 30px);
                  padding: 10px 15px;
                  font-size: 80%;
                  font-weight: 400;
                  line-height: 1.5;
                  background-color: #0000001a;
                  transform: translateX(-15px);
                }
              }
            }
            .social-network {
              padding-top: 15px;
              width: 100%;
              display: flex;
              justify-content: center;
            }
          }
        }
      }
    }
  }
`;

export default function Footer() {
  const navigate = useNavigate();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  return (
    <FooterStyled>
      <div className='footer infos'>
        <div className='cont'>
          <div className='left'>
            <div className='brand-logo'>
              <img src={smallLogo} alt='' />
              <div className='customer-service'>
                <div>客服專線:</div>
                <div>01-23345678</div>
                <div>地址:</div>
                <div>台北市中正區承德路一段2號</div>
                <div>服務時段：</div>
                <div>週一 ~ 週五</div>
                <div>09:00~12:30 ; 13:30~18:00</div>
              </div>
            </div>
            <div className='wrapper'>
              <div className={`info-title ${isAboutOpen ? "active" : ""}`}>
                <div className='title about' onClick={() => navigate("/about")}>
                  關於
                </div>
                <div className='info'>聯絡我們</div>
                <div className='info' onClick={() => navigate("/blogs")}>
                  部落格
                </div>
                <div
                  className='menu'
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                ></div>
              </div>
              <div className={`info-title ${isProductsOpen ? "active" : ""}`}>
                <div
                  className='title products'
                  onClick={() => navigate("/product/all")}
                >
                  全部商品
                </div>
                <div className='info' onClick={() => navigate("/order/query")}>
                  訂單查詢
                </div>
                <div className='info' onClick={() => navigate("/faq#order")}>
                  訂單相關說明
                </div>
                <div
                  className='menu'
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                ></div>
              </div>
              <div className={`info-title ${isFaqOpen ? "active" : ""}`}>
                <div
                  className='title faq'
                  onClick={() => navigate("/faq#member_level")}
                >
                  付款方式說明
                </div>
                <div className='info' onClick={() => navigate("/faq#shipping")}>
                  寄送方式說明
                </div>
                <div className='info' onClick={() => navigate("/faq#service")}>
                  售後服務說明
                </div>
                <div
                  className='menu'
                  onClick={() => setIsFaqOpen(!isFaqOpen)}
                ></div>
              </div>
              <div className={`info-title ${isMemberOpen ? "active" : ""}`}>
                <div
                  className='title member'
                  onClick={() => navigate("/faq#payment")}
                >
                  會員權益說明
                </div>
                <div
                  className='info'
                  onClick={() => navigate("/faq#members_redeem")}
                >
                  現金積點規則
                </div>
                <div className='info' onClick={() => navigate("/faq#policy")}>
                  隱私權條款
                </div>
                <div
                  className='menu'
                  onClick={() => setIsMemberOpen(!isMemberOpen)}
                ></div>
              </div>
              <div className='social-network rigth'>
                <FacebookIcon className='icon' />
                <LineIcon className='icon' />
                <div className='icon homepage' onClick={() => navigate("/")}>
                  <HomeIcon />
                </div>
              </div>
            </div>
          </div>
          <div className='social-network rigth'>
            <FacebookIcon className='icon' />
            <LineIcon className='icon' />
            <div className='icon homepage' onClick={() => navigate("/")}>
              <HomeIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='footer down'>
        <div className='cont'>
          <div className='customer-service'>
            <div>客服專線:</div>
            <div>01-23345678</div>
            <div>地址:</div>
            <div>台北市中正區承德路一段2號</div>
            <div>服務時段：</div>
            <div>週一 ~ 週五</div>
            <div>09:00~12:30 ; 13:30~18:00</div>
          </div>
          <PowerByIcon className='power-by' />
        </div>
      </div>
    </FooterStyled>
  );
}
