import React from 'react'

function Footer({footerText}){
    return(
        <div className='footer'>
            <footer>Version  : {footerText}</footer>
        </div>
    )
}

export default Footer