import React from 'react';
import styled, {keyframes} from 'styled-components';
import topimage from '../../img/top.jpg';
import { sp } from '../modules/media'

const Top = () => {
  
  return (
    <FadeIn>
      <Wrapper>
        <Title>Kasuya's Portfolio</Title>
      </Wrapper>
    </FadeIn>
  );
};

export default Top;

const Wrapper = styled.section`
  height: 100vh;
  background: url(${topimage}) center center / cover no-repeat fixed;
  ${sp`
    background: url(${topimage}) center center / cover no-repeat;
  `};
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

const Title = styled.p`
  font-size: 150px;
  color: rgba(255,255,255,.7);
  position: absolute;
  top: 52%;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;

  ${sp`
    font-size:70px;
    color: rgba(255,255,255,.8);
    top: 10%;
  `};
`;