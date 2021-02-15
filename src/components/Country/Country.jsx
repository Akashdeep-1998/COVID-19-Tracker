import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import Style from  './Country.module.css';
import {countries} from '../../api/index';

const Country = ({countryChangeHandler}) => {

    const [fetchCountries, setFetchCountries]=useState([]);

    useEffect(()=>{
        const Countries=async()=>{
            setFetchCountries(await countries());
        }
        Countries();
    },[setFetchCountries])
    console.log(fetchCountries);

    return (
        <div className={Style.formControl}>
        <FormControl>
            <NativeSelect defaultValue="" onChange={(event)=>countryChangeHandler(event.target.value)}>
            <option value="global">Global</option>
            {fetchCountries.map((country,key)=><option key={key} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
    );
}

export default Country;
