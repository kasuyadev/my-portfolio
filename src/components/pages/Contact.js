import React from 'react';
import styled, {keyframes} from 'styled-components';
import contactimage from '../../img/contact.jpg';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  const adress = 'kasuya1659@gmail.com'
  const sendMail = () => {
    window.location.href = 'mailto:' + adress;
  };

  return (
    <FadeIn>
      <Wrapper>
        <Button onClick={sendMail}>
            {/* <MailOutlineIcon style={{fontSize:'1em'}} /> */}
            Message Me
        </Button>
      </Wrapper>
    </FadeIn>
  );
};

export default Contact;

const Wrapper = styled.section`
  height: 100vh;
  background-image: url(${contactimage});
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

const Button = styled.button`
  outline: solid 2px white;
  background-color: rgba(0,0,0,0.6);
  background-blend-mode: lighten;
  border-radius: 20px;
  height: 70px;
  width: 300px;
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  font-size: 40px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
      background-color: rgba(128,252,190,0.4);
      transition: 0.3s;
    }
`;

