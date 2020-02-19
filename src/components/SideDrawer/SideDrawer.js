import React from 'react';
import './SideDrawer.scss';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";

export const SideDrawer = () => {
    const selector = useSelector(state => state.drawerReducer);
    let drawerClasses = ['side-drawer'];

    if (selector) {
        drawerClasses = ['side-drawer', 'open']
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/service">SERVICE</Link></li>
                <li><Link to="/works/all">WORKS</Link></li>
                <li><Link to="/about-me">ABOUT ME</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
};


