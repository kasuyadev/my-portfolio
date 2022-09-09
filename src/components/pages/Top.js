import React from 'react';
import styled, {keyframes} from 'styled-components';
import topimage from '../../img/top.jpg';

const Top = () => {
  
  return (
    <FadeIn>
      <Wrapper>
      </Wrapper>
    </FadeIn>
  );
};

export default Top;

const Wrapper = styled.section`
  height: 100vh;
  background-image: url(${topimage});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FadeIn = styled.section`
  animation: ${fadeIn} .5s ease-in-out;
`;