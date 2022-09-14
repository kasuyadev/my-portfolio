import React from 'react';
import styled, {keyframes} from 'styled-components';
import skillsimage from '../../img/skills.jpg';
import { sp } from '../modules/media'

const Skills = () => {
  return (
    <FadeIn>
      <Wrapper>
        <Box>
          <Title>Skills</Title>
          <SubTitle>Front-end</SubTitle>
          <TextBox>
            <Text>HTML/CSS</Text>
            <Text>JavaScript</Text>
            <Text>React.js</Text>
          </TextBox>
          <br/>
          <ExplanationText>
            HTML/CSS・JavaScriptは実務経験があります。現在、React.jsを学習中です。<br/>
            このサイトはReact.jsのアウトプットも兼ねて作成しています。
          </ExplanationText>
          <br/>
          <SubTitle>Back-end</SubTitle>
          <TextBox>
            <Text>VBScript</Text>
            <Text>PHP</Text>
            <Text>Python</Text>
            <Text>node.js</Text>
            <Text>SQL</Text>
          </TextBox>
          <br/>
          <ExplanationText>
            VBScript・SQLは実務経験があります。現在、Python・node.jsを学習中です。<br/>
            Pythonでの簡単なスクレイピングは習得済みです。お小遣い稼ぎができればいいなと考えています。
          </ExplanationText>
        </Box>
      </Wrapper>
    </FadeIn>
  );
};

export default Skills;

const Wrapper = styled.section`
  height: 100vh;
  background: url(${skillsimage}) center center / cover no-repeat fixed;
  ${sp`
    background: url(${skillsimage}) center center / cover no-repeat;
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

const Box = styled.div`
  position: absolute;
  top: 15%;
  left: 12%;
  height: 80%;
  width: 80%;
  background-color: rgba(0,0,0,0.6);
  background-blend-mode: lighten;
  ${sp`
    top: 5%;
    left: 5%;
    width: 90%;
    height:auto;
    `};
`;
const Title = styled.p`
  text-align: center;
  margin: 0;
  color: white;
  font-size: 130px;
  ${sp`
    font-size: 50px;
    text-decoration: underline;
    `};
`;
const SubTitle = styled.p`
  text-align: center;
  margin: 0;
  color: white;
  font-size: 70px;
  text-decoration: underline solid 2px white;
  ${sp`
    font-size: 40px;
    `};
`;
const Text = styled.p`
  text-align: center;
  display: inline-block;
  margin: 0 30px 0 30px;
  color: yellow;
  font-size: 50px;
  ${sp`
    font-size: 30px;
    margin: 0 10px 0 10px;
    `};
`;
const TextBox = styled.div`
  align-items: center;
  text-align: center;
`;
const ExplanationText = styled.p`
  text-align: center;
  margin: 0 30px 0 30px;
  color: white;
  font-size: 30px;
  ${sp`
    font-size: 18px;
    `};
`;
