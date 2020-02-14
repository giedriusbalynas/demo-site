import React from 'react';
import './DesignPhoto.scss';
import DesignPhoto from '../../../Assets/alexandra-gorn.jpg';

const designPhoto = () => (
    <div className="design-photo">
        <img src={DesignPhoto} alt="Coffee cup"/>
        <h2>UI/UX DESIGN</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequatg
        </p>
    </div>
);

export default designPhoto;
