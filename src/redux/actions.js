import {ADD_PATH, RETURN_BACK} from './actionTypes';

export const addPath = content => {
    return {
        type: ADD_PATH,
        payload: {
            content
        }
    }
}

export const returnBack = content => {
    return {
        type: RETURN_BACK
    }
}