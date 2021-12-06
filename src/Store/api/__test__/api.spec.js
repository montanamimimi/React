import { 
    foo,
    getApiLoading, 
    REQUEST_API_LOADING, 
    getApiSuccess, 
    REQUEST_API_SUCCESS, 
    getApi,
    getApiFailure,
    } from '../actions';

describe('getApiLoading', () => {
    it('should return obj with certain type', () => {
        const expected = {
            type: REQUEST_API_LOADING
        }    
        const received = getApiLoading();    
        expect(received).toEqual(expected);
    });
});

describe('getApiSuccess', () => {
    it('should return obj with type and payload', () => {
        const payload = [];
        const expected = {
            type: REQUEST_API_SUCCESS,
            payload
        }    
        const received = getApiSuccess(payload);    
        expect(received).toEqual(expected);
    });

});


describe('getApi', () => {


    it('dispatchees getApiLoading', () => {
        const mockDispatch = jest.fn();
        getApi()(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith(getApiLoading());
    });

    it('dispatches success action on successfull fetsch', async () => {
        const result = { api : [] };
        fetch.mockResponseOnce(JSON.stringify(result));
        const mockDispatch = jest.fn();
        await getApi()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getApiSuccess(result));
    });

    it('dispatches failyre action on error in fetsch', async () => {        
        fetch.mockRejectOnce(new Error('test'));
        const mockDispatch = jest.fn();
        await getApi()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getApiFailure('test'));
    });
});

it('throws error', () => {
    expect(() => foo()).toThrow();
})