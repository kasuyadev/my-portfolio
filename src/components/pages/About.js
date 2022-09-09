import React from 'react';
import styled, {keyframes} from 'styled-components';
import aboutimage from '../../img/about.jpg';

const About = () => {
  
  return (
    <FadeIn>
      <Wrapper>
        <Box>
          <Title>About Me</Title>
          <Text>
            こんにちは。糟谷と申します。<br/><br/>
            文系の大学を卒業後、紆余曲折を経て、<br/>
            現在はシステムエンジニアとして働いています。<br/>
            副業で収入アップを目指してます。<br/>
            「行動あるのみ」がモットーです。<br/>
            
          </Text>
        </Box>
      </Wrapper>
    </FadeIn>
  );
};

export default About;

const Wrapper = styled.section`
  height: 100vh;
  background-image: url(${aboutimage});
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

const Box = styled.div`
  position: absolute;
  top: 25%;
  left: 12%;
  height: 60%;
  width: 50%;
  background-color: rgba(0,0,0,0.6);
  background-blend-mode: lighten;
`;
const Title = styled.p`
  text-align: center;
  margin: 0;
  color: white;
  font-size: 130px;
`;
const Text = styled.p`
  color: white;
  text-align: center;
  font-size: 25px;
`;