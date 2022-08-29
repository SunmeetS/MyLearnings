import React from 'react';
import { Redirect, Routes, Route, Router, useHistory } from 'react-router-dom';

export default function NavBar(){

    const history = useHistory()

    return(
        <nav>
            <button onClick={()=>history.push('/feed')}>Feed</button>
        </nav>
    )
}