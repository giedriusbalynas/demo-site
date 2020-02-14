import React from 'react';
import {LoremIpsum} from 'react-lorem-ipsum';

import BackButton from '../BackButton/BackButton';
import '../Service/Wrapper.scss';

const aboutMe = () => (
    <div className="wrapper">
        <div className="justify">
            <h1>ABOUT ME</h1>
            <BackButton/>
        </div>
        <hr/>
        <div className="lorem-paragraph">
            <LoremIpsum p={5}/>
        </div>
    </div>
);

export default aboutMe;
