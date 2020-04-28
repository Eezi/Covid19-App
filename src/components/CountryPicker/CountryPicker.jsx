import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const ContryPicker = () => {
    
    const [countries, setCountries] = useState([]);

    useEffect(() => {
       const fetchCountriesAPI = async() => {
            setCountries(await fetchCountries());
        }

        fetchCountriesAPI();
      
    }, [setCountries]);
    console.log(countries)

    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect>
                <option value="globa">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>

        </FormControl>
    )
}

export default ContryPicker;