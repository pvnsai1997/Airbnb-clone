import React from 'react'
import './Search.css'
import {useState} from 'react';

import "react-date-range/dist/theme/default.css" ;
import "react-date-range/dist/styles.css";
import { DateRangePicker} from "react-date-range";
import { Button } from '@mui/material'
import People from '@mui/icons-material/People'
import { useNavigate } from "react-router-dom"

//Date picker component

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const history = useNavigate();
 
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
    <div className='Search'>
        <DateRangePicker ranges={[selectionRange]} onChange = {handleSelect} />
        <h2>
        No of guests
        <People></People>
        </h2>
        <input min={0} defaultValue={2} type='number' />
        <Button onClick={() => history("/Search")}> Serach Airbnb</Button>
    </div>

  )
}

export default Search