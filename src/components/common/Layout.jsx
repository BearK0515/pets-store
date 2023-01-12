import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import GoTop from "./GoTop";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
`;

const Layout = () => {
  return (
  <>
    <StyledContainer>
      <Header/>
      <Outlet />
      <Footer/>
      <div>購物車</div>
      <div>搜尋商品</div>
      <div>瀏覽紀錄</div>
      <div>聊天機器人</div>
      <GoTop/>
    </StyledContainer>
    <Footer />
    </>
  );
};

export default Layout;
