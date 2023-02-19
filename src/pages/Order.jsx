import React, { useState } from 'react';
import styled from 'styled-components';
import { AlertIcon, AlertTriangleIcon } from '../assets/icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const StyledContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 30px 0;
  .cont {
    max-width: 1140px;
    display: flex;
    flex-flow: column;
  }
  .item-area {
    margin-bottom: 30px;
    padding: 30px;
    outline: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
const StyledTitle = styled.div`
  font-weight: bold;
  h2 {
    font-size: 24px;
    line-height: 18px;
  }
  hr {
    margin: 10px 0;
    border-top: 1px solid var(--border-hr);
  }
`;
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .form-group {
    width: 100%;
    padding: 0;
    margin-bottom: 10px;
    .form-label {
      display: block;
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 20px;
      color: #212529;
      margin-bottom: 10px;
      &.active {
        color: #cb3747;
      }
    }
    .form-data {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      height: 60px;
      border: 1px solid #d9d9d9;
      padding: 10px;
      &.active {
        border: 1px solid #e4644b;
      }
      input {
        flex: 1;
        border: none;
        outline: none;
        width: 100%;
        height: 36px;
        font-size: 18px;
      }
      .msg-error {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #cb3747;
      }
    }
    .help-block {
      margin-top: 5px;
      display: flex;
      align-items: center;
      color: #cb3747;
      span {
        font-size: 14px;
        line-height: 16pz;
      }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 3px;
      }
    }
    .help-tips {
      color: #27ae61;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 3px;
      }
    }
  }
`;
const StyledButtonWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
  button {
    background-color: #c14848;
    border: 1px solid #c14848;
    border-radius: 4px;
    color: var(--white);
    padding: 11px 15px;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const Order = () => {
  const [orderNumberError, setOrderNumberError] = useState(false);
  // const [authenticationError, setAuthenticationError] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  // const [authentication, setAuthentication] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (orderNumber?.length === 0) {
      setOrderNumberError(true);
    }

    if (orderNumber?.length === 0) {
      console.log('禁止送出');
      return;
    }

    Swal.fire({
      title: '搜尋訂單中',
      showConfirmButton: false,
      timer: 1000,
      position: 'center'
    }).then(() => {
      navigate(`/user-order/${orderNumber}`); // 絕對路由前面要加一槓
    });
    // .catch((error) => {
    //   Swal.showValidationMessage(`Request failed: ${error}`);
    // });

    // if (authentication?.length === 0) {
    //   setAuthenticationError(true);
    // }
    // if(orderNumber?.length === 0 || authentication?.length === 0){
    //   console.log("禁止送出");
    //   return
    // }
  };

  return (
    <StyledContainer>
      <div className='cont'>
        <div className='item-area'>
          <StyledTitle>
            <h2>訂單查詢</h2>
            <hr />
          </StyledTitle>
          <StyledWrapper>
            <div className='form-group'>
              <label
                className={
                  orderNumberError ? 'form-label active' : 'form-label'
                }
              >
                訂單編號
              </label>
              <div
                className={orderNumberError ? 'form-data active' : 'form-data'}
              >
                <input
                  type='text'
                  placeholder='請輸入訂單編號'
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                />
                {orderNumberError ? (
                  <span className='msg-error'>
                    <AlertTriangleIcon />
                  </span>
                ) : null}
              </div>
              {orderNumberError ? (
                <div className='help-block'>
                  <span className='icon'>
                    <AlertIcon />
                  </span>
                  <span>必填欄位，不得為空白。</span>
                </div>
              ) : null}
            </div>
            {/* <div className='form-group'>
              <label
                className={
                  authenticationError ? "form-label active" : "form-label"
                }
              >
                認證號碼
              </label>
              <div
                className={
                  authenticationError ? "form-data active" : "form-data"
                }
              >
                <input
                  type='text'
                  placeholder='請輸入認證號碼'
                  value={authentication}
                  onChange={(e) => setAuthentication(e.target.value)}
                />
                {authenticationError ? (
                  <span className='msg-error'>
                    <AlertTriangleIcon />
                  </span>
                ) : null}
              </div>
              {authenticationError ? (
                <div className='help-block'>
                  <span className='icon'>
                    <AlertIcon />
                  </span>
                  <span>必填欄位，不得為空白。</span>
                </div>
              ) : (
                <div className='help-block help-tips'>
                  <span className='icon'>
                    <ArrowRightIcon />
                  </span>
                  <span>請查閱信箱中的「訂購通知信」。</span>
                </div>
              )}
            </div> */}
          </StyledWrapper>
          <StyledButtonWrapper>
            <div></div>
            <button onClick={handleSubmit}>確定送出</button>
          </StyledButtonWrapper>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Order;
