import React from 'react';

//NavigationActions
import { NavigationActions } from '../Components/Navigation';
import Schedule from "../Components/Schedule"
import Footer from "../Components/Footer"
import Ticket from "../Components/TicketCreator"


export default class ScheduleView extends React.Component {
  
  render(){
    return (
      <div className='schedule-view'>
        <div className='content'>
        <h1 className='title-speakers'>Schedule</h1>
            <Schedule />
        </div>
        <Ticket />
        <div className='footerSpace'>
          <Footer />
        </div>
      </div>
    )
  }
}