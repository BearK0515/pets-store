import React, { useState } from 'react';
import styled from 'styled-components';
import { CartIcon } from '../assets/icons/index';
import { NavLink as Link } from 'react-router-dom';
import ProductPopCart from './ProductPopCart';

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  aspect-ratio: 3/4;

  .product {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    background-size: cover;
    background-image: url('https://picsum.photos/id/20/400');
  }
  .addCart {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: var(--red);
    text-align: center;
    border-width: 1px;
    border-radius: 10%;
  }
  .wrapper {
    display: flex;
    flex-flow: column;
    align-items: left;
    gap: 5px 0;
    padding: 10px;
    width: 100%;
  }
  .title {
    text-align: left;
    font-size: 0.5em;
    height: 48px;
    line-height: 24px;
    color: #333;
  }
  .price {
    text-align: left;
    font-family: Roboto, sans-serif;
    font-size: 0.2em;
    font-weight: 700;
    text-decoration: line-through;
    color: var(--gray-dark);
  }
  .discount-price {
    text-align: left;
    font-family: Roboto, sans-serif;
    font-size: 0.7em;
    font-weight: 700;
    color: var(--text-red);
  }
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0 auto;
  height: 40px;
  background-color: ${(props) =>
    props.active ? 'var(--white)' : 'var(--footer-background)'};
  color: ${(props) =>
    props.active ? ' var(--footer-background)' : 'var(--white)'};
  border: ${(props) =>
    props.active ? '2px solid var(--footer-background)' : ''};
  font-size: 20px;
  font-weight: 400;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductItem = ({id, price, image, name}) => {
  const [addCartPop, setAddCartPop] = useState(false);

  const handleToggleCartModal = () => {
    setAddCartPop(!addCartPop);
  };

  return (
    <>
      <StyledCard id={id}>
        <div className='product' style={{ backgroundImage: `url('${image}')` }}>
          <NavLink className='addCart' onClick={handleToggleCartModal}>
            <CartIcon style={{ fontSize: '20px', cursor: 'pointer' }} />
          </NavLink>
        </div>
        <div className='wrapper'>
          <h4 className='title'>{name}</h4>
          <div className='price'>${price}</div>
          <div className='discount-price'>${Math.floor(price * 0.8)}</div>
        </div>
      </StyledCard>
      {addCartPop && (
        <ProductPopCart id={id} name={name} price={price}
          handleToggleCartModal={handleToggleCartModal}
        />
      )}
    </>
  );
};
