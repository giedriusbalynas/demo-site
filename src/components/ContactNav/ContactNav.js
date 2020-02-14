import React from 'react';
import {LoremIpsum} from 'react-lorem-ipsum';
import BackButton from '../BackButton/BackButton';
import Contact from '../Main/Contact/Contact';
import '../Service/Wrapper.scss';

const contactNav = () => (
    <div className="wrapper">
        <div className="justify">
            <h1>CONTACT</h1>
            <BackButton/>
        </div>
        <hr/>
        <div className="lorem-paragraph">
            <LoremIpsum p={4}/>
            <Contact/>
        </div>
    </div>
);

export default contactNav;
