import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const CreateHeader = ({date}) => (
    <Segment clearing>
      <Header as='h2' floated='right'>
      Nasa Content Daily
      </Header>
      <Header as='h2' floated='left'>
      {date}
      </Header>
    </Segment>
  )
  
  export default CreateHeader



  
  