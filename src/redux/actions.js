import {ADD_PATH, RETURN_BACK, SIDE_DRAWER_OPEN, BACKDROP_CLOSE} from './actionTypes';

export const addPath = content => {
    return {
        type: ADD_PATH,
        payload: {
            content
        }
    }
};

export const returnBack = () => {
    return {
        type: RETURN_BACK
    }
};

export const sideDrawerOpen = () => {
    return {
        type: SIDE_DRAWER_OPEN
    }
};

export const backdropClosed = () => {
    return {
        type: BACKDROP_CLOSE
    }
};
