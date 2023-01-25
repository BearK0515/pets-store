import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import {
  CartIcon,
  CheckedIcon,
  FacebookIcon,
  LineIcon,
  MinusIcon,
  PlusIcon,
  TwitterIcon,
} from "../assets/icons";
import order from "../assets/images/order.png";

const StyledContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 30px 0;
  .cont {
    max-width: 1140px;
    margin: 0 10px;
    display: flex;
    flex-flow: column;
  }
  .item-area {
    margin-bottom: 30px;
    padding: 30px;
    outline: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
const StyledProdutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  .picture {
    display: flex;
    flex-flow: column;
    .preview {
      width: 100%;
      position: relative;
      aspect-ratio: 1/1;
      background-size: cover;
      background-image: url("https://picsum.photos/id/334/600/400");
      .number {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 10px;
        bottom: 10px;
        width: 60px;
        padding: 3px;
        border-radius: 20px;
        background-color: #33333380;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: var(--white);
        word-spacing: 1px;
      }
    }
    .pics {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      padding: 10px 10px 0;
      gap: 10px;
      .pic {
        aspect-ratio: 1/1;
        background-size: cover;
        background-image: url("https://picsum.photos/id/611/600/400");
        cursor: pointer;
      }
    }
    .share {
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      height: auto;
      div {
        font-size: 14px;
        line-height: 20px;
      }
      .icon {
        width: 30px;
        height: 30px;
      }
    }
  }
  .information {
    display: flex;
    flex-flow: column;
    align-items: start;
    width: 100%;
    .number {
      font-size: 14px;
      line-height: 1;
      color: #aaa;
    }
    .name {
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      color: #212529;
      word-break: break-all;
      margin: 10px 0;
    }
    .price,
    .discount-price {
      width: 100%;
      display: flex;
      align-items: baseline;
      justify-content: end;
      font-size: 16px;
      font-weight: bolder;
      line-height: 16px;
      color: #999;
      .unit-price {
        text-decoration: line-through;
      }
    }
    .price {
      margin-top: 30px;
    }
    .discount-price {
      margin-top: 3px;
      color: #cb3747;
      line-height: 28px;
      margin-bottom: 30px;
      span {
        font-size: 22px;
      }
      .unit-price {
        font-size: 28px;
        text-decoration: none;
      }
    }
    .row {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 20px;
      color: #333;
      .count-box {
        width: 66%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ccc;
        div {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          .minus {
            &.active {
              color: #c14848;
            }
          }
          &.count {
            cursor: default;
          }
        }
      }
      & + .count-wrapper {
        margin-bottom: 10px;
      }
      & + .button-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 12px 15px;
          color: #fff;
          font-size: 1.125rem;
          border-radius: 5px;
          cursor: pointer;
        }
        .cart {
          display: flex;
          background-color: #32373a;
          gap: 5px;
          span {
            width: 20px;
            height: 20px;
          }
        }
        .buy {
          background-color: #c14848;
        }
      }
    }
    .title {
      margin: 30px 0 15px;
      padding-left: 10px;
      font-size: 16px;
      color: #333;
      border-left: 2px solid #32373a;
    }
    .content {
      padding: 10px;
      background-color: #f9f9f9;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      word-break: break-all;
      label {
        width: 100%;
        display: flex;
        justify-content: start;
        font-weight: 700;
        color: #333;
      }
      .info {
        width: 100%;
        display: flex;
        justify-content: start;
        margin: 5px 0 15px;
      }
    }
  }
`;
const StyledTitle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  width: 100%;
  h2 {
    font-size: 18px;
    line-height: 18px;
  }
  hr {
    width: 100%;
    margin: 10px 0;
    border-top: 1px solid var(--border-hr);
  }
`;
const StyledImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  img {
    width: 100%;
  }
  &.order {
    cursor: pointer;
  }
