import React from 'react'


function Media({mediaUrl, mediaType}){
    return(
        <div className = 'media-container'> 
            {mediaType === 'video' ? (
                <iframe src={mediaUrl} width='700px' height='500px' allowFullScreen/>
            ) : (
                <img src = {mediaUrl} key ={mediaUrl} alt ='A cool view of space'/>
            )}
        </div>
    )
}

export default Media;