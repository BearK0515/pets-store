import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartNoneIcon } from "../../assets/icons";

const CartStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
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

    .cart-title {
      padding: 17px;
      border-bottom: 1px solid var(--white);
      margin-bottom: 10px;
    }
    .card-items {
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
      margin: 15px;
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

export default function CartModal({ setIsCartOpen, cartItem }) {
  const navigate = useNavigate();
  function goToCart(){
    navigate("/cart");
    setIsCartOpen(false);
  }
  return (
    <CartStyled>
      <div className='back-drop' onClick={() => setIsCartOpen(false)}></div>
      <div className='cart-container'>
        <div className='cart-title'>我的購物車</div>
        {cartItem ? (
          <div className='cart-items'>
            <div className='cart-item'></div>
          </div>
        ) : (
          <div className='no-item'>
            <CartNoneIcon className='icon' />
            <span>購物車內無任何商品</span>
          </div>
        )}
        <button onClick={goToCart}>前往結帳</button>
      </div>
    </CartStyled>
  );
}
