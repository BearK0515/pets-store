import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { MinusIcon, PlusIcon } from '../assets/icons/index';
import { addTocart, setCount as countRedux } from '../store/productSlice';
import { useNavigate } from 'react-router-dom';

const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 999;

  .overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(60, 60, 60, 0.6);
    z-index: 50;
  }
  .content {
    position: relative;
    max-width: 540px;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    margin: 0 auto;
    background: var(--white);
    border-radius: 4px;
    z-index: 999999;
  }
`;

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 10px;

  .wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 5px 0;
  }
  .title-wrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding-top: 10px;
  }
  .title {
    text-align: left;
    font-size: 18px;
    height: 48px;
    line-height: 20px;
    color: #333;
    width: 100%;
  }

  .price-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    width: 100%;

    .price {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      font-weight: 700;
      text-decoration: line-through;
      color: var(--gray-dark);
      text-align: left;
    }
    .discount-price {
      font-family: Roboto, sans-serif;
      font-size: 100%;
      font-weight: 700;
      color: var(--text-red);
    }
  }

  .count-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    padding-top: 10px;

    .count-name {
      box-sizing: border-box;
      display: block;
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
      padding-bottom: 5px;
      text-align: left;
    }

    .count-select-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px;
      border: 1px solid #ccc;
      font-weight: bold;
    }

    .count-number {
      font-size: 16px;
      padding: 0 10px;
    }
  }

  .button-wrapper {
    display: flex;
    margin-top: 10px;
    gap: 10px;
    width: 100%;
    .addCart {
      flex: 1 1 50%;
      border-radius: 4px;
      padding: 11px 15px;
      background-color: var(--gray-dark);
      border-color: var(--gray-dark);
      color: var(--white);
      cursor: pointer;
    }
    .toCartPage {
      flex: 1 1 50%;
      border-radius: 4px;
      padding: 11px 15px;
      background-color: var(--red-dark);
      border-color: var(--red-dark);
      color: var(--white);
      cursor: pointer;
    }
  }
`;

// handle 參數由 Product 傳入
const ProductPopCart = ({ handleToggleCartModal, product, image }) => {
  console.log(product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const handleDecrease = () => {
    if (count === 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleAddCart = () => {
    const id = product.id;
    const name = product.name;
    const price = product.price;

    dispatch(addTocart({ id, name, price, image, count }));

    dispatch(
      countRedux({
        productId: id,
        count: count
      })
    );

    Swal.fire({
      title: '加入購物車成功',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
      position: 'center'
    });

    handleToggleCartModal();
    return;
  };

  const handleToCartPage = () => {
    const id = product.id;
    const name = product.name;
    const price = product.price;

    dispatch(addTocart({ id, name, price, image, count }));

    dispatch(
      countRedux({
        productId: id,
        count: count
      })
    );

    Swal.fire({
      title: '立即購買成功',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000,
      position: 'center'
    }).then(() => {
      navigate(`/cart`);
    });
    handleToggleCartModal();
    return;
  };

  return (
    <StyledModalContainer key={product?.id} id={product?.id}>
      {/*overlay獨立*/}
      <div className='overlay' onClick={handleToggleCartModal}></div>
      <div className='content'>
        <StyledCard className='wrapper'>
          <div className='title-wrapper'>
            <h4 className='title'>{product?.name}</h4>
          </div>
          <div className='price-wrapper'>
            <div className='price'>${product?.price * count}</div>
            <div className='discount-price'>
              ${Math.floor(product?.price * 0.8 * count)}
            </div>
          </div>
          <div className='count-wrapper'>
            <label className='count-name'>數量</label>
            <div className='count-select-wrapper'>
              <button onClick={handleDecrease}>
                <MinusIcon
                  className={count > 1 ? 'minus active' : 'minus'}
                  style={{ cursor: 'pointer' }}
                />
              </button>
              <div className='count-number'>{count}</div>
              <button onClick={handleIncrease}>
                <PlusIcon className='plus' style={{ cursor: 'pointer' }} />
              </button>
            </div>
          </div>
          <div className='button-wrapper'>
            <button className='addCart' onClick={handleAddCart}>
              加入購物車
            </button>
            <button className='toCartPage' onClick={handleToCartPage}>
              立即購買
            </button>
          </div>
        </StyledCard>
      </div>
    </StyledModalContainer>
  );
};

export default ProductPopCart;
