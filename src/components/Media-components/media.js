import React from 'react'
import Iframe from 'react-iframe'

function Media({mediaUrl, mediaType}){
    return(
        <div className = 'media-container'> 
            {mediaType === 'video' ? (
                <Iframe src={mediaUrl} width='100%' height='700px' allowFullScreen/>
            ) : (
                <img src = {mediaUrl} key ={mediaUrl} alt ='A cool view of space'/>
            )}
        </div>
    )
}

export default Media;