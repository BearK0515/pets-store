import React from 'react'
import styled from "styled-components";
import { CartIcon } from "../assets/icons/index"


const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 3vmin;
`

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
    background-image: url("https://picsum.photos/id/20/400");
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

const ProductAll = () => {
  return (
        <ProductList>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button></div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
          <StyledCard>
            <div className='product'>
              <button className='addCart'>
                <CartIcon style={{ fontSize: "20px", cursor: "pointer"}}/>
              </button>
            </div>
            <div className='wrapper'>
              <h4 className='title'> 【毛孩時代】腎臟專科保健粉(30包/盒)</h4>
              <div className='price'>$750</div>
              <div className='discount-price'>$690</div>
            </div>
          </StyledCard>
        </ProductList>
  );
};

export default ProductAll