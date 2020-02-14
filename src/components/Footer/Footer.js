import React from 'react';
import './Footer.scss';
import {Link} from "react-router-dom";

const footer = () => (
    <footer className="footer">
        <div className="footer-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="spacer"/>
            <div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/service">SERVICE</Link></li>
                    <li><Link to="/works/all">WORKS</Link></li>
                    <li><Link to="/about-me">ABOUT ME</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>&copy; <strong>DEMO</strong>SITE All rights reserved</p>
        </div>
    </footer>
);

export default footer;
