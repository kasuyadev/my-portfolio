import React from 'react';
import styled, {keyframes} from 'styled-components';
import worksimage from '../../img/works.jpg';
import spWorksimage from '../../img/spWork.jpg';
import { sp } from '../modules/media'

const Works = () => {
  return (
    <FadeIn>
      <Wrapper>
        <Text>No track<br/>record yet</Text>
      </Wrapper>
    </FadeIn>
  );
};

export default Works;

const Wrapper = styled.section`
  height: 100vh;
  background-image: url(${worksimage});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  ${sp`
    background-image: url(${spWorksimage});
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

const Text = styled.p`
  position: absolute;
  top: 30%;
  left: 10%;
  text-align: center;
  margin: 0;
  color: white;
  font-size: 130px;
  ${sp`
    position: absolute;
    top: 32%;
    left: 22%;
    text-align: center;
    margin: 0;
    color: black;
    font-size: 50px;
    `};
`;
