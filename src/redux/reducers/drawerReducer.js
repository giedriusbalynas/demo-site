import {SIDE_DRAWER_OPEN, BACKDROP_CLOSE} from '../actionTypes';

const initState = {
    sideDrawerOpen: false
};

export default function (state = initState, action) {

    switch (action.type) {
        case SIDE_DRAWER_OPEN: {
            return initState.sideDrawerOpen = true;
        }
        case BACKDROP_CLOSE: {
            return initState.sideDrawerOpen = false;
        }
        default:
            return initState.sideDrawerOpen = false;
    }
}