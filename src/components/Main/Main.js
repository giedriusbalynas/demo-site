import React from 'react';
import Welcome from './Welcome/Welcome';
import DesignPhoto from './DesignPhoto/DesignPhoto';
import Forecast from './Forecast/Forecast';
import OffersPhotos from './OffersPhotos/OffersPhotos';
import Contact from './Contact/Contact';
import './Main.scss';

const main = () => (
    <main>
        <div className="wrap">
            <div className="wrap-inside">
                <Welcome/>
                <DesignPhoto/>
            </div>
        </div>
        <div className="products">
            <h1>PRODUCTS</h1>
            <h4>OFFERS TODAY</h4>
            <div className="offers-today">
                <Forecast/>
                <OffersPhotos/>
            </div>
            <div>
                <h1>CONTACT</h1>
                <hr/>
                <div className="contacts">
                    <Contact/>
                </div>
            </div>
        </div>
    </main>
);

export default main;
