import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.scss";
import Header from './components/header-components/header'
import TextContent from "./components/text-components/text-content";
import Media from './components/media-components/media'
import Footer from './components/footer-components/footer'


function App() {
  
  const [date, setDate] = useState([])
  
  const [title, setTitle] = useState([])
  const [text, setText] = useState([])

  const [mediaType, setMediaType] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')
  
  const [footerText, setFooterText] = useState('')
  
      useEffect(() => {
          axios.get('https://api.nasa.gov/planetary/apod?api_key=9QGMd4xUn9EmCxmbPt1Rg7lo1B76CdpqnBha2mNL')
          .then(response => {
            
            const selectedDate = response.data.date
            setDate(selectedDate)
            
            const currentTitle = response.data.title
            const currentExplanation = response.data.explanation
            setTitle(currentTitle)
            setText(currentExplanation)
            
            const currentMediaType = response.data.media_type
            const currentMediaUrl = response.data.url
            setMediaType(currentMediaType)
            setMediaUrl(currentMediaUrl)
  
            const currentVersion = response.data.service_version
            setFooterText(currentVersion)
          })
      },[])
      
  return (
    <div className="App">
      <Header date={date}/>
      <TextContent title={title} text={text}/>
      <Media mediaUrl={mediaUrl} mediaType={mediaType}/>
      <Footer footerText={footerText}/>
    </div>
  );
}

export default App;
