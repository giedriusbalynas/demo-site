import React from 'react';
import './Welcome.scss';

const welcome = () => (
    <div className="welcome">
        <h1>WELCOME</h1>
        <hr align="left"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat</p>
        <div className="flex-end">
            <button>LEARN MORE</button>
        </div>
    </div>
);

export default welcome;
