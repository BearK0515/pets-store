import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CartIcon, PriceUpIcon, PriceDownIcon } from "../assets/icons/index";
import ProductPopCart from "./ProductPopCart";
import { NavLink as Link } from "react-router-dom";
import { productsHot, productsNew, productsPrice } from "../api/products";

const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vmin;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

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
const ProductsSort = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 3vmin;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    .sort {
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
    }
    .active {
      background-color: var(--gray-dark);
      &:hover {
        background-color: var(--gray-dark);
        cursor: pointer;
      }
    }
  }
`;
const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0 auto;
  height: 40px;
  background-color: ${(props) =>
    props.active ? "var(--white)" : "var(--footer-background)"};
  color: ${(props) =>
    props.active ? " var(--footer-background)" : "var(--white)"};
  border: ${(props) =>
    props.active ? "2px solid var(--footer-background)" : ""};
  font-size: 20px;
  font-weight: 400;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const ProductAll = () => {
  const [productHot, setProductHot] = useState([]);
  const [productNew, setProductNew] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [productPriceOrigin, setProductPriceOrigin] = useState([]);
  const [sortSelect, setSortSelect] = useState({
    top: true,
  });
  const [priceToggle, setPriceToggle] = useState("desc");
  const [addCartPop, setAddCartPop] = useState(false);
  const [addToCart, setAddToCart] = useState(null);

  //抓熱銷排行
  useEffect(() => {
    const getProductHotAsync = async () => {
      try {
        const resProductlHot = await productsHot();
        setProductHot(resProductlHot);
      } catch (err) {
        console.error(err);
      }
    };
    getProductHotAsync();
    return;
  }, [setProductHot]);

  //抓最新商品
  useEffect(() => {
    const getProductNewAsync = async () => {
      try {
        const resProductNew = await productsNew();
        setProductNew(resProductNew);
      } catch (err) {
        console.error(err);
      }
    };
    getProductNewAsync();
    return;
  }, [setProductNew]);

  //抓價格排序
  useEffect(() => {
    const getProductPriceAsync = async () => {
      try {
        const resProductPrice = await productsPrice();
        setProductPriceOrigin(resProductPrice);
        setProductPrice(resProductPrice);
      } catch (err) {
        console.error(err);
      }
    };
    getProductPriceAsync();
    return;
  }, [setProductPriceOrigin]);

  // 點擊時，其他二個會變成 undefine 為 false，當為 true 時不改變
  const sortSelectToggle = (e) => {
    if (e.target.value === "price") {
      if (priceToggle === "asc") {
        setProductPrice(
          productPriceOrigin.sort((a, b) => {
            return a.price - b.price;
          })
        );
        const priceSortOrder = priceToggle === "asc" ? "desc" : "asc";
        setPriceToggle(priceSortOrder);
      } else if (priceToggle === "desc") {
        setProductPrice(
          productPriceOrigin.sort((a, b) => {
            return b.price - a.price;
          })
        );
        const priceSortOrder = priceToggle === "asc" ? "desc" : "asc";
        setPriceToggle(priceSortOrder);
      }
    } else {
      setPriceToggle("desc");
      setProductPrice(
        productPriceOrigin.sort((a, b) => {
          return b.price - a.price;
        })
      );
    }
    if (sortSelect[e.target.value] === true) {
      return;
    } else {
      setSortSelect(() => ({
        [e.target.value]: !sortSelect[e.target.value],
      }));
    }
  };

  const handleToggleCartModal = () => {
    setAddCartPop(!addCartPop);
  };

  return (
    <>
      <ProductsSort>
        <ul className="sort-nav">
          <button
            key={1}
            className={sortSelect["top"] ? "sort active" : "sort"}
            onClick={sortSelectToggle}
            value="top"
          >
            熱銷排行
          </button>
          <button
            key={2}
            className={sortSelect["new"] ? "sort active" : "sort"}
            onClick={sortSelectToggle}
            value="new"
          >
            最新上架
          </button>
          <button
            key={3}
            className={sortSelect["price"] ? "sort active" : "sort"}
            onClick={sortSelectToggle}
            value="price"
          >
            價格
            {sortSelect["price"] &&
              (priceToggle === "asc" ? (
                <PriceUpIcon
                  style={{ fontSize: "14px", pointerEvents: "none" }}
                />
              ) : (
                <PriceDownIcon
                  style={{ fontSize: "14px", pointerEvents: "none" }}
                />
              ))}
          </button>
        </ul>
      </ProductsSort>
      <ProductList>
        {sortSelect["top"] &&
          productHot?.map((product) => {
            return (
              <StyledCard key={product.id}>
                <div
                  className="product"
                  style={{ backgroundImage: `url('${product.Images.url}')` }}
                >
                  <NavLink
                    className="addCart"
                    onClick={() => {
                      handleToggleCartModal();
                      setAddToCart(product);
                    }}
                  >
                    <CartIcon style={{ fontSize: "20px", cursor: "pointer" }} />
                  </NavLink>
                </div>
                <div className="wrapper">
                  <h4 className="title">{product.name}</h4>
                  <div className="price">${product.price}</div>
                  <div className="discount-price">
                    ${Math.floor(product.price * 0.8)}
                  </div>
                </div>
              </StyledCard>
            );
          })}
        {sortSelect["new"] &&
          productNew?.map((product) => {
            return (
              <StyledCard key={product.id}>
                <div
                  className="product"
                  style={{ backgroundImage: `url('${product.Images.url}')` }}
                >
                  <NavLink className="addCart" onClick={handleToggleCartModal}>
                    <CartIcon style={{ fontSize: "20px", cursor: "pointer" }} />
                  </NavLink>
                </div>
                <div className="wrapper">
                  <h4 className="title">{product.name}</h4>
                  <div className="price">${product.price}</div>
                  <div className="discount-price">
                    ${Math.floor(product.price * 0.8)}
                  </div>
                </div>
              </StyledCard>
            );
          })}
        {sortSelect["price"] &&
          productPrice?.map((product) => {
            return (
              <StyledCard key={product.id}>
                <div
                  className="product"
                  style={{ backgroundImage: `url('${product.Images.url}')` }}
                >
                  <NavLink className="addCart" onClick={handleToggleCartModal}>
                    <CartIcon style={{ fontSize: "20px", cursor: "pointer" }} />
                  </NavLink>
                </div>
                <div className="wrapper">
                  <h4 className="title">{product.name}</h4>
                  <div className="price">${product.price}</div>
                  <div className="discount-price">
                    ${Math.floor(product.price * 0.8)}
                  </div>
                </div>
              </StyledCard>
            );
          })}
      </ProductList>
      {/* Modal-跳出購物車 */}
      {addCartPop && (
        <ProductPopCart
          handleToggleCartModal={handleToggleCartModal}
          product={addToCart}
        />
      )}
    </>
  );
};

export default ProductAll;
