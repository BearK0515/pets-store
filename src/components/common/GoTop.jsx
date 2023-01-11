import React from "react";
import styled from "styled-components";
import { BiArrowToTop } from "react-icons/bi";


const GoTopStyled = styled.div`
  .goTop {
    height: 40px;
    width: 40px;
    border-width: 1px;
    border-radius: 10%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    opacity: .8;
    background-color: var(--gray);
  }

  .top-icon {
    color: var(--white);
    font-size: 2rem;
  }
`;

export default function GoTop() {
  return (
    <GoTopStyled>
      <ul>
        <li >
          <span>
          <button className="goTop" >
            <BiArrowToTop className="top-icon" />
            </button>
          </span>
        </li>
      </ul>
    </GoTopStyled>
  );
}