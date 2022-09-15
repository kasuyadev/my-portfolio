import React, { useContext, useState } from 'react';
import styled, {css} from 'styled-components';
import { flgContext } from '../App';
import { sp } from './modules/media';

const Header = () => {
    // eslint-disable-next-line
    let { flg, setFlg } = useContext(flgContext);
    const [active, setActive] = useState(false);
    const triggerClick = () => {
        setActive(!active);
    };

    return (
        <>
            <PcBackGround>
                <Wrapper>
                    <LinkText onClick={() => setFlg(flg = 'Home')}>Home</LinkText>
                    <LinkText onClick={() => setFlg(flg = 'About')}>About</LinkText>
                    <LinkText onClick={() => setFlg(flg = 'Skills')}>Skills</LinkText>
                    <LinkText onClick={() => setFlg(flg = 'Works')}>Works</LinkText>
                    <LinkText onClick={() => setFlg(flg = 'Contact')}>Contact</LinkText>
                </Wrapper>
            </PcBackGround>
            <SpBackGround>
                <IconWrapper>
                    <Trigger isActive={active} onClick={triggerClick}>
                        <MenuLine />
                        <MenuLine />
                        <MenuLine />
                    </Trigger>
                </IconWrapper>
            </SpBackGround>
            <SpMenu isActive={active}>
                <LinkText onClick={() => {setFlg(flg = 'Home'); setActive(!active);}}>Home</LinkText>
                <LinkText onClick={() => {setFlg(flg = 'About'); setActive(!active);}}>About</LinkText>
                <LinkText onClick={() => {setFlg(flg = 'Skills'); setActive(!active);}}>Skills</LinkText>
                <LinkText onClick={() => {setFlg(flg = 'Works'); setActive(!active);}}>Works</LinkText>
                <LinkText onClick={() => {setFlg(flg = 'Contact'); setActive(!active);}}>Contact</LinkText>
            </SpMenu>
        </>
    );
};

export default Header;

const PcBackGround = styled.div`
    display: block;
    height: 100px;
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    background-blend-mode: lighten;
    position: fixed;
    z-index: 2;

    ${sp`
        display: none;
    `};
`;
const SpBackGround = styled.div`
    display: none;
    ${sp`
        display: block;
        position: absolute;
        border-radius: 50%;
        height: 80px;
        width: 80px;
        top: 85%;
        left: 42%;
        z-index: 2;
        background-color: rgba(0,0,0,0.4);
        background-blend-mode: lighten;
    `};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 15%;
    margin-right: 15%;

    ${sp`
        display: none;
    `};
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
        border: solid 2px white;
        transition: 0.3s;
    };

    ${sp`
        margin: 5px;
        text-decoration: underline;
    `};
    
`;

const IconWrapper = styled.div`
    display: none;
    ${sp`
        display: block;
        position: relative;
        padding-top: 18px;
        text-align: center;
        box-sizing: border-box;
        &:after{
            position: absolute;
            top: 1.5em;
            left: 1.5em;
            width: 40px;
            height: 40px;
            border: 1px solid #fff;
            color: #fff;
            font-size: 20px;
            text-align: center;
            line-height: 40px;
        };
    `};
`;
const Trigger = styled.button`
    display: inline-block;
    transition: all .4s;
    box-sizing: border-box;
    position: relative;
    width: 50px;
    height: 44px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
    ${(props) => props.isActive ? css`
            transform: rotateX(720deg);
            span{
                :nth-of-type(1){
                    transform: translateY(20px) rotate(-45deg);
                }
                :nth-of-type(2){
                    transform: translateY(0) rotate(45deg);
                }
                :nth-of-type(3){
                    opacity: 0;
                    transition: none;
                }
            }
        `
        : ''};
`;
const MenuLine = styled.span`
    display: inline-block;
    transition: all .4s;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    &:nth-of-type(1){
        top: 0;
    };
    &:nth-of-type(2){
        top: 20px;
    };
    &:nth-of-type(3){
        bottom: 0;
        transition: none;
    };
`;

const SpMenu = styled.div`
    display: none;
    ${sp`
        display: block;
        width: 100%;
        height: 100vh;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        background-blend-mode: lighten;
        position: absolute;
        z-index: 1;
        -webkit-transform: translateY(100%);
        -moz-transform: translateY(100%);
        -ms-transform: translateY(100%);
        -o-transform: translateY(100%);
        transform: translateY(100%);
        transition: transform 0.4s ease-in-out;

        ${(props) => props.isActive ? css`
            transform: translateY(35%);
            `
            : ''};
    
    `};
    
`;

