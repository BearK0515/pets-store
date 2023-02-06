import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { adjustProduct } from "../../api/adminAuth";
import { productDetail } from "../../api/products";
import { CancelIcon } from "../../assets/icons";

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
  .button {
    width: 100%;
    background: #c14848;
    color: var(--white);
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const AdjustPriceModal = ({
  setIsOpenPriceModal,
  handleTogglePriceModal,
  productId,
}) => {
  const priceRef = useRef(null);
  const [singleProduct, setSingleProduct] = useState(null);
  //PUT修改價錢
  async function handleSubmit() {
    const adjustPrice = priceRef?.current?.value;
    try {
      await adjustProduct({ productId, adjustPrice });
      console.log(adjustPrice);
      setIsOpenPriceModal(false);
    } catch (error) {
      console.error(error);
    }
  }
  //GET單一商品
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const resSingleProduct = await productDetail(productId);
        setSingleProduct(resSingleProduct);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleProduct();
  }, [productId, setSingleProduct]);
  return (
    <StyledModalContainer>
      <div className='overlay'>
        <div className='content'>
          <StyledCard>
            <button className='cancel' onClick={handleTogglePriceModal}>
              <CancelIcon />
            </button>
            <div
              className='product'
              style={{
                backgroundImage: `url('${singleProduct?.Image[0]?.url}')`,
              }}
            ></div>
            <div className='wrapper'>
              <h4 className='title'>{singleProduct?.name}</h4>
              <div className='price'>${singleProduct?.price}</div>
              <div className='discount-price'>
                ${Math.floor(singleProduct?.price * 0.8)}
              </div>
              <div className='adjust-price-wrapper'>
                <p>$</p>
                <input
                  className='adjust-price'
                  type='text'
                  placeholder='請輸入價格'
                  ref={priceRef}
                />
              </div>
              <button
                className='button'
                onClick={() => handleSubmit(singleProduct?.id)}
              >
                送出
              </button>
            </div>
          </StyledCard>
        </div>
      </div>
    </StyledModalContainer>
  );
};

export default AdjustPriceModal;
