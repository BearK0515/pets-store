import styled from "styled-components";

const HomeLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  text-align: left;
  margin-bottom: 20px;

  .text {
    position: relative;
    text-align: center;
    color: var(--dark);
    margin-left: 15px;
  }
  .text::before {
    content: "";
    width: 8px;
    height: 8px;
    border: solid var(--dark);
    border-width: 0 1px 1px 0;
    transform: translate(0, -50%) rotate(-45deg);
    position: absolute;
    top: 50%;
    left:-13px;
  }

  @media only screen and (min-width: 992px){
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    text-align: right;
    margin-bottom: 20px;
  }
`;

export { HomeLinkWrapper };
