import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartNoneIcon, DeleteProductIcon } from "../../assets/icons";

const CartStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 4fr minmax(300px, 1fr);
  .back-drop {
    background: rgba(60, 60, 60, 0.6);
  }

  .cart-container {
    color: var(--white);
    z-index: 999;
    background-color: var(--button-background);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    //scroll底色
    &::-webkit-scrollbar-track {
      background-color: #ddd;
    }
    //scroll寬度
    &::-webkit-scrollbar {
      width: 6px;
      background-color: black;
    }
    //scroll本體顏色
    &::-webkit-scrollbar-thumb {
      background-color: #808080;
    }
    .cart-title {
      padding: 17px;
      border-bottom: 1px solid var(--white);
      margin-bottom: 10px;
    }
    .wrapper{
      display: flex;
      flex-flow: column;
      gap: 10px;
    }
    .card-items {
      width: 100%;
      padding: 0 15px;
      display: flex;
      flex-flow: column;
      gap: 10px;
    }
    .no-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--white);
      color: var(--secondary);
      margin: 0 25px 0 15px;
      padding: 10px;
      .icon {
        color: var(--secondary);
        margin-bottom: 10px;
      }
    }
    button {
      margin: 10px 15px;
      font-size: 18px;
      font-weight: 400;
      color: var(--white);
      background: #c14848;
      border-radius: 5px;
      padding: 15px 30px;
      cursor: pointer;
    }
  }
`;

const StyledCardItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 10px;
  background: var(--white);
  padding: 10px;
  color: #000;
  .picture {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    display: flex;
    flex-flow: column;
    gap: 10px;
    .wrapper {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      gap: 5px;
      .name {
        color: #333;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    .price {
      font-size: 14px;
      line-height: 16px;
      color: #808080;
    }
    .count {
      width: 100%;
      font-size: 1rem;
      line-height: 2rem;
      padding: 0 10px;
      border: 1px solid #d9d9d9;
      select {
        width: 100%;
        height: 40px;
        line-height: 38px;
        border: none;
        color: #808080;
        font-size: 1rem;
        &:focus {
          outline: none;
        }
      }
    }
    .subTotal {
      text-align: right;
      font-size: 16px;
      line-height: 1;
      font-weight: 700;
    }
  }
`;

export default function CartModal({ setIsCartOpen, productInCart }) {
  const navigate = useNavigate();
  function goToCart() {
    navigate("/cart");
    setIsCartOpen(false);
  }
  return (
    <CartStyled>
      <div className="back-drop" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-container">
        <div className="cart-title">我的購物車</div>
        <div className="wrapper">
        {productInCart.length !== 0 ? (
          productInCart?.map((product) => {
            return (
              <div className="card-items" key={product.product.id}>
                <CatrItem product={product} />
              </div>
            );
          })
        ) : (
          <div className="no-item">
            <CartNoneIcon className="icon" />
            <span>購物車內無任何商品</span>
          </div>
        )}</div>
        <button onClick={goToCart}>前往結帳</button>
      </div>
    </CartStyled>
  );
}

export const CatrItem = ({ product }) => {
  const options = [];
  for (let i = 1; i <= 999; i++) {
    options.push({ value: i, label: i });
  }
  return (
    <StyledCardItem className="card-item">
      <div className="picture">
        <img src={product?.product.Images.url} alt={product?.product.name} />
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="name">{product?.product.name}</div>
          <div className="icon">
            <DeleteProductIcon size="16" />
          </div>
        </div>
        <div className="price">{product?.product.price}元</div>
        <div className="count">
          <select defaultValue={options[product?.count - 1].value}>
            {Array.prototype.map.call(options, ({ value, label }, index) => {
              return (
                <option key={index} value={value}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="subTotal">
          {Math.floor(product?.product.price * product?.count * 0.8)}元
        </div>
      </div>
    </StyledCardItem>
  );
};
