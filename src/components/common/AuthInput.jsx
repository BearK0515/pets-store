import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  vertical-align: middle;
  width: 100%;
  height: 54px;
  margin-bottom: 32px;
  background-color: var(--white);
  border-right: 2px;
  font-family: Arial, Helvetica, sans-serif;
  label {
    width: 100%;
    padding: 3px 10px 0;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: var(--text-header);
  }
  input {
    width: 100%;
    height: 26px;
    padding: 3px 10px 0;
    font-size: 16px;
    font-weight: 400;
    color: var(--text-header);
    background-color: #f5f8fa;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--gray);
    &:hover,
    :focus {
      border-bottom: 2px solid var(--button);
    }
    &.active {
      border-bottom: 2px solid var(--danger);
    }
  }
`;
const StyledAlertContainer = styled.div`
  position: absolute;
  top: 54px;
  display: flex;
  justify-content: end;
  width: 100%;
  `

  const StyledError = styled.div`
    position: absolute;
    left: 0;
    margin-top: 4px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
    color: var(--danger);
  `;
const AuthInput = ({ type, label, value, placeholder, onChange, error }) => {
  return (
    <StyledContainer>
      <label htmlFor=''>{label}</label>
      <input
        className={value?.length === 50 ? "active" : ""}
        type={type || "text"}
        value={value || ""}
        placeholder={placeholder || ""}
        onChange={(event) => onChange?.(event.target.value)}
        maxLength={50}
      />
      <StyledAlertContainer>
      {value.length === 50 ? <StyledError>超過字數上限！</StyledError>:null}
      {error ? <StyledError>內容不可空白！</StyledError>:null}
      </StyledAlertContainer>
    </StyledContainer>
  );
};

export default AuthInput