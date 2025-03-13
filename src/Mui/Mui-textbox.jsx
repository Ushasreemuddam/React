import { TextField } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function MUItextbox(){
    const [userName,setUserName]=useState('');
    function handleNameChange(e){
        setUserName(e.target.value);
    }
    return(
        <div>
            <h2>Bootstrap Input</h2>
            <div className="w-25">
                <label className="form-label">User Name</label>
                <div>
                    <input type="text" className="form-control"/>
                </div>
            </div> 
            <h2>Material Input</h2>
            <TextField className="me-4" onChange={handleNameChange} id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField className="me-4" id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
             <p>Hello!{userName}</p>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
        </div>
    )
}