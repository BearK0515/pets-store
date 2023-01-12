import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import smallLogo from "../assets/icons/logo-small.jpg";
import AuthInput from "../components/common/AuthInput";

const StyledContainer = styled.form`
  font-family: Arial, Helvetica, sans-serif;
  max-width: 300px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  .logo {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
    }
  }
`;
const StyledButton = styled.button`
  border-radius: 30px;
  background-color: var(--footer-background);
  border: none;
  color: var(--white);
  min-width: 300px;
  height: 46px;
  font-size: 20px;
  font-weight: 400;
  padding: 8px 0;
  margin-top: 2px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledLinkText = styled.div`
  color: var(--gray-dark);
  font-size: 16px;
  font-weight: 400;
  margin-top: 22px;
  border-bottom: 1px solid var(--gray-dark);
  &:hover {
    cursor: pointer;
  }
`;

const AdminLogin = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  // const [accountError, setAccountError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   if (account?.length === 0) {
  //     setAccountError(true);
  //     setTimeout(() => {
  //       setAccountError(false);
  //     }, 3000);
  //   }
  //   if (password?.length === 0) {
  //     setPasswordError(true);
  //     setTimeout(() => {
  //       setPasswordError(false);
  //     }, 3000);
  //   }
  // };
  return (
    <StyledContainer>
      <div className='logo'>
        <img src={smallLogo} alt='' />
      </div>
      <AuthInput
        label='帳號'
        placeholder='請輸入帳號'
        value={account}
        onChange={(accountInputValue) => setAccount(accountInputValue)}
        // error={accountError}
      />
      <AuthInput
        type='password'
        label='密碼'
        placeholder='請設定密碼'
        value={password}
        onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        // error={passwordError}
      />
      <StyledButton onClick={() => navigate("/admin/products/all")}>
        登入
      </StyledButton>
      <StyledLinkText onClick={() => navigate("/home")}>首頁</StyledLinkText>
    </StyledContainer>
  );
};

export default AdminLogin;