`;
const StyleProductsWrapper = styled.div`
  .add {
    font-size: 14px;
    line-height: 1;
    text-align: right;
    margin-bottom: 10px;
    font-weight: 400;
    span {
      color: #cb3747;
      margin: 0 5px;
      font-weight: bolder;
    }
  }
  .produts-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    .card {
      display: flex;
      flex-flow: column;
      font-size: 1rem;
      font-weight: 400;
      border: 1px solid #ccc;
      &.active {
        border-color: #c14848;
      }
      header {
        height: 25px;
        background-color: #efefef;
      }
      .card-wrapper {
        padding: 10px;
        display: grid;
        grid-template-columns: 75px 1fr;
        .pic {
          aspect-ratio: 1/1;
          background-size: cover;
          background-image: url("https://picsum.photos/id/312/600/400");
        }
        .information {
          padding-left: 10px;
          .name {
            display: flex;
            justify-content: start;
            height: 38px;
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            margin-bottom: 5px;
            cursor: pointer;
          }
          .price-wrapper {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            margin-bottom: 10px;
            .price {
              font-size: 14px;
              letter-spacing: 1px;
              font-weight: 500;
              line-height: 1.2;
            }
            .discount-price {
              font-size: 14px;
              letter-spacing: 1px;
              font-weight: 700;
              line-height: 1.2;
            }
          }
          .button {
            display: flex;
            justify-content: end;
          }
        }
      }
    }
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  background-color: ${(props) => (props.selected ? "#c14848" : "var(--white)")};
  color: ${(props) => (props.selected ? "var(--white)" : "#aaa")};
  border: ${(props) =>
    props.selected ? "1px solid #c14848" : "1px solid #aaa"};
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  .checked {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledProductInfo = styled.div`
  width: 100%;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
`;
const StyledCart = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  width: 100%;
  hr {
    width: 100%;
    margin: 10px 0;
    border-top: 1px solid var(--border-hr);
  }
  .content-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 8fr 4fr;
    margin-bottom: 15px;
    h2 {
      display: flex;
      justify-content: start;
      font-size: 14px;
      line-height: 20px;
    }
    .price-wrapper {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: end;
      .price {
        font-size: 12px;
        line-height: 14px;
        color: #999;
        font-weight: bolder;
        span {
          text-decoration: line-through;
        }
      }
      .discount-price {
        font-size: 14px;
        line-height: 1;
        font-weight: bolder;
        color: #cb3747;
        span {
          margin-left: 3px;
          font-size: 22px;
        }
      }
    }
  }
  .shipping-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .style-count-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      .count-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #ccc;
        div {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          .minus {
            &.active {
              color: #c14848;
            }
          }
          &.count {
            cursor: default;
          }
        }
      }
    }
    .button-group {
      padding: 0 15px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 11px 15px;
        color: #fff;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
      }
      .cart {
        display: flex;
        background-color: #32373a;
        span {
          width: 20px;
          height: 20px;
        }
      }
      .buy {
        background-color: #c14848;
      }
    }
  }
