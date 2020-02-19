import React from 'react';
import './DrawerToggleButton.scss';
import {useDispatch} from 'react-redux';
import {sideDrawerOpen} from '../../redux/actions';

export const DrawerToggleButton = () => {
    const dispatchOpen = useDispatch();

    return (
        <button className="toggle-button" onClick={() => dispatchOpen(sideDrawerOpen())}>
            <div className="toggle-button-line"/>
            <div className="toggle-button-line"/>
            <div className="toggle-button-line"/>
        </button>
    )
};
