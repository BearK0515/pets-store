import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {
  AddProductModal,
  AdjustPriceModal,
  Products,
  Orders,
} from "../components/sectionAdmin";
import SingleOrder from "./SingleOrder";

const StyledContainer = styled.div`
  max-width: 1140px;
  height: 100vh;
  display: grid;
  grid-template-columns: 180px 1fr;
  margin: 0 auto;
`;
const StyledSidebar = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 0 15px;
  .button-wrapper {
    display: flex;
    flex-flow: column;
    margin-top: 60px;
    gap: 20px;
  }
  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0 auto;
    height: 30px;
    margin-bottom: 20px;
    background-color: var(--text-hover);
    color: var(--white);
    font-size: 20px;
    font-weight: 400;
    border-radius: 30px;
    &:hover {
      cursor: pointer;
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
const AdminIndex = () => {
  const page = useLocation().pathname;
  const navigate = useNavigate();
  const [isOpenPriceModal, setIsOpenPriceModal] = useState(false);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  const handleTogglePriceModal = () => {
    setIsOpenPriceModal(!isOpenPriceModal);
  };
  const handleToggleProductModal = () => {
    setIsOpenProductModal(!isOpenProductModal);
  };
console.log(page);
  return (
    <>
      <StyledContainer>
        <StyledSidebar>
          <div className='button-wrapper'>
            {page.includes("products") ? (
              <NavLink active>商品列表</NavLink>
            ) : (
              <NavLink to='products/all'>商品列表</NavLink>
            )}
            {page.includes("orders") ? (
              <NavLink active>訂單列表</NavLink>
            ) : (
              <NavLink to='orders'>訂單列表</NavLink>
            )}
            <NavLink onClick={handleToggleProductModal}>新增商品</NavLink>
          </div>
          <div className='logout' onClick={() => navigate("/home")}>
            登出
          </div>
        </StyledSidebar>
        {page.includes("products") && (
          <Products
            isOpenPriceModal={isOpenPriceModal}
            setIsOpenPriceModal={setIsOpenPriceModal}
            handleTogglePriceModal={handleTogglePriceModal}
          />
        )}
        {page.includes("orders") && <Orders />}
        {page.includes("orderId") && <SingleOrder />}
      </StyledContainer>
      {/* Modal-新增商品 */}
      {isOpenProductModal && (
        <AddProductModal handleToggleProductModal={handleToggleProductModal} />
      )}

      {/* Modal-修改價錢 */}
      {isOpenPriceModal && (
        <AdjustPriceModal
          isOpenPriceModal={isOpenPriceModal}
          setIsOpenPriceModal={setIsOpenPriceModal}
          handleTogglePriceModal={handleTogglePriceModal}
        />
      )}
    </>
  );
};

export default AdminIndex;
