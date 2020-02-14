import {ADD_PATH, RETURN_BACK} from '../actionTypes';

const initialState = {
    history: []
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_PATH: {
            const {content} = action.payload;
            return {
                ...state,
                history: [...state.history, content],
            };
        }
        case RETURN_BACK: {
            let newArr = [...state.history.filter((elem, idx) => {
                return idx < state.history.length - 2;
            })];
            return {
                ...state,
                history: newArr,
            };
        }
        default:
            return state;
    }
}
