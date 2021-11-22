import { TOGGLE_CHECKBOX, CHANGE_NAME } from './actions';

const initialState = {
    checkbox: false,
    name: 'default_name',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox,
            };
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload,
            };        
        default:
            return state;
    }
};