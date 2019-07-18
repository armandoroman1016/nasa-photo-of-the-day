import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.scss";
import Header from './components/header-components/header'
import TextContent from "./components/text-components/text-content";
import Media from './components/media-components/media'
import Footer from './components/footer-components/footer'
import Calendar from 'react-calendar'


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
      <Header date={date}/>
      <Calendar onClickDay = {(event) => { 
        //split string of event date to allow myself to manipulate data
        const splitStr = event.toString().split(' ')
        let tempDate = []
        tempDate.push(splitStr[3],splitStr[1],splitStr[2])
        // pushed split string items into order that i need dates
        const monthIndex ={
          Jan : '01',
          Feb : '02',
          Mar : '03',
          Apr : '04',
          May : '05',
          Jun : '06',
          Jul : '07',
          Aug : '08',
          Sep : '09',
          Oct : '10',
          Nov : '11',
          Dec : '12'
        }
        //create a final date variable 

        let extractedDate = ''

        //checking monthIndex to find the matching month
        //then replacing that months value in the tempDate array

        for (let key in monthIndex){
          if (key === tempDate[1]){
            let monthReplacement = monthIndex[`${[tempDate[1]]}`]
            tempDate.splice(1, 1, monthReplacement)
            let finalDate = tempDate.join('-')
            extractedDate += finalDate
            
          }
        }
        //setting api date
        setApiDate(extractedDate)
      }}/>
      <TextContent title={title} text={text}/>
      <Media mediaUrl={mediaUrl} mediaType={mediaType}/>
      <Footer footerText={footerText}/>
    </div>
  );
}

export default App;
