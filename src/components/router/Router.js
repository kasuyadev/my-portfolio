import React, { useContext } from 'react';
import Top from '../pages/Top';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Works from '../pages/Works';
import Contact from '../pages/Contact';
import { flgContext } from '../../App';

const Router = () => {
    const {flg} = useContext(flgContext);

    switch(flg){
        case 'About':
            return (
                <About />
            );
        case 'Skills':
            return (
                <Skills />
            );
        case 'Works':
            return (
                <Works />
            );
        case 'Contact':
            return (
                <Contact />
            );
        default:
            return (
                <Top />
            );
    };

};

export default Router;