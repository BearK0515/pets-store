import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { addProduct } from "../../api/adminAuth";

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
      background: #d9d9d9;
      /* background: var(--white); */
      img{
        width: 100%;
        height: 100%;
      }
    }
    .picture-wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      .picture-1,
      .picture-2,
      .picture-3 {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        aspect-ratio: 3/4;
        background: #d9d9d9;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
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
    #add-product-picture,
    #add-describe-picture {
      display: none;
    }
  }
  .preview {
    width: 100%;
    aspect-ratio: 3/4;
    background: #d9d9d9;
    img {
      width: 100%;
      height: 100%;
    }
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
        display: flex;
        justify-content: center;
        width: 100%;
        aspect-ratio: 3/4;
        background: #d9d9d9;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
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
  const [categoryValue, setCategoryValue] = useState("default");
  const [productPicture, setProductPicture] = useState(null);
  const [previewProduct1, setPreviewProduct1] = useState("");
  const [previewProduct2, setPreviewProduct2] = useState("");
  const [previewProduct3, setPreviewProduct3] = useState("");
  const [describePicture, setDescribePicture] = useState(null);
  const [previewDescribe1, setPreviewDescribe1] = useState("");
  const [previewDescribe2, setPreviewDescribe2] = useState("");
  const [previewDescribe3, setPreviewDescribe3] = useState("");
  const [previewProduct, setPreviewProduct] = useState(previewProduct1);
  const [previewDescription, setPreviewDescription] = useState(previewProduct1);
  const nameRef = useRef();
  const priceRef = useRef();
  const styleRef = useRef();
  //送出新增商品
  const handleSubmit = async () => {
    const nameValue = nameRef?.current?.value;
    const priceValue = priceRef?.current?.value;
    const styleValue = styleRef?.current?.value;
    const picture = [...productPicture, ...describePicture];
    try {
      let formData = new FormData();
      formData.append("name", nameValue);
      formData.append("price", priceValue);
      formData.append("description", styleValue);
      formData.append("CategoryId", categoryValue);
      formData.append("url", picture[0]);
      formData.append("url", picture[1]);
      formData.append("url", picture[2]);
      formData.append("url", picture[3]);
      formData.append("url", picture[4]);
      formData.append("url", picture[5]);
      await addProduct({ formData });
    } catch (error) {
      console.error("Product Submit faild :", error);
    }
    handleToggleProductModal();
  };
  //上傳產品圖片
  const handleProductImageChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 3) {
      Swal.fire({
        title: "最多3張圖片",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
        position: "top",
      });
      return;
    }
    const pic1 = e.target.files[0];
    const pic2 = e.target.files[1];
    const pic3 = e.target.files[2];
    const objectUrl1 = window.URL.createObjectURL(pic1);
    const objectUrl2 = window.URL.createObjectURL(pic2);
    const objectUrl3 = window.URL.createObjectURL(pic3);
    setPreviewProduct1(objectUrl1);
    setPreviewProduct2(objectUrl2);
    setPreviewProduct3(objectUrl3);
    setProductPicture(selectedFiles);
  };
  //上傳詳情圖片
  const handleDescribeImageChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 3) {
      Swal.fire({
        title: "最多3張圖片",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
        position: "top",
      });
      return;
    }
    const pic1 = e.target.files[0];
    const pic2 = e.target.files[1];
    const pic3 = e.target.files[2];
    const objectUrl1 = window.URL.createObjectURL(pic1);
    const objectUrl2 = window.URL.createObjectURL(pic2);
    const objectUrl3 = window.URL.createObjectURL(pic3);
    setPreviewDescribe1(objectUrl1);
    setPreviewDescribe2(objectUrl2);
    setPreviewDescribe3(objectUrl3);
    setDescribePicture(selectedFiles);
  };
  useEffect(() => {
    setPreviewProduct(previewProduct1);
  }, [previewProduct1, previewProduct2, previewProduct3]);
  useEffect(() => {
    setPreviewDescription(previewDescribe1);
  }, [previewDescribe1, previewDescribe2, previewDescribe3]);
  //商品大圖
const handlePreviewProduct = (e)=>{
  setPreviewProduct(e.target.src);
}
//詳情大圖
const handlePreviewDescription = (e)=>{
  setPreviewDescription(e.target.src);
}
  return (
    <StyledModalContainer>
      <div className='overlay' onClick={handleToggleProductModal}></div>
      <div className='content'>
        <StyledSectionUp>
          <div className='left'>
            <div className='preview'>
              {previewProduct && <img src={`${previewProduct}`} alt='' />}
            </div>
            <div className='picture-wrapper'>
              <div className='picture-1' onClick={handlePreviewProduct}>
                {previewProduct1 && <img src={`${previewProduct1}`} alt='' />}
              </div>
              <div className='picture-2' onClick={handlePreviewProduct}>
                {previewProduct2 && <img src={`${previewProduct2}`} alt='' />}
              </div>
              <div className='picture-3' onClick={handlePreviewProduct}>
                {previewProduct3 && <img src={`${previewProduct3}`} alt='' />}
              </div>
            </div>
            <div className='wrapper'>
              <p>商品圖片：</p>
              <label htmlFor='add-product-picture'>新增商品圖片</label>
              <input
                type='file'
                id='add-product-picture'
                accept='image/*'
                onChange={(e) => handleProductImageChange(e)}
                multiple
              />
            </div>
          </div>
          <div className='right'>
            <div className='wrapper'>
              <label>商品分類：</label>
              <select
                defaultValue={categoryValue}
                onChange={(e) => setCategoryValue(e.target.value)}
              >
                <option disabled value='default'>
                  商品分類
                </option>
                <option value='1'>狗狗專區</option>
                <option value='2'>貓咪專區</option>
              </select>
            </div>
            <div className='wrapper'>
              <label>商品名稱：</label>
              <input type='text' placeholder='請輸入商品名稱' ref={nameRef} />
            </div>
            <div className='wrapper'>
              <label>商品單價：</label>
              <input type='text' placeholder='請輸入商品價格' ref={priceRef} />
            </div>
            <div className='wrapper'>
              <label>商品規格：</label>
              <input type='text' placeholder='請輸入商品規格' ref={styleRef} />
            </div>
          </div>
        </StyledSectionUp>
        <StyledSectionDown>
          <div className='left'>
            <div className='wrapper'>
              <p>商品詳情：</p>
              <label htmlFor='add-describe-picture'>新增商品詳情圖片</label>
              <input
                type='file'
                id='add-describe-picture'
                accept='image/*'
                onChange={(e) => handleDescribeImageChange(e)}
                multiple
              />
              <div className='preview'>
                {previewDescription && (
                  <img src={`${previewDescription}`} alt='' />
                )}
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='picture-wrapper'>
              <div className='picture-1' onClick={handlePreviewDescription}>
                {previewDescribe1 && <img src={`${previewDescribe1}`} alt='' />}
              </div>
              <div className='picture-2' onClick={handlePreviewDescription}>
                {previewDescribe2 && <img src={`${previewDescribe2}`} alt='' />}
              </div>
              <div className='picture-3' onClick={handlePreviewDescription}>
                {previewDescribe3 && <img src={`${previewDescribe3}`} alt='' />}
              </div>
            </div>
          </div>
        </StyledSectionDown>
        <StyledButton onClick={handleSubmit}>新增商品</StyledButton>
      </div>
    </StyledModalContainer>
  );
};

export default AddProductModal;
