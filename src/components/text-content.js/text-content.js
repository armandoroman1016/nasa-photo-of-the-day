import React, { useState, useEffect } from 'react'
import axios from 'axios'


function TextContent(){
    const [title, setTitle] = useState([])
    const [text, setText] = useState([])

    useEffect(() =>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then( response =>{
            const currentTitle = response.data.title
            const currentExplanation = response.data.explanation
            setTitle(currentTitle)
            setText(currentExplanation)
        })
    },[])

    return(
        <div className = 'text-media'>
        <h1>{title}</h1>
        <p>{text}</p>
        </div>
    )
}

export default TextContent;