import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {countries} from '../../api/index';

const Country = (props) => {

    const [fetchCountries, setFetchCountries]=useState([]);

    useEffect(()=>{
        const Countries=async()=>{
            setFetchCountries(await countries());
        }
        Countries();
    },[setFetchCountries])
    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(event)=>props.countryChangeHandler(event.target.value)}>
            <option value="">Global</option>
            {fetchCountries.map((country,key)=><option key={key} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default Country;
