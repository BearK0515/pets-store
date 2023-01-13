import React from 'react'
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { BackHomeIcon, AboutIcon, ProductsIcon, HomeIcon, CartIcon } from "../assets/icons/index"


const ProductStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-gap: 0 15px;
  grid-template-columns: minmax(150px, 1fr) 750px;
  max-width: 930px;
  margin: 30px auto;
  
`
const Aside = styled.div`
    display: block;
    font-size: 10px;
    padding-left: 20px;

  .aside-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
  }
`
const NavLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  line-height: 2;
  color: var(--dark);
  font-weight: bolder;
  cursor: pointer;
  color: ${(props) =>
      props.active ? "var(--text-hover)" : "var(--dark);"};
  &:hover {
    color: var(--text-hover)
  }

`;

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  font-size: 30px;
  text-align: center;
  
`

const GoToHome = styled.div`
  display: flex;
  justify-content: flex-end;
  align-contents: center;
  width: 100%;
  text-align: right;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--dark);
`

const Breadcrumb = styled.div`
  margin-bottom: 20px;
  position: relative;
`

const ProductsSort = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 3vmin;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--gray);
      color: var(--white);
      font-size: 14px;
      line-height: 32px;
      &:hover {
        background-color: #9e9e9e;
        cursor: pointer;
      }
      &.active {
        background-color: var(--gray-dark);
      }
    }
  }
`;

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

const ProductCat = () => {
  const navigate = useNavigate();
  const page = useLocation().pathname
  return (
    <ProductStyled>
      <Aside>
        <div className='aside-content'>
            <NavLink onClick={() => navigate("/home")}>
              <BackHomeIcon style={{ position: "absolute", left: "-18px" }}/>
              首頁
            </NavLink>
            <NavLink  onClick={() => navigate("/about")}>
              <AboutIcon style={{ position: "absolute", left: "-18px" }}/>
              關於
            </NavLink>
          {page.includes("all") ? 
            (<NavLink active onClick={() => navigate("/product/all")}>
              <ProductsIcon style={{ position: "absolute", left: "-18px" }}/>
              全部商品
            </NavLink>) :
            (<NavLink  onClick={() => navigate("/product/all")}>
              <ProductsIcon style={{ position: "absolute", left: "-18px" }}/>
              全部商品
            </NavLink>
          )}
          {page.includes("dog") ? 
            (<NavLink active onClick={() => navigate("/product/dog")}>狗狗專區</NavLink>) : (<NavLink onClick={() => navigate("/product/dog")}>狗狗專區</NavLink>
          )}
          {page.includes("cat") ? 
            (<NavLink active  onClick={() => navigate("/product/cat")}>貓咪專區</NavLink>) : (<NavLink onClick={() => navigate("/product/cat")}>貓咪專區</NavLink>
            )}
          {page.includes("blogs") ? 
            (<NavLink active onClick={() => navigate("/blogs")}>部落格</NavLink>) : (<NavLink onClick={() => navigate("/blogs")}>部落格</NavLink>
          )}
        </div>
      </Aside>
      <ProductWrapper>
        <GoToHome><HomeIcon onClick={() => navigate("/home")} style={{ color:'var(--dark)',cursor: "pointer" }} />＞全部商品</GoToHome>
        <Breadcrumb />
        <ProductsSort>
          <ul className='sort-nav'>
            <li className='active'>熱銷排行</li>
            <li>最新上架</li>
            <li>價格</li>
          </ul>
        </ProductsSort>
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
      </ProductWrapper>
    </ProductStyled>
  );
};

export default ProductCat