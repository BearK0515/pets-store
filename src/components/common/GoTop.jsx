import React,{ forwardRef } from "react";
import styled from "styled-components";
import { BiArrowToTop } from "react-icons/bi";


const GoTopStyled = styled.ul`
  .goTop {
    height: 50px;
    width: 50px;
    border-width: 1px;
    border-radius: 10%;
    cursor: pointer;
    position: fixed;
    right: 20px;
    bottom: 20px;
    opacity: .8;
    background-color: var(--gray-dark);
  }
  .top-icon {
    color: var(--white);
    font-size: 3em;
    animation: move 0.5s ease-in infinite alternate;
  }
   @keyframes move {
      from {transform: translate(0,0)};
      to {transform: translate(0,2px)};
  }
`;

const GoTop = forwardRef(({goTopFunc}, ref) => {

  return (
    <GoTopStyled>
      <button className="goTop" onClick={goTopFunc} >
        <BiArrowToTop className="top-icon" />
      </button>
    </GoTopStyled>
  );
})

export default GoTop;