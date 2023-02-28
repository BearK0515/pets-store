import React from 'react';
import styled from 'styled-components';
import { BiArrowToTop } from 'react-icons/bi';
import ScrollToTop from 'react-scroll-to-top';

const GoTopStyled = styled.ul`
  .top-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-width: 1px;
    border-radius: 10%;
    cursor: pointer;
    position: fixed;
    right: 20px;
    bottom: 20px;
    opacity: 0.8;
    background-color: var(--gray-dark);
    font-size: 3em;
    animation: move 0.5s ease-in infinite alternate;
  }
  @keyframes move {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, 2px);
    }
  }

  @media screen and (max-width: 768px) {
    .top-icon {
      position: fixed;
      right: 20px;
      bottom: 40px;
      font-size: 2em;
      height: 40px;
      width: 40px;
      margin: 20px 0;
  }
`;

export default function GoTop() {
  return (
    <GoTopStyled>
      <ScrollToTop
        smooth
        top={100}
        className='top-icon'
        component={<BiArrowToTop style={{ color: 'white' }} />}
      />
    </GoTopStyled>
  );
}
