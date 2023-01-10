import React from "react";
import styled from "styled-components";
import { FacebookIcon, LineIcon } from "../../assets/icons";

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
      *{
        margin: 0 10px;
      }
    }

    .social-network {
      display: flex;
      * {
        margin: 0 10px;
      }

      .icon {
        width: 30px;
        height: 30px;
      }
    }
  }

  .down {
    height: 208px;
    display: flex;
    justify-content: space-between;
    background-color: var(--power-by);

    .customer-service {
      color: var(--white);
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <div className="footer infos">
        <div className="left">
          <div className="brand-logo">logo</div>
          <div className="info-title">
            關於
            <div className="info">聯絡我們</div>
            <div className="info">部落格</div>
          </div>
          <div className="info-title">
            全部商品
            <div className="info">訂單查詢</div>
            <div className="info">訂單相關說明</div>
          </div>
          <div className="info-title">
            付款方式說明
            <div className="info">寄送方式說明</div>
            <div className="info">售後服務說明</div>
          </div>
          <div className="info-title">
            會員權益說明
            <div className="info">現金積點規則</div>
            <div className="info">隱私權條款</div>
          </div>
        </div>
        <div className="social-network">
          <FacebookIcon className="icon" />
          <LineIcon className="icon" />
          <div className="icon">h</div>
        </div>
      </div>
      <div className="footer down">
        <div className="customer-service">
          <div>客服專線:</div>
          <div>02-3322-5628</div>
          <div>地址:</div>
          <div>台北市中正區南昌路二段81號七樓之一</div>
          <div>服務時段：</div>
          <div>週一 ~ 週五</div>
          <div>09:00~12:30 ; 13:30~18:00</div>
        </div>
        <div className="power-by">powered by W A C A</div>
      </div>
    </FooterStyled>
  );
}
