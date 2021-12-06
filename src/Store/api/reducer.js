import { REQUEST_API_LOADING, REQUEST_API_SUCCESS, REQUEST_API_FAILURE } from './actions';
import { REQUEST_STATUS } from '../../Utils/constants';

const initialState = {
    apiData: {},
    request: {
        status: REQUEST_STATUS.IDLE,
        error: '',
    }
}

export const apiReducer = ( state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_API_LOADING:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.LOADING
                }
            };
        case REQUEST_API_SUCCESS:
            return {
                ...state,
               apiData: payload,
               request: {
                error: '',                
                status: REQUEST_STATUS.SUCCESS
                }
            }; 
        case REQUEST_API_FAILURE:
            return {
                ...state,               
               request: {
                error: payload,                
                status: REQUEST_STATUS.FAILURE
                }
            };                           
        default:
            return state;
    }    
}