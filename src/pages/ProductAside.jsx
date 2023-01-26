import React from 'react'
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { BackHomeIcon, AboutIcon, ProductsIcon } from "../assets/icons/index"

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

const ProductAside = () => {
  const navigate = useNavigate();
  const page = useLocation().pathname
  return ( 
    <Aside>
        <div className='aside-content'>
            <NavLink onClick={() => navigate("/")}>
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
   );
};

export default ProductAside
