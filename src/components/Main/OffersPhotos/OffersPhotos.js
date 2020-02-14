import React from 'react';

import Photo1 from '../../../Assets/bruno-cervera.jpg';
import Photo2 from '../../../Assets/vandan-patel.jpg';
import './OffersPhotos.scss';

const offersPhotos = () => (
    <div className="offers-photos">
        <div className="photo-text">
            <img src={Photo1} alt="The Best Coffee"/>
            <h2><span>THE BEST COFFE</span></h2>
        </div>
        <div className="photo-text">
            <img src={Photo2} alt="Top 100 Books"/>
            <h2><span>TOP 100 BOOKS</span></h2>
        </div>
    </div>
);

export default offersPhotos;
