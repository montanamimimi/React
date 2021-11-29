import { apiUrl } from '../../Utils/constants';


export const REQUEST_API_LOADING = "API::REQUEST_LOADING"
export const REQUEST_API_FAILURE = "API::REQUEST_FAILURE"
export const REQUEST_API_SUCCESS = "API::REQUEST_SUCCESS"

export const getApiLoading = () => ({
    type: REQUEST_API_LOADING
});

export const getApiSuccess = (peoples) => ({
    type: REQUEST_API_SUCCESS,
    payload: peoples
});

export const getApiFailure = (err) => ({
    type: REQUEST_API_FAILURE,
    payload: err
});

export const getApi = () => async (dispatch) => {
    dispatch(getApiLoading());
    try {
        const response = await fetch(apiUrl);        
        if (!response.ok) {
            throw new Error("Not ok");
        }
        const result = await response.json();
        dispatch(getApiSuccess(result));

    } catch (err) {
        console.warn(err)
        dispatch(getApiFailure(err.message));
    } 
}