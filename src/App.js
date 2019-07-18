import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.scss";
import CreateHeader from './components/header-components/header'
import Footer from './components/footer-components/footer'
import BodyContentCelled from './components/content-grid-component/content-grid'


function App() {
  
  const [date, setDate] = useState([])
  
  const [title, setTitle] = useState([])
  const [text, setText] = useState([])

  const [mediaType, setMediaType] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')
  
  const [footerText, setFooterText] = useState('')
  
  const [apiDate, setApiDate] = useState('')

  
  //runs todays current date to render todays page
  useEffect(() => {
    let emptyDate = new Date();
    let currDate = emptyDate.getFullYear() + '-' + (emptyDate.getMonth()+1) + '-' + emptyDate.getDate() ;
    setApiDate(currDate)
  },[])

  
  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=9QGMd4xUn9EmCxmbPt1Rg7lo1B76CdpqnBha2mNL&date=${apiDate}`)
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
      }, [apiDate])

      
  return (
    <div className="App">
      <CreateHeader date={date}/>
      <BodyContentCelled title={title} text={text} setApiDate={setApiDate} apiDate={apiDate} mediaUrl={mediaUrl} mediaType={mediaType}/>
      <Footer footerText={footerText}/>
    </div>
  );
}

export default App;