`;

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const handledecrease = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      {/* 加入購物車 */}
      <StyledContainer>
        <div className='cont'>
          <div className='item-area'>
            <StyledProdutWrapper>
              <div className='picture'>
                <div className='preview'>
                  <div className='number'>1/3</div>
                </div>
                <div className='pics'>
                  <div className='pic pic1'></div>
                  <div className='pic pic2'></div>
                  <div className='pic pic3'></div>
                </div>
                <div className='share'>
                  <div>分享商品到</div>
                  <FacebookIcon className='icon' />
                  <TwitterIcon className='icon' />
                  <LineIcon className='icon' />
                </div>
              </div>
              <div className='information'>
                <div className='number'>
                  商品編號：<span>13121100</span>
                </div>
                <div className='name'>天然型態6合1專利化毛粉(30包/盒)</div>
                <div className='price'>
                  <span>TWD $</span>
                  <span className='unit-price'>450</span>
                </div>
                <div className='discount-price'>
                  <span>TWD $</span>
                  <span className='unit-price'>380</span>
                </div>
                <div className='row style'>
                  <p>規格</p>
                  <p>30包/盒</p>
                </div>
                <div className='row count-wrapper'>
                  <p>數量</p>
                  <div className='count-box'>
                    <div onClick={handledecrease}>
                      <MinusIcon
                        className={count > 1 ? "minus active" : "minus"}
                      />
                    </div>
                    <div className='count'>{count}</div>
                    <div onClick={() => setCount(count + 1)}>
                      <PlusIcon className='plus' />
                    </div>
                  </div>
                </div>
                <div className='row button-group'>
                  <button className='button cart'>
                    <span>
                      <CartIcon size='20' />
                    </span>
                    加入購物車
                  </button>
                  <button className='button buy'>立即購買</button>
                </div>
                <div className='title'>
                  <h5>運送&付款</h5>
                </div>
                <div className='content'>
                  <label htmlFor=''>運送方式</label>
                  <div className='info'>
                    貨到付款、一般宅配、國際快遞、7-11取貨、全家取貨
                  </div>
                  <label htmlFor=''>付款方式</label>
                  <div className='info'>
                    轉帳匯款、宅配代收、7-11取貨付款、全家取貨付款、信用卡
                  </div>
                </div>
              </div>
            </StyledProdutWrapper>
          </div>
        </div>
      </StyledContainer>
      {/* 加購商品 */}
      <StyledContainer>
        <div className='cont'>
          <StyleProductsWrapper className='item-area'>
            <StyledTitle className='title'>
              <h2>優惠加購</h2>
              <hr />
            </StyledTitle>
            <div className='add'>
              加購可選
              <span>1</span>件
            </div>
            <div className='produts-wrapper'>
              {/* data.map() */}
              <AddProductCard />
              <AddProductCard />
              <AddProductCard />
            </div>
          </StyleProductsWrapper>
        </div>
      </StyledContainer>
      {/* 商品詳情 */}
      <StyledContainer>
        <div className='cont'>
          <div className='item-area'>
            <StyledTitle className='title'>
              <h2>商品詳情</h2>
              <hr />
            </StyledTitle>
            {/* productInfo.map() */}
            <StyledProductInfo className='product-info'>
              <img src='https://picsum.photos/id/142/600' alt='' />
            </StyledProductInfo>
            <StyledImage
              className='order'
              onClick={() => Navigate("/product/all")}
            >
              <img src={order} alt='' />
            </StyledImage>
            <StyledCart className='cart'>
              <hr />
              <div className='content-wrapper'>
                <h2>【毛孩時代】腎臟專科保健粉(30包/盒)</h2>
                <div className='price-wrapper'>
                  <div className='price'>
                    TWD $<span>750</span>
                  </div>
                  <div className='discount-price'>
                    TWD $<span>690</span>
                  </div>
                </div>
              </div>
              <div className='shipping-wrapper'>
                <div className='style-count-wrapper'>
                  <p>規格： 30包/盒</p>
                  <div className='count-box'>
                    <div onClick={handledecrease}>
                      <MinusIcon
                        className={count > 1 ? "minus active" : "minus"}
                      />
                    </div>
                    <div className='count'>{count}</div>
                    <div onClick={() => setCount(count + 1)}>
                      <PlusIcon className='plus' />
                    </div>
                  </div>
                </div>
                <div className='button-group'>
                  <button className='button cart'>加入購物車</button>
                  <button className='button buy'>立即購買</button>
                </div>
              </div>
            </StyledCart>
          </div>
        </div>
      </StyledContainer>
    </>
  );
};

const AddProductCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  const handleToggleSelectButton = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className={`card ${isSelected ? "active" : ""}`}>
      <header></header>
      <div className='card-wrapper'>
        <div className='pic'></div>
        <div className='information'>
          <div className='name'>【超值加購】腎臟保健粉</div>
          <div className='row price-wrapper'>
            <div className='price'>1盒(每盒$690元)</div>
            <div className='discount-price'>
              TWD <span>$489</span>
            </div>
          </div>
          <div className='button'>
            {isSelected ? (
              <Button selected onClick={handleToggleSelectButton}>
                <div className='checked'>
                  <CheckedIcon />
                </div>
                已選購
              </Button>
            ) : (
              <Button onClick={handleToggleSelectButton}>選購</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;