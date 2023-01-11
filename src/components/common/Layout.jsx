import React,{ useRef } from "react";
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
  const containerRef = useRef(null);
  const goTopFunc = () => {
    containerRef.current.scrollTop = 0;
  };
  return (
    <StyledContainer ref={containerRef}>
      <Header/>
      <Outlet />
      <Footer/>
      <div>購物車</div>
      <div>搜尋商品</div>
      <div>瀏覽紀錄</div>
      <div>聊天機器人</div>
      <GoTop goTopFunc={goTopFunc} />
    </StyledContainer>
  );
};

export default Layout;
