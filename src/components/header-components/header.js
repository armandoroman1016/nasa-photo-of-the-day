import React from 'react'



function Header({date}){
    return(
        <div className = 'header'>
            <h1>Nasa Content Daily</h1>
            <p>{date}</p>
        </div>
    )
}

export default Header