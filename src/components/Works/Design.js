import React from 'react';
import {LoremIpsum} from 'react-lorem-ipsum';
import BackButton from '../BackButton/BackButton';
import './Wrapper.scss';

const design = () => (
    <div className="wrapper">
        <div className="justify">
            <h1>DESIGN</h1>
            <BackButton/>
        </div>
        <hr/>
        <div className="lorem-paragraph">
            <LoremIpsum p={5}/>
        </div>
    </div>
);

export default design;
