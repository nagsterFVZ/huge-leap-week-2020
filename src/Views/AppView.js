import React from 'react';

//Components
import Router from "../Components/Router";

export default class AppView extends React.Component {
  
  render(){
    return (
      <div className='app-view'>
        <Router />
      </div>
    )
  }
}