import React from "react";
import styled from "styled-components";
import { CancelIcon } from "../../../assets/icons";

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
    background-image: url("https://picsum.photos/id/20/400");
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
  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--text-red);
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 992px) {
    .title {
      font-size: 16px;
      height: 30px;
      line-height: 16px;
    }
  }
  @media screen and (max-width: 577px) {
    .title {
      font-size: 12px;
      height: 28px;
      line-height: 12px;
    }
  }
`;

const AllProducts = ({
  productsAll,
  handleTogglePriceModal,
  deleteProduct,
}) => {
  return (
    <>
      {productsAll?.map((product) => {
        return (
          <StyledCard
            className='card'
            key={product.id}
            onClick={handleTogglePriceModal}
            id={product.id}
          >
            <div
              className='product'
              style={{ backgroundImage: `url('${product.Images.url}')` }}
              id={product.id}
            ></div>
            <div className='wrapper' id={product.id}>
              <h4 className='title' id={product.id}>
                {product.name}
              </h4>
              <div className='price' id={product.id}>
                ${product.price}
              </div>
              <div className='discount-price' id={product.id}>
                ${Math.floor(product.price * 0.8)}
              </div>
            </div>
            <div
              className='delete btn'
              onClick={(e) => {
                deleteProduct?.(product.id);
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <CancelIcon className='btn' />
            </div>
          </StyledCard>
        );
      })}
    </>
  );
};

export default AllProducts;
