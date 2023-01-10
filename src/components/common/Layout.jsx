import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <StyledContainer>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
      <div>購物車</div>
      <div>搜尋商品</div>
      <div>瀏覽紀錄</div>
      <div>聊天機器人</div>
      <div>回到頂部</div>
    </StyledContainer>
  );
};

export default Layout;
