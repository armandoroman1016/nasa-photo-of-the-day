import React from 'react'
import { Grid} from 'semantic-ui-react'
import Calendar from '../calendar-component/calendar'
import Media from '../media-components/media'
import TextContent from '../text-components/text-content'
import 'semantic-ui-css/semantic.min.css'

const BodyContentCelled = ({title, text, apiDate, setApiDate, mediaUrl, mediaType}) => (
  <Grid celled>
    <Grid.Row>
    <Grid.Column width={4} >
        <Calendar setApiDate={setApiDate} apiDate={apiDate}/>
      </Grid.Column>
      <Grid.Column width={12}>
        <TextContent title={title} text={text}/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={16}>
        <Media mediaUrl={mediaUrl} mediaType={mediaType}/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default BodyContentCelled