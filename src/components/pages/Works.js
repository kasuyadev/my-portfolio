import React from 'react';
import styled, {keyframes} from 'styled-components';
import worksimage from '../../img/works.jpg';

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

const Text = styled.p`
  position: absolute;
  top: 250px;
  left: 230px;
  text-align: center;
  margin: 0;
  color: white;
  font-size: 130px;
`;
