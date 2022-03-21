import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getApi } from '../../Store/api/actions';
import { selectApiData, selectApiError, selectApiLoading } from '../../Store/api/selectors';

export const Api = () => {

    const dispatch = useDispatch();
    const peoples = useSelector(selectApiData);
    const isLoading = useSelector(selectApiLoading);
    const error = useSelector(selectApiError);

    console.log(peoples);

    const requestData =  async () => {
        dispatch(getApi());
    };

    useEffect(() => {
        requestData();
    }, []);    

    return (
        <>
            <h1>Apipipipi</h1>
            <button onClick={requestData}> Load Data </button>
            { isLoading && <h4>LOADING.......</h4>}
            { error && <h4>ERROR</h4>}
            <h3>{peoples.result ? peoples.result.description : 'noData'}</h3>
            <p>Name: {peoples.result ? peoples.result.properties.name : 'noData'}</p>
        </>        
    )
}

export default Api;