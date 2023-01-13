import React from "react";
import styled from "styled-components";

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
    background: rgba(60, 60, 60, 0.6);
  }
  .content {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--white);
    border-radius: 4px;
    max-width: 600px;
    min-width: 600px;
  }
`;

const AddProductModal = () => {
  return (
    <StyledModalContainer>
      <div className='overlay'></div>
      <div className='content'>
        
      </div>
    </StyledModalContainer>
  );
};

export default AddProductModal;
