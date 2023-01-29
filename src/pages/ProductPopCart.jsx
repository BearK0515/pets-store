import React from "react";
import styled from "styled-components";
import { CancelIcon } from "../assets/icons/index";


const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(60, 60, 60, 0.6);
    z-index: 50;
  }
  .content {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--white);
    border-radius: 4px;
    max-width: 250px;
    min-width: 250px;
    z-index: 99;
  }
`;

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  aspect-ratio: 3/4;
  &:hover {
    cursor: pointer;
  }
  .product {
    width: 100%;
    aspect-ratio: 1/1;
    background-size: cover;
    background-image: url("https://picsum.photos/id/24/400");
  }
  .wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 5px 0;
    padding: 10px;
  }
  .title {
    text-align: center;
    font-size: 18px;
    height: 48px;
    line-height: 24px;
    color: #333;
  }
  .price {
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-decoration: line-through;
  }
  .discount-price {
    font-family: Roboto, sans-serif;
    font-size: 100%;
    font-weight: 700;
    color: var(--text-red);
  }
  .cancel {
    position: absolute;
    top: -40px;
    right: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  .adjust-price {
    font-family: Roboto, sans-serif;
    width: 50%;
    height: 26px;
    padding: 8px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: var(--text-header);
    outline: none;
    border: none;
    border-bottom: 2px solid var(--gray);
    &:hover,
    :focus {
      border-bottom: 2px solid var(--danger);
    }
  }
  .adjust-price-wrapper {
    font-family: Roboto, sans-serif;
    display: flex;
    justify-content: center;
  }
`;

// handle 參數由 Product 傳入
const ProductPopCart = ({ handleToggleCartModal }) => {
  return (
    <StyledModalContainer>
      {/*overlay獨立*/}
      <div className="overlay" onClick={handleToggleCartModal}></div> 
        <div className="content">
          <StyledCard>
            <button className="cancel" onClick={handleToggleCartModal}>
              <CancelIcon />
            </button>
            <div className="product"></div>
            <div className="wrapper">
              <h4 className="title"> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className="price">$750</div>
              <div className="discount-price">$690</div>
              <div className="adjust-price-wrapper">
                <p>$</p>
                <input
                  className="adjust-price"
                  type="text"
                  placeholder="請輸入價格"
                />
              </div>
            </div>
          </StyledCard>
        </div>
    </StyledModalContainer>
  );
};

export default ProductPopCart;
