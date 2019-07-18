import React from 'react'
import Calendar from 'react-calendar'


export default function CreateCalendar({apiDate, setApiDate}){
    return(
        <div className = 'calendar-container'>
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
          </div>
    )
}

