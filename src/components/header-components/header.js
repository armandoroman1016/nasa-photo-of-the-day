import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { directive } from '@babel/types';

function Header({ imgSrc }){
    const [date, setDate] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then( response => {
            const selectedDate = response.data.date
            setDate(selectedDate)
        })
    }, [])


    return(
        <div className = 'header'>
            <h1>Nasa Content Daily</h1>
            <p>{date}</p>
        </div>
    )
}

export default Header