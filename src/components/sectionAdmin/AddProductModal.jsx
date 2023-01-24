import React, { useState } from "react";
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
    top: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--white);
    border-radius: 4px;
    max-width: 400px;
    min-width: 400px;
    display: flex;
    flex-flow: column;
    padding: 10px;
  }
`;

const StyledSectionUp = styled.div`
  display: flex;
  flex-flow: row;
  gap: 10px;
  margin-bottom: 10px;
  .left {
    width: 40%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10px;
    .preview {
      width: 100%;
      aspect-ratio: 3/4;
      background-size: cover;
      background-image: url("https://picsum.photos/id/6/300/400");
    }
    .picture-wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      .picture-1,
      .picture-2,
      .picture-3 {
        width: 100%;
        aspect-ratio: 3/4;
        background-size: cover;
        background-image: url("https://picsum.photos/id/6/300/400");
        cursor: pointer;
      }
    }
    .wrapper {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: start;
      gap: 5px 0;
      margin-top: 10px;
      p {
        font-size: 14px;
        font-weight: 700;
        color: var(--footer-background);
      }
      label {
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: var(--white);
        border-radius: 4px;
        background-color: var(--footer-background);
        cursor: pointer;
      }
    }
    #add-product-picture {
      display: none;
    }
  }
  .right {
    display: flex;
    flex-flow: column;
    width: 60%;
    gap: 10px 0;

    .wrapper {
      display: flex;
      flex-flow: column;
      gap: 10px 0;
    }
    label {
      font-size: 14px;
      font-weight: 700;
      color: var(--footer-background);
    }
    input,
    select {
      outline: none;
      border: none;
      border-bottom: 2px solid var(--gray-dark);
      &:hover,
      :focus {
        border-bottom: 2px solid var(--footer-background);
      }
    }
  }
`;
const StyledSectionDown = styled.div`
  display: flex;
  gap: 10px;
  .left {
    display: flex;
    flex-flow: column;
    width: 50%;
    .wrapper {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: start;
      gap: 5px 0;
      p {
        font-size: 14px;
        font-weight: 700;
        color: var(--footer-background);
      }
      label {
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: var(--white);
        border-radius: 4px;
        background-color: var(--footer-background);
        cursor: pointer;
      }
    }
    #add-product-picture {
      display: none;
    }
  }
  .preview {
    width: 100%;
    aspect-ratio: 3/4;
    background-size: cover;
    background-image: url("https://picsum.photos/id/7/300/400");
  }
  .right {
    display: flex;
    flex-flow: column;
    width: 50%;
    gap: 30px 0;
    .picture-wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 55px;
      .picture-1,
      .picture-2,
      .picture-3 {
        width: 100%;
        aspect-ratio: 3/4;
        background-size: cover;
        background-image: url("https://picsum.photos/id/7/300/400");
        cursor: pointer;
      }
    }
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--white);
  border-radius: 4px;
  background-color: var(--text-red);
  cursor: pointer;
`;

const AddProductModal = ({ handleToggleProductModal }) => {
  const [value, setValue] = useState("default");

  return (
    <StyledModalContainer>
      <div className="overlay" onClick={handleToggleProductModal}></div>
      <div className="content">
        <StyledSectionUp>
          <div className='left'>
            <div className='preview'></div>
            <div className='picture-wrapper'>
              <div className='picture-1'></div>
              <div className='picture-2'></div>
              <div className='picture-3'></div>
            </div>
            <div className='wrapper'>
              <p>商品圖片：</p>
              <label htmlFor='add-product-picture'>新增商品圖片</label>
              <input type='file' id='add-product-picture' />
            </div>
          </div>
          <div className='right'>
            <div className='wrapper'>
              <label>商品分類：</label>
              <select
                defaultValue={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <option disabled value='default'>
                  商品分類
                </option>
                <option value='dog'>狗狗專區</option>
                <option value='cat'>貓咪專區</option>
              </select>
            </div>
            <div className="wrapper">
              <label>商品名稱：</label>
              <input type="text" placeholder="請輸入商品名稱" />
            </div>
            <div className="wrapper">
              <label>商品單價：</label>
              <input type="text" placeholder="請輸入商品價格" />
            </div>
            <div className="wrapper">
              {/* 新增option array */}
              <label>商品規格：</label>
              <input type='text' placeholder='請輸入商品規格' />
            </div>
          </div>
        </StyledSectionUp>
        <StyledSectionDown>
          <div className="left">
            <div className="wrapper">
              <p>商品詳情：</p>
              <label htmlFor='add-product-picture'>新增商品詳情圖片</label>
              <input type='file' id='add-product-picture' />
              <div className='preview'></div>
            </div>
          </div>
          <div className="right">
            <div className="picture-wrapper">
              <div className="picture-1"></div>
              <div className="picture-2"></div>
              <div className="picture-3"></div>
            </div>
          </div>
        </StyledSectionDown>
        <StyledButton>新增商品</StyledButton>
      </div>
    </StyledModalContainer>
  );
};

export default AddProductModal;
