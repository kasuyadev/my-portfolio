import React, { useContext } from 'react';
import styled from 'styled-components';
import { flgContext } from '../App';

const Header = () => {
    // eslint-disable-next-line
    let { flg, setFlg } = useContext(flgContext);

    return (
        <BackGround>
            <Wrapper>
                <LinkText onClick={() => setFlg(flg = 'Home')}>Home</LinkText>
                <LinkText onClick={() => setFlg(flg = 'About')}>About</LinkText>
                <LinkText onClick={() => setFlg(flg = 'Skills')}>Skills</LinkText>
                <LinkText onClick={() => setFlg(flg = 'Works')}>Works</LinkText>
                <LinkText onClick={() => setFlg(flg = 'Contact')}>Contact</LinkText>
            </Wrapper>
        </BackGround>
    );
};

export default Header;

const BackGround = styled.div`
    height: 100px;
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    background-blend-mode: lighten;
    position: fixed;
    z-index: 2;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 15%;
    margin-right: 15%;
`;
const LinkText = styled.p`
    text-align: center;
    color: white;
    font-size: 50px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 15px;
    border: solid 2px rgba(255,255,255,0);
    padding: 5px;
    &:hover{
        /* background-color: rgba(255,255,255,0.4); */
        border: solid 2px white;
        transition: 0.3s;
    }
`;