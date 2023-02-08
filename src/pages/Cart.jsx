import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AlertIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DeleteProductIcon,
  JCBIcon,
  MasterIcon,
  VisaIcon,
} from "../assets/icons";
import { taiwan } from "../components/common/country";

//Layout樣式
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
  .img-area {
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
//購物車樣式
const StyledCartContainter = styled.section`
  display: flex;
  flex-flow: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  ul {
    display: grid;
    grid-template-columns: 2fr 1fr minmax(80px, auto) 150px 150px 80px;
    gap: 10px;
    background-color: #32373a;
    border-color: #32373a;
    border-radius: 5px 5px 0 0;
    align-items: center;
    font-size: 85%;
    padding: 15px 10px;
    @media screen and (max-width: 992px) {
      grid-template-columns: 3fr 1fr minmax(80px, auto) 100px 100px 80px;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      &.title {
        .style,
        .count,
        .price,
        .subtotal,
        .delete {
          display: none;
        }
      }
      &.product {
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr auto;
        grid-template-areas:
          "name name delete"
          "style count count"
          "price . subtotal";
        .name {
          grid-area: name;
        }
        .style {
          grid-area: style;
        }
        .count {
          grid-area: count;
        }
        .price-md {
          display: inline;
          grid-area: price;
        }
        .subtotal-md {
          display: inline;
          grid-area: subtotal;
        }
        .delete {
          grid-area: delete;
        }
        .price {
          display: none;
        }
        .subtotal {
          display: none;
        }
      }
    }
    li {
      text-align: center;
      color: #fff;
    }
    .price-md,
    .subtotal-md {
      display: none;
    }
  }
  .product {
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    li {
      color: #333;
    }
    &:nth-last-child(1) {
      border: none;
    }
    &:nth-child(odd) {
      background-color: #fafafa;
    }
    .name {
      display: flex;
      gap: 10px;
      font-size: 14px;
      img {
        height: 50px;
        width: 50px;
      }
    }
    .style {
      font-size: 1rem;
      font-weight: 700;
    }
    .count {
      border: 1px solid #d9d9d9;
      color: var(--gray);
      height: 36px;
      select {
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
        font-size: 14px;
        text-align: center;
        padding: 0 10px;
        cursor: pointer;
      }
    }
    .price,
    .price-md {
      color: #212529;
      font-weight: 400;
      line-height: 1.5;
    }
    .subtotal,
    .subtotal-md {
      color: #212529;
      font-weight: 700;
      line-height: 1.5;
    }
    .delete {
      color: #32373a;
      cursor: pointer;
    }
  }
`;
const StyledTextWrapper = styled.div`
  border-top: 1px solid #ddd;
  display: grid;
  grid-template-columns: 75% auto;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: right;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  .text {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
  }
  .subtotal {
    font-size: 14px;
    line-height: 20px;
    font-weight: bolder;
    color: #cb3747;
  }
`;
const StyledTotal = styled.div`
  background-color: #32373a;
  color: #fff;
  font-size: 20px;
  padding: 15px 10px;
  border-radius: 0 0 5px 5px;
  display: grid;
  grid-template-columns: 75% auto;
  gap: 10px;
  align-items: center;
  text-align: right;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  .text-wrapper {
    font-size: 14px;
    line-height: 20px;
  }
  .total {
    line-height: 20px;
    font-weight: bolder;
  }
`;
//訂單樣式
const StyledOrderContainer = styled.div`
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
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
  }
  //購買資訊
  .purchase-information {
    .shipping-wrapper {
      width: 100%;
      .country-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        div {
          width: 100%;
        }
      }
      .content-wrapper,
      .shipping-method-wrapper {
        display: grid;
        grid-template-columns: auto 20px 1fr;
        padding: 10px;
        font-size: 14px;
        line-height: 20px;
        background: #fafafa;
        margin-bottom: 10px;
        .arrow-right {
          text-align: center;
        }
      }
      .shipping-method-wrapper {
        grid-template-columns: 20px 1fr;
      }
      .credit-card-icon-wrapper {
        display: flex;
        flex-flow: row;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        gap: 5px;
        .icon {
          width: 36px;
          height: 25px;
          &.jbc {
            background-image: url(jcb);
          }
        }
      }
      button {
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 10px;
        background-color: #c14848;
        border-color: #c14848;
        color: var(--white);
        padding: 11px 15px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }

  //購買人資料
  .buyer-information {
    textarea {
      width: 100%;
      outline: none;
      border: 1px solid #d9d9d9;
      padding: 10px;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    .check {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      input {
        cursor: pointer;
      }
      label {
        cursor: pointer;
      }
    }
    .tips {
      display: flex;
      align-items: center;
      color: #27ae61;
      font-size: 14px;
      margin-top: -10px;
      margin-bottom: 10px;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
      }
    }
  }
  //發票資料
  .invoice-information {
    .check {
      margin-bottom: 10px;
      display: flex;
      input {
        cursor: pointer;
      }
      label {
        cursor: pointer;
        display: block;
        font-size: 14px;
        line-height: 20px;
      }
      span {
        color: #cb3747;
      }
    }
    .wrapper {
      display: flex;
      gap: 30px;
    }
  }
  //條款同意
  .clause-wrapper {
    display: flex;
    justify-content: end;
    width: 100%;
    @media screen and (max-width: 768px) {
      justify-content: start;
    }
    .check {
      margin-bottom: 10px;
      display: flex;
      input {
        cursor: pointer;
      }
    }
    label {
      cursor: pointer;
      span {
        color: #cb3747;
      }
    }
  }
  .total {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px dashed #d9d9d9;
    div {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 1;
    }
    span {
      color: #cb3747;
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      line-height: 1.5;
      margin-left: 10px;
    }
  }
  .button {
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-areas: ". button";
    @media screen and (max-width: 768px) {
      grid-template-columns: 2fr 1fr;
    }
    @media screen and (max-width: 577px) {
      grid-template-columns: 1fr;
      grid-template-areas: "button";
    }
    button {
      grid-area: button;
      background-color: #c14848;
      border-color: #c14848;
      color: var(--white);
      border-radius: 4px;
      cursor: pointer;
      padding: 11px 15px;
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;
const StyledSelect = styled.div`
  margin-bottom: 10px;
  select {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: none;
    border: 1px solid #d9d9d9;
    color: var(--gray);
    &.active {
      padding: 0 40px 0 10px;
    }
  }
  .alert {
    display: none;
    &.active {
      display: flex;
      gap: 3px;
      align-items: center;
      color: #cb3747;
    }
  }
`;
const StyledInput = styled.div`
  margin-bottom: 10px;
  position: relative;
  input {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: none;
    border: 1px solid #d9d9d9;
    color: var(--gray);
    &:focus {
      outline: none;
    }
    &.active {
      padding: 0 40px 0 10px;
      border-color: #cb3747;
    }
  }
  .wrapper {
    display: flex;
    font-size: 14px;
    .icon {
      display: none;
      &.active {
        display: block;
        position: absolute;
        top: 6px;
        right: 10px;
      }
    }
    .alert {
      display: none;
      &.active {
        display: flex;
        gap: 3px;
        color: #cb3747;
        div {
          margin-top: 2px;
        }
      }
    }
  }
`;
const Checkbox = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 3px;
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    accent-color: #32373a;
  }
`;

const Cart = () => {
  return (
    <>
      <StyledContainer>
        <div className="cont">
          <div className="item-area">
            <StyledTitle className="title">
              <h2>我的購物車</h2>
              <hr />
            </StyledTitle>
            <StyledCartContainter>
              <ul className="title">
                <li className="title name">品名</li>
                <li className="title style">規格</li>
                <li className="title count">數量</li>
                <li className="title price">單價</li>
                <li className="title subtotal">小計</li>
                <li className="title delete">刪除</li>
              </ul>
              <div className="product-wrapper">
                {/* 商品清單 */}
                <Product />
                <Product />
                <Product />
              </div>
              <StyledTextWrapper>
                <div className="text">小計</div>
                <div className="subtotal">$1560</div>
              </StyledTextWrapper>
              <StyledTextWrapper>
                <div className="text">運費</div>
                <div className="subtotal">前往下一步驟計算</div>
              </StyledTextWrapper>
              <StyledTotal>
                <div className="text-wrapper">
                  <p>總金額</p>
                  <p>(TWD)</p>
                </div>
                <div className="total">$1560</div>
              </StyledTotal>
            </StyledCartContainter>
          </div>
        </div>
      </StyledContainer>
      <StyledOrderContainer>
        <div className="cont">
          <div className="item-area">
            <div className="container">
              {/* 購物資訊 */}
              <div className="wrapper purchase-information">
                <StyledTitle className="title">
                  <h2>購物資訊</h2>
                  <hr />
                </StyledTitle>
                {/* 運送方式 */}
                <ShippingSelect />
              </div>
              {/* 購買人資料 */}
              <div className="wrapper buyer-information">
                <StyledTitle className="title">
                  <h2>購買人資料</h2>
                  <hr />
                </StyledTitle>
                <Input
                  placeholder="請輸入購買人姓名"
                  label="姓名欄只能輸入中文和英文。"
                />
                <div className="tips">
                  <div>
                    <ArrowRightIcon color="#27ae61" />
                  </div>
                  <p>務必正確輸入購買人姓名確保正確送達。</p>
                </div>
                <Input
                  placeholder="請輸入聯絡電話"
                  label="聯絡電話只能輸入8~20碼以內的數字及+和#符號。"
                />
                <Input
                  placeholder="ex: example@wahaha.com"
                  label="Email無法辨識，請與郵件供應商聯絡。"
                />
                <div className="tips">
                  <div>
                    <CheckCircleIcon color="#27ae61" />
                  </div>
                  <p>我們會將您的訂單通知信寄送至此。</p>
                </div>
                <textarea
                  placeholder="請輸入客戶備註(選填)"
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
                <div className="check">
                  <Checkbox>
                    <input type="checkbox" id="information" />
                  </Checkbox>
                  <label htmlFor="information">
                    我想收到最新資訊及優惠方案
                  </label>
                </div>
                <div className="check">
                  <Checkbox>
                    <input type="checkbox" id="buyer-info" />
                  </Checkbox>
                  <label htmlFor="buyer-info">收件人同購買人資料</label>
                </div>
                <Input
                  placeholder="請輸入收件人姓名"
                  label="姓名欄位只能輸入中文和英文。"
                />
                <div className="tips">
                  <div>
                    <ArrowRightIcon color="#27ae61" />
                  </div>
                  <p>務必正確輸入購收件人姓名確保正確送達。</p>
                </div>
                <Input
                  placeholder="請輸入聯絡電話"
                  label="聯絡電話只能輸入8~20碼以內的數字及+和#符號。"
                />
              </div>
              {/* 發票資料 */}
              <div className="wrapper invoice-information">
                <StyledTitle className="title">
                  <h2>發票資料</h2>
                  <hr />
                </StyledTitle>
                <BillSelect />
              </div>
            </div>
            {/* 條款同意 */}
            <div className="clause-wrapper">
              <div className="check">
                <Checkbox>
                  <input type="checkbox" id="record" />
                </Checkbox>
                <label htmlFor="record">我同意將寄送資訊記錄在這台裝置上</label>
              </div>
            </div>
            <div className="clause-wrapper">
              <div className="check">
                <Checkbox>
                  <input type="checkbox" id="service" />
                </Checkbox>
                <label htmlFor="service">
                  我已閱讀「<span>售後服務</span>」並同意。
                </label>
              </div>
            </div>
            <div className="total">
              <div>
                實付金額(TWD)<span>$1170</span>
              </div>
            </div>
            <div className="button">
              <button>確認送出</button>
            </div>
          </div>
        </div>
      </StyledOrderContainer>
    </>
  );
};
//購物車內商品
const Product = () => {
  const options = [];
  for (let i = 1; i <= 999; i++) {
    options.push({ value: i, label: i });
  }
  return (
    <ul className="product">
      <li className="name">
        <img src="https://picsum.photos/id/15/400" alt="" />
        <p>【毛孩時代】情緒穩定保養粉(30包/盒)</p>
      </li>
      <li className="style">30包/盒</li>
      <li className="count">
        <select defaultValue={options[0].value}>
          {Array.prototype.map.call(options, ({ value, label }, index) => {
            return (
              <option key={index} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </li>
      <li className="price">$520</li>
      <li className="price-md">每盒$520元</li>
      <li className="subtotal">$520</li>
      <li className="subtotal-md">小計：$520</li>
      <li className="delete">
        <DeleteProductIcon size="18px" color="#32373a" />
      </li>
    </ul>
  );
};
//Select樣式
const Select = ({ arrayOption, label, onChange }) => {
  return (
    <StyledSelect>
      <select className="shipping" name="" id="" onChange={onChange}>
        {arrayOption.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="alert">
        <AlertIcon color="#cb3747" />
        <p>{label}</p>
      </div>
    </StyledSelect>
  );
};
//購買資訊Select樣式
const ShippingSelect = () => {
  const [selectedOption, setSelectedOption] = useState("- 請選擇 運送方式 -");
  const shippingOptions = [
    "- 請選擇 運送方式 -",
    "貨到付款",
    "一般宅配",
    "7-11取貨",
    "全家取貨",
  ];
  const paymentOptions = ["- 請選擇 付款方式 -"];
  return (
    <>
      <Select
        arrayOption={shippingOptions}
        label="請選擇運送方式"
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      {/* 運送方式 */}
      <div className="shipping-wrapper">
        {selectedOption === "- 請選擇 運送方式 -" && (
          <Select arrayOption={paymentOptions} label="請選擇付款方式" />
        )}
        {selectedOption === "貨到付款" && <CashOnDelivery />}
        {selectedOption === "一般宅配" && <HomeDelivery />}
        {selectedOption === "7-11取貨" && <SevenElevenPickUp />}
        {selectedOption === "全家取貨" && <FamilyMartPickUp />}
      </div>
    </>
  );
};
//發票Select樣式
const BillSelect = () => {
  const [selectedOption, setSelectedOption] = useState("個人電子發票(兩聯式)");
  return (
    <>
      <StyledSelect className="select bill-wrapper">
        <select
          defaultValue={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option disabled value="default">
            - 請選擇 發票資料 -
          </option>
          <option value="個人電子發票(兩聯式)">個人電子發票(兩聯式)</option>
          <option value="公司用(三聯式)">公司用(三聯式)</option>
          <option value="電子發票捐贈">電子發票捐贈</option>
        </select>
      </StyledSelect>
      {selectedOption === "個人電子發票(兩聯式)" && <PersonalBill />}
      {selectedOption === "公司用(三聯式)" && <CompanyBill />}
      {selectedOption === "電子發票捐贈" && <InvoiceDonation />}
    </>
  );
};
//個人電子發票(兩聯式)
const PersonalBill = () => {
  const [selectedOption, setSelectedOption] = useState("無載具");
  return (
    <>
      <StyledSelect className="select bill-wrapper">
        <select
          defaultValue={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option disabled value="default">
            - 請選擇 發票類型 -
          </option>
          <option value="無載具">無載具</option>
          <option value="手機條碼載具">手機條碼載具</option>
          <option value="自然人憑證載具">自然人憑證載具</option>
          <option value="悠遊卡載具">悠遊卡載具</option>
        </select>
      </StyledSelect>
      {selectedOption === "無載具" && ""}
      {selectedOption === "手機條碼載具" && (
        <Input
          placeholder="請輸入手機載具編號"
          label="手機載具編號格式錯誤。"
        />
      )}
      {selectedOption === "自然人憑證載具" && (
        <Input
          placeholder="請輸入自然人憑證載具編號"
          label="自然人憑證載具編號格式錯誤。"
        />
      )}
      {selectedOption === "悠遊卡載具" && (
        <Input
          placeholder="請輸入悠遊卡隱碼"
          label="悠遊卡載具編號格式錯誤。"
        />
      )}
      <div className="check">
        <Checkbox>
          <input type="checkbox" id="bill" />
        </Checkbox>
        <label htmlFor="bill">
          我同意辦理退貨時，由「毛孩時代Petstimes｜寵物保健食品領導品牌NO.1」代為處理發票，以加速退貨退款作業。
          <span>(統一發票使用規定)</span>
        </label>
      </div>
    </>
  );
};
//公司用(三聯式)樣式
const CompanyBill = () => {
  return (
    <div className="wrapper">
      <Input placeholder="請輸入發票抬頭" label="必填欄位，不得為空白。" />
      <Input placeholder="請輸入統一編號" label="請填寫正確的統一編號。" />
    </div>
  );
};
//電子發票捐贈
const InvoiceDonation = () => {
  const [selectedOption, setSelectedOption] = useState("無載具");
  return (
    <>
      <StyledSelect className="select bill-wrapper">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="財團法人喜憨兒社會福利基金會">
            財團法人喜憨兒社會福利基金會
          </option>
          <option value="社團法人中華民國身心障礙聯盟">
            社團法人中華民國身心障礙聯盟
          </option>
          <option value="社團法人台灣動物保護協進會">
            社團法人台灣動物保護協進會
          </option>
        </select>
      </StyledSelect>
      <div className="check">
        <Checkbox>
          <input type="checkbox" id="bill" />
        </Checkbox>
        <label htmlFor="bill">
          我同意辦理退貨時，由「毛孩時代Petstimes｜寵物保健食品領導品牌NO.1」代為處理發票，以加速退貨退款作業。
          <span>(統一發票使用規定)</span>
        </label>
      </div>
    </>
  );
};
//Input樣式
const Input = ({ placeholder, label }) => {
  return (
    <>
      <StyledInput>
        <input className="" type="text" placeholder={placeholder} />
        <div className="wrapper">
          <div className="icon ">
            <AlertTriangleIcon color="#cb3747" />
          </div>
          <div className="alert">
            <div>
              <AlertIcon size="16px" color="#cb3747" />
            </div>
            <p>{label}</p>
          </div>
        </div>
      </StyledInput>
    </>
  );
};
//貨到付款
const CashOnDelivery = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [towns, setTowns] = useState([]);

  const cities = taiwan.map((city) => city.city);

  useEffect(() => {
    if (selectedCity) {
      const selectedCityData = taiwan.find(
        (city) => city.city === selectedCity
      );
      setTowns(selectedCityData.towns);
    }
  }, [selectedCity]);

  return (
    <>
      <div className="country-wrapper">
        <Select
          arrayOption={cities}
          label="請選擇城市"
          onChange={(e) => setSelectedCity(e.target.value)}
        />
        <Select arrayOption={towns} label="" />
      </div>
      <Input placeholder="收件地址" label="請輸入收件地址" />
      <div className="content-wrapper">
        <p>運送說明</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">
          送貨前，司機會以電話聯絡，請務必保持手機暢通，謝謝
        </div>
      </div>
      <div className="shipping-method-wrapper">
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">宅配方式</div>
      </div>
    </>
  );
};
//一般宅配
const HomeDelivery = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [towns, setTowns] = useState([]);

  const cities = taiwan.map((city) => city.city);

  useEffect(() => {
    if (selectedCity) {
      const selectedCityData = taiwan.find(
        (city) => city.city === selectedCity
      );
      setTowns(selectedCityData.towns);
    }
  }, [selectedCity]);

  return (
    <>
      <div className="country-wrapper">
        <Select
          arrayOption={cities}
          label="請選擇城市"
          onChange={(e) => setSelectedCity(e.target.value)}
        />
        <Select arrayOption={towns} label="" />
      </div>
      <Input placeholder="收件地址" label="請輸入收件地址" />
      <div className="content-wrapper">
        <p>運送說明</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">
          送貨前，司機會以電話聯絡，請務必保持手機暢通，謝謝
        </div>
      </div>
      <div className="shipping-method-wrapper">
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">信用卡</div>
      </div>
      <div className="credit-card-icon-wrapper">
        <p>可使用</p>
        <div className="icon">
          <VisaIcon />
        </div>
        <div className="icon">
          <MasterIcon />
        </div>
        <div className="icon">
          <JCBIcon />
        </div>
      </div>
    </>
  );
};
//7-11取貨
const SevenElevenPickUp = () => {
  const [selectedOption, setSelectedOption] = useState("default");
  return (
    <>
      <a href="https://emap.presco.com.tw/c2cemap.ashx?eshopid=870&&servicetype=1&url=https://localhost:3000">
        <button className="button">選擇取件超商門市</button>
      </a>
      <div className="content-wrapper">
        <p>取件門市代號</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">無</div>
      </div>
      <div className="content-wrapper">
        <p>取件門市名稱</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">無</div>
      </div>
      <div className="content-wrapper">
        <p>取件門市地址</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">無</div>
      </div>
      <div className="content-wrapper">
        <p>運送說明</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">
          貨抵達7-11門市會發簡訊通知您取貨，請留意簡訊通知，謝謝
        </div>
      </div>
      <StyledSelect className="select bill-wrapper">
        <select
          defaultValue={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option disabled value="default">
            - 請選擇 付款方式 -
          </option>
          <option value="信用卡">信用卡</option>
          <option value="7-11取貨付款">7-11取貨付款</option>
        </select>
      </StyledSelect>
      {selectedOption === "信用卡" && (
        <div className="credit-card-icon-wrapper">
          <p>可使用</p>
          <div className="icon">
            <VisaIcon />
          </div>
          <div className="icon">
            <MasterIcon />
          </div>
          <div className="icon">
            <JCBIcon />
          </div>
        </div>
      )}
    </>
  );
};
//全家取貨
const FamilyMartPickUp = () => {
  const [selectedOption, setSelectedOption] = useState("default");
  return (
    <>
      <button className="button">選擇取件超商門市</button>
      <div className="content-wrapper">
        <p>取件門市代號</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">無</div>
      </div>
      <div className="content-wrapper">
        <p>取件門市名稱</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">無</div>
      </div>
      <div className="content-wrapper">
        <p>取件門市地址</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">無</div>
      </div>
      <div className="content-wrapper">
        <p>運送說明</p>
        <div className="arrow-right">
          <ArrowRightIcon />
        </div>
        <div className="content">
          貨抵達全家門市會發簡訊通知您取貨，請留意簡訊通知，謝謝
        </div>
      </div>
      <StyledSelect className="select bill-wrapper">
        <select
          defaultValue={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option disabled value="default">
            - 請選擇 付款方式 -
          </option>
          <option value="信用卡">信用卡</option>
          <option value="7-11取貨付款">7-11取貨付款</option>
        </select>
      </StyledSelect>
      {selectedOption === "信用卡" && (
        <div className="credit-card-icon-wrapper">
          <p>可使用</p>
          <div className="icon">
            <VisaIcon />
          </div>
          <div className="icon">
            <MasterIcon />
          </div>
          <div className="icon">
            <JCBIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
