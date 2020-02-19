import React from 'react';
import './Backdrop.scss';
import {useDispatch} from 'react-redux';
import {backdropClosed} from '../../redux/actions';

export const Backdrop = () => {

    const dispatchClose = useDispatch();

    return (<div className="backdrop" onClick={() => dispatchClose(backdropClosed())}/>)
};

