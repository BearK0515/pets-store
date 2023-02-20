/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginSocialFacebook } from "reactjs-social-login";
import { facebookLogin, googleLogin } from "../../api/userLogin";
import {
  AlertIcon,
  CancelIcon,
  FacebookWhiteIcon,
  GoogleIcon,
  LineWhiteIcon,
} from "../../assets/icons";

const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(20, 20, 20, 0.9);
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    max-width: 400px;
    min-width: 400px;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  .cancel {
    position: absolute;
    top: -45px;
    right: -8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #efefef;
    line-height: 1.2;
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-header);
    }
  }
  .wrapper {
    padding: 15px;
    h3 {
      display: flex;
      justify-content: center;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .icon-wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
        div,
        a {
          width: 22px;
          height: 21px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .line {
        font-size: 1rem;
        background-color: #00b900;
        color: var(--white);
      }
      .facebook {
        font-size: 1rem;
        background-color: #1877f2;
        color: var(--white);
      }
      .google {
        font-size: 1rem;
        background-color: var(--white);
        color: #4285f4;
        border: 1px solid #4285f4;
      }
    }
    .waring-wrapper,
    .manual {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #808080;
      line-height: 1.5;
    }
    .waring-wrapper {
      gap: 3px;
      margin: 30px 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .manual {
      span {
        font-weight: bolder;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
const LoginModal = ({
  setIsOpenLoginModal,
  handleToggleLoginModal,
  setLogin,
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  const linkTo = (location) => {
    setIsOpenLoginModal(false);
    navigate(location);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const { token, user } = await facebookLogin({ email, name });
      localStorage.setItem("authToken", token);
      localStorage.setItem("UserId", user.id);
      handleToggleLoginModal();
      setLogin(true)
    };
    if (!email || !name) return;
    getUserInfo();
  }, [email, name]);

  return (
    <StyledModalContainer>
      <div className='overlay'></div>
      <div className='content'>
        <StyledWrapper>
          <button className='cancel' onClick={handleToggleLoginModal}>
            <CancelIcon size={40} />
          </button>
          <div className='title'>
            <h2>成為會員，獨享專屬好康優惠！</h2>
          </div>
          <div className='wrapper'>
            <h3>綁定社群帳號，快速登入</h3>
            <div className='icon-wrapper'>
              <div className='icon line'>
                <div>
                  <LineWhiteIcon />
                </div>
                <p>登入</p>
              </div>
              <LoginSocialFacebook
                appId='1699530640464382'
                onResolve={(res) => {
                  setEmail(res.data.email);
                  setName(res.data.name);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <div className='icon facebook'>
                  <div>
                    <FacebookWhiteIcon />
                  </div>
                  <p>登入</p>
                </div>
              </LoginSocialFacebook>
              <div className='icon google' onClick={() => googleLogin()}>
                <div>
                  <GoogleIcon />
                </div>
                <p>登入</p>
              </div>
            </div>
            <div className='waring-wrapper'>
              <div>
                <AlertIcon />
              </div>
              <p>注意：不同登入方式帳號不互通</p>
            </div>
            <div className='manual'>
              註冊帳號即表示您
              <span
                onClick={() => {
                  linkTo("/faq#member_level");
                }}
              >
                同意會員權益說明
              </span>
              與
              <span
                onClick={() => {
                  linkTo("/faq#policy");
                }}
              >
                隱私權條款
              </span>
            </div>
          </div>
        </StyledWrapper>
      </div>
    </StyledModalContainer>
  );
};

export default LoginModal;
