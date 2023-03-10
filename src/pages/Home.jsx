import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import lineLink from '../assets/images/home1.png';
import productsLink from '../assets/images/home2.png';
import SGS from '../assets/images/home3.png';
import tips from '../assets/images/home4.jpg';
import ProductAll from './ProductAll';
import useFetchAPI from '../hooks/useFetchAPI';
import { IsLoadingComponent as Loading } from '../components/common/IsLoading';

const StyledContainer = styled.div`
  margin: 0 15px;
`;
const StyledLinkWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  position: relative;
  &.produts-link,
  &.line-link {
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  .light {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }
  .light:hover::before {
    content: '';
    width: 200px;
    height: 1000px;
    background: #ffffff;
    opacity: 0.3;
    transform: rotate(30deg);
    position: absolute;
    top: -200px;
    left: -400px;
    animation: lightMove 0.65s;
  }
  @keyframes lightMove {
    0% {
      left: -400px;
    }

    100% {
      left: 1400px;
    }
  }
`;
const StyledProductsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column;
  max-width: 1300px;
  min-height: 1200px;
  margin: 0 auto;
`;

const Home = () => {
  const navigate = useNavigate();
  const [productHot, setProductHot] = useState([]);
  const [sortSelect, setSortSelect] = useState({
    top: true
  });

  const { isLoading, value } = useFetchAPI(`/api/products/all/bestsell`);

  useEffect(() => {
    setProductHot(value.data?.filter((product) => product.isOnShelves === 1));
  }, [value.data]);

  // 點擊時，其他二個會變成 undefine 為 false，當為 true 時不改變
  const sortSelectToggle = useCallback(
    (e) => {
      if (sortSelect[e.target.value] === true) {
        return;
      } else {
        setSortSelect(() => ({
          [e.target.value]: !sortSelect[e.target.value]
        }));
      }
    },
    [sortSelect]
  );

  return (
    <>
      {isLoading && <Loading />}
      <StyledContainer>
        <StyledLinkWrapper className='line-link' style={{ padding: '0px' }}>
          <div className='light'></div>
          <img src={lineLink} alt='' />
        </StyledLinkWrapper>
        <StyledLinkWrapper
          className='produts-link'
          onClick={() => navigate('/product/all')}
        >
          <div className='light'></div>
          <img src={productsLink} alt='' />
        </StyledLinkWrapper>
        <StyledLinkWrapper className='SGS-img'>
          <img src={SGS} alt='' />
        </StyledLinkWrapper>
        <StyledLinkWrapper className='tips-img'>
          <img src={tips} alt='' />
        </StyledLinkWrapper>
      </StyledContainer>
      <StyledProductsContainer>
        <ProductAll
          productHot={productHot}
          sortSelect={sortSelect}
          sortSelectToggle={sortSelectToggle}
        />
      </StyledProductsContainer>
    </>
  );
};

export default Home;
