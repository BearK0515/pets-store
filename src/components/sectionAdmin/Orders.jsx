import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  border: 1px solid #ddd;
`;

const StyledTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid #ddd;
`;

const StyledOrderList = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  .title {
    height: 40px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
  }
  .order:nth-child(even) {
    background-color: var(--button);
  }
  .order:nth-child(odd) {
    background-color: var(--white);
  }
  .order:nth-last-child(1) {
    border-bottom: 1px solid #ddd;
  }
`;

const StyledOrder = styled(Link)`
  height: 40px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: var(--gray-dark);
  &:hover {
    cursor: pointer;
    transform: scale(1.01, 1.1);
  }
`;

const Orders = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        <h2>訂單列表</h2>
      </StyledTitle>
      <StyledOrderList>
        <div className='title'>
          <p>訂單編號</p>
          <p style={{ paddingRight: "20px" }}>時間</p>
        </div>
        <StyledOrder className='order' to="orderId">
          <p>3345678</p>
          <p>2023/1/12</p>
        </StyledOrder>
        <StyledOrder className='order' to="orderId">
          <p>3345678</p>
          <p>2023/1/12</p>
        </StyledOrder>
        <StyledOrder className='order' to="orderId">
          <p>3345678</p>
          <p>2023/1/12</p>
        </StyledOrder>
      </StyledOrderList>
    </StyledContainer>
  );
};

export default Orders;
