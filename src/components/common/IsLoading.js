import styled from 'styled-components';
import PacmanLoader from 'react-spinners/PacmanLoader';

const FixedBackground = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

const IsLoadingStyle = styled.div`
  margin: 0 auto;
  position: fixed;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export function IsLoadingComponent() {
  return (
    <FixedBackground>
      <IsLoadingStyle>
        <PacmanLoader color='#469189' size='75px' speedMultiplier='2' />
      </IsLoadingStyle>
    </FixedBackground>
  );
}
