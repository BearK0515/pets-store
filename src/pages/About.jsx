import React from "react";
import styled from "styled-components";
import {
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  LineIcon,
  LocationIcon,
  OpenHourIcon,
  PhoneIcon,
} from "../assets/icons";
import { HomeLinkWrapper } from "../components/common/HomeLinkWrapper";
import smallLogo from "../assets/icons/logo-small.jpg";
import brandStory from "../assets/images/about1.jpg";
import belief from "../assets/images/about2.png";
import certificate from "../assets/images/about3.jpg";
import SGScertificate from "../assets/images/about4.png";
import order from "../assets/images/order.png";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 30px 0;
  .cont {
    max-width: 1140px;
    margin: 0 10px;
    display: flex;
    flex-flow: column;
  }
  .item-area {
    margin-bottom: 30px;
    padding: 30px;
    outline: 1px solid rgba(0, 0, 0, 0.1);
  }
  .img-area{
    margin-top: 30px;
  }
`;

const StyledTitle = styled.div`
  h2 {
    font-size: 18px;
    line-height: 18px;
  }
  hr {
    margin: 10px 0;
    border-top: 1px solid var(--border-hr);
  }
`;
const StyledAboutMedia = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  .left {
    display: flex;
    padding: 0 15px;
    gap: 0 10px;
    .logo {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
      }
    }
    .wrapper {
      display: flex;
      flex-flow: column;
      gap: 10px 0;
      .icon {
        width: 30px;
        height: 30px;
      }
      .homepage {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: var(--gray-dark);
        line-height: 30px;
      }
    }
    h1 {
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      color: var(--text-header);
    }
    ul {
      display: flex;
      gap: 0 10px;
    }
  }
  .right {
    display: flex;
    flex-flow: column;
    gap: 10px 0;
  }
`;
const StyledContactInfoBlock = styled.div`
  display: flex;
  .icon {
    width: 20px;
    margin-right: 5px;
  }
  .wrapper {
    flex-flow: column;
    h3 {
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;
      color: var(--text-header);
    }

    p {
      font-size: 14px;
      line-height: 20px;
      color: var(--gray);
    }
  }
`;
const StyledImage = styled.div`
  max-width: 750px;
  margin-bottom: 1rem;
  img {
    width: 100%;
  }
  &.order {
    cursor: pointer;
  }
`;

const About = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <div className='cont'>
        <HomeLinkWrapper>
          <HomeIcon color='var(--dark)' />
          <p className='text'>關於</p>
        </HomeLinkWrapper>
        <div className='item-area'>
          <StyledTitle className='title'>
            <h2>關於</h2>
            <hr />
          </StyledTitle>
          <StyledAboutMedia>
            <div className='left'>
              <div className='logo'>
                <img src={smallLogo} alt='' />
              </div>
              <div className='wrapper'>
                <h1 className='compony'>
                  毛孩時代Petstimes | 寵物保健食品領導品牌NO.1
                </h1>
                <ul>
                  <FacebookIcon className='icon facebook' />
                  <InstagramIcon className='icon instagram' />
                  <LineIcon className='icon line' />
                  <div className='icon homepage'>
                    <HomeIcon />
                  </div>
                </ul>
              </div>
            </div>
            <div className='right'>
              <StyledContactInfoBlock>
                <div className='icon'>
                  <OpenHourIcon />
                </div>
                <div className='wrapper'>
                  <h3>服務時段</h3>
                  <p>週一~週五</p>
                  <p>09:00~12:30 ; 13:30~18:00</p>
                </div>
              </StyledContactInfoBlock>
              <StyledContactInfoBlock>
                <div className='icon'>
                  <PhoneIcon />
                </div>
                <div className='wrapper'>
                  <h3>客服專線</h3>
                  <p>01-23345678</p>
                </div>
              </StyledContactInfoBlock>
              <StyledContactInfoBlock>
                <div className='icon'>
                  <LocationIcon />
                </div>
                <div className='wrapper'>
                  <h3>地址</h3>
                  <p>台北市中正區承德路一段2號</p>
                </div>
              </StyledContactInfoBlock>
            </div>
          </StyledAboutMedia>
          <div className='img-area'>
            <StyledImage>
              <img src={brandStory} alt='' />
            </StyledImage>
            <StyledImage>
              <img src={belief} alt='' />
            </StyledImage>
            <StyledImage>
              <img src={certificate} alt='' />
            </StyledImage>
            <StyledImage>
              <img src={SGScertificate} alt='' />
            </StyledImage>
            <StyledImage
              className='order'
              onClick={() => navigate("/product/all")}
            >
              <img src={order} alt='' />
            </StyledImage>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default About;
export { StyledContainer };
