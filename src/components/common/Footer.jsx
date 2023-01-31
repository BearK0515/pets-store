import React from "react";
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
    justify-content: space-around;
    align-items: center;
    height: 160px;
    background-color: var(--footer-background);
    color: var(--white);

    .left {
      display: flex;
      align-items: center;
      * {
        margin: 0 10px;
      }
      .brand-logo {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
        }
      }

      .info-title {
        font-size: 16px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: center;

        * {
          margin-top: 10px;
        }
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
    height: 208px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--power-by);

    * {
      margin-top: 5px;
    }

    .customer-service {
      color: var(--white);
    }
  }
`;

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterStyled>
      <div className='footer infos'>
        <div className='left'>
          <div className='brand-logo'>
            <img src={smallLogo} alt='' />
          </div>
          <div className='info-title'>
            <div className='title' onClick={() => navigate("/about")}>
              關於
            </div>
            <div className='info'>聯絡我們</div>
            <div className='info' onClick={() => navigate("/blogs")}>
              部落格
            </div>
          </div>
          <div className='info-title'>
            <div className='title' onClick={() => navigate("/product/all")}>
              全部商品
            </div>
            <div className='info' onClick={() => navigate("/order/query")}>
              訂單查詢
            </div>
            <div className='info' onClick={() => navigate("/faq#order")}>
              訂單相關說明
            </div>
          </div>
          <div className='info-title'>
            <div
              className='title'
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
          </div>
          <div className='info-title'>
            <div className='title' onClick={() => navigate("/faq#payment")}>
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
          </div>
        </div>
        <div className='social-network rigth'>
          <FacebookIcon className='icon' />
          <LineIcon className='icon' />
          <div className='icon homepage' onClick={()=>navigate("/")}>
            <HomeIcon />
          </div>
        </div>
      </div>
      <div className='footer down'>
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
    </FooterStyled>
  );
}
