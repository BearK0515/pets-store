import React, { useEffect, useState } from "react";
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
import { productsHot } from "../api/products";
import { admindeleteProduct, ordersAll } from "../api/adminAuth";
import Swal from "sweetalert2";

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
    props.currentPage ? "var(--white)" : "var(--footer-background)"};
  color: ${(props) =>
    props.currentPage ? " var(--footer-background)" : "var(--white)"};
  border: ${(props) =>
    props.currentPage ? "2px solid var(--footer-background)" : ""};
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
  const [productsAll, setProductsAll] = useState(null);
  const [orders, setOrders] = useState(null);
  const [productId, setProductId] = useState(null);

  //??????????????????????????????
  const handleTogglePriceModal = (e) => {
    if (e.target.matches(".btn")) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    setProductId(e.target.id);
    setIsOpenPriceModal(!isOpenPriceModal);
  };
  //????????????????????????
  const handleToggleProductModal = () => {
    setIsOpenProductModal(!isOpenProductModal);
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAdmin");
    navigate("/");
  };
  //DELETE????????????
  async function deleteProduct(productId) {
    const newProductAll = productsAll?.filter(
      (product) => product.id !== productId
    );
    try {
      const deleteProduct = await admindeleteProduct(productId);
      if (deleteProduct) {
        Swal.fire({
          title: "????????????",
          text: "???????????????????????????",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "??????",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("????????????", "?????????", "success");
            setProductsAll(newProductAll);
          }
          return;
        });
      }
    } catch (error) {
      console.error("delete product error:", error);
    }
  }
  //GET????????????
  useEffect(() => {
    const getProductsHotAsync = async () => {
      try {
        const resProductsAll = await productsHot();
        const OnShelvesAll = resProductsAll?.filter(
          (newProducts) => newProducts?.isOnShelves === 1
        );
        setProductsAll(OnShelvesAll);
      } catch (error) {
        console.error(error);
      }
    };
    getProductsHotAsync();
    return;
  }, [isOpenPriceModal, isOpenProductModal, setProductsAll]);
  //GET????????????
  useEffect(() => {
    const getOrdersAllAsync = async () => {
      try {
        const resOrdersAll = await ordersAll();
        setOrders(resOrdersAll);
      } catch (error) {
        console.error(error);
      }
    };
    getOrdersAllAsync();
    return;
  }, [setOrders]);
  return (
    <>
      <StyledContainer>
        <StyledSidebar>
          <div className='button-wrapper'>
            {page.includes("products") ? (
              <NavLink currentPage>????????????</NavLink>
            ) : (
              <NavLink to='products/all'>????????????</NavLink>
            )}
            {page.includes("orders") ? (
              <NavLink currentPage>????????????</NavLink>
            ) : (
              <NavLink to='orders'>????????????</NavLink>
            )}
            <NavLink onClick={handleToggleProductModal}>????????????</NavLink>
          </div>
          <div className='logout' onClick={handleLogout}>
            ??????
          </div>
        </StyledSidebar>
        {page.includes("products") && (
          <Products
            productsAll={productsAll}
            handleTogglePriceModal={handleTogglePriceModal}
            deleteProduct={deleteProduct}
          />
        )}
        {page.includes("orders") && <Orders orders={orders} />}
        {page.includes("single-order") && <SingleOrder />}
      </StyledContainer>
      {/* Modal-???????????? */}
      {isOpenProductModal && (
        <AddProductModal handleToggleProductModal={handleToggleProductModal} />
      )}

      {/* Modal-???????????? */}
      {isOpenPriceModal && (
        <AdjustPriceModal
          productId={productId}
          setIsOpenPriceModal={setIsOpenPriceModal}
          handleTogglePriceModal={handleTogglePriceModal}
        />
      )}
    </>
  );
};

export default AdminIndex;
