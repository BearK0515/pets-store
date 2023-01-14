import React from "react";
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
  gap: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid #ddd;
`;
const StyledOrderList = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px;
  gap: 10px;
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-header);
  }
  .wrapper-title,
  .wrapper-content {
    display: flex;
    flex-flow: row;
  }
  .wrapper-title {
    font-size: 16px;
    font-weight: 700;
  }
  .wrapper-content {
    font-size: 16px;
    font-weight: 500;
  }
  .buying-information {
    justify-content: space-between;
  }
  .products {
    display: grid;
    grid-template-columns: 40% 1fr;
    .wrapper {
      display: grid;
      grid-template-columns: 3fr 6fr 1fr;
      p {
        display: flex;
        justify-content: center;
      }
    }
  }
  .sender,
  .addressee {
    width: 100%;
    display: grid;
    grid-template-columns: 100px repeat(2, 200px) 1fr;
    & p ~ p {
      display: flex;
      justify-content: center;
    }
    & P:nth-last-child(1) {
      flex-flow: wrap;
      word-wrap: break-all;
    }
  }
  .addressee {
    grid-template-columns: 100px 200px 1fr;
  }
  .count {
    display: flex;
    justify-content: space-between;
    padding-right: 5px;
    p {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const SingleOrder = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        <h2>訂單編號：</h2>
        <p>3345678</p>
      </StyledTitle>
      <StyledOrderList>
        <StyledWrapper>
          <h3>購買資訊</h3>
          <div className='wrapper-title buying-information'>
            <p>付款方式</p>
            <p>運送方式</p>
            <p>處理狀態</p>
          </div>
          <div className='wrapper-content buying-information'>
            <p>貨到付款</p>
            <p>7-11到店取貨</p>
            <p>撿貨中</p>
          </div>
          <hr />
          <div className='wrapper-title products'>
            <p>購買品項</p>
            <div className='wrapper'>
              <p>數量</p>
              <p>單價</p>
              <p>小計</p>
            </div>
          </div>
          <div className='wrapper-content products'>
            <p>毛孩時代腎臟專科保健營養品(30包/盒)</p>
            <div className='wrapper'>
              <p>2</p>
              <p>$690</p>
              <p>$1380</p>
            </div>
          </div>
          <div className='wrapper-content products'>
            <p>毛孩時代皮膚專科保健營養品(30包/盒)</p>
            <div className='wrapper'>
              <p>1</p>
              <p>$650</p>
              <p>$650</p>
            </div>
          </div>
          <div className='wrapper-content products'>
            <p>毛孩時代關節專科保健營養品(30包/盒)</p>
            <div className='wrapper'>
              <p>3</p>
              <p>$450</p>
              <p>$1350</p>
            </div>
          </div>
          <div className="count">
            <p>總計</p>
            <p>$3380</p>
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <h3>購買者資料</h3>
          <hr />
          <div className='wrapper-title sender'>
            <p>姓名</p>
            <p>電話</p>
            <p>email</p>
            <p>備註</p>
          </div>
          <div className='wrapper-content sender'>
            <p>王大明</p>
            <p>01-23345678</p>
            <p>abcac@abcabc.com</p>
            <p>
              {/* 英打字母太長沒辦法自動換行 */}
              英打字母太長沒辦法自動換行
            </p>
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <h3>收件者資料</h3>
          <hr />
          <div className='wrapper-title addressee'>
            <p>姓名</p>
            <p>電話</p>
            <p>備註</p>
          </div>
          <div className='wrapper-content addressee'>
            <p>蕭光輝</p>
            <p>01-998765432</p>
            <p>門口停汽車顏色消光黑</p>
          </div>
        </StyledWrapper>
      </StyledOrderList>
    </StyledContainer>
  );
};

export default SingleOrder;
