import React from 'react';
import {LoremIpsum} from 'react-lorem-ipsum';
import BackButton from '../BackButton/BackButton';
import './Wrapper.scss';

const all = () => (
    <div className="wrapper">
        <div className="justify">
            <h1>ALL WORKS</h1>
            <BackButton/>
        </div>
        <hr/>
        <div className="lorem-paragraph">
            <LoremIpsum p={5}/>
        </div>
    </div>
);

export default all;
