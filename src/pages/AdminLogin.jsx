import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Swal from "sweetalert2";
import { adminLogin } from "../api/adminAuth";
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
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef?.current.value;
    const password = passwordRef?.current.value;
    const { success } = await adminLogin({ email, password });
    if (success) {
      Swal.fire({
        title: "登入成功",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      navigate("/admin/products/all");
      return;
    }
  };

useEffect(() => {
  const isAdmin = localStorage.getItem("isAdmin");
  if (isAdmin) {
    navigate("/admin/products/all");
  } else {
    return;
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <StyledContainer onSubmit={handleSubmit}>
      <div className='logo'>
        <img src={smallLogo} alt='' />
      </div>
      <AuthInput label='信箱' placeholder='請輸入信箱' forwardref={emailRef} />
      <AuthInput
        type='password'
        label='密碼'
        placeholder='請輸入密碼'
        forwardref={passwordRef}
      />
      <StyledButton onSubmit={handleSubmit}>登入</StyledButton>
      <StyledLinkText onClick={() => navigate("/")}>首頁</StyledLinkText>
    </StyledContainer>
  );
};

export default AdminLogin;
