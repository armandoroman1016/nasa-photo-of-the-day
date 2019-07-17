import React from 'react'


function TextContent({title, text}){
    return(
        <div className = 'text-content'>
        <h1>{title}</h1>
        <p>{text}</p>
        </div>
    )
}

export default TextContent;