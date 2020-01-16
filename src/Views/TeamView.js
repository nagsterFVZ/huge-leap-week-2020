import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

//NavigationActions
import { NavigationActions } from '../Components/Navigation';

//Components
import Header from "../Components/Header"
import Carousel from "../Components/SectionCarousel"
import Footer from "../Components/Footer"
import Card from "../Components/TeamCard"

export default class TeamView extends React.Component {
  
  render(){
    return (
      <div className='team-view'>
        <div className='content'>
          <div className='root'>
            <h1 className='title'>Our Team</h1>
            <p className='speakerSearch'>The 2020 Huge Leap Week team, feel free to add us on LinkedIn using the links below</p>
          </div>
          <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Card name={"Artemiy Chervinskyy"} img={"./assets/images/team/art.jpg"} position={"Project Manager"} url={"https://www.linkedin.com/in/artemiy-chervinskyy-0465a2193/"} text={"The general project manager for the Huge Leap Week, oversees what everyone is doing and is the main contact point for speakers"}/>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card name={"Yevheniia Buzykina"} img={"./assets/images/team/jane.jpg"} position={"Supportive Manager"} url={"https://www.linkedin.com/in/yevheniia-buzykina-488b79153/"} text={"Assist everywhere she can, from poster and marketing to attracting new and interesting speakers to the event."}/>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card name={"Floris van Zeeland"} img={"./assets/images/team/floris.jpg"} position={"Technical Developer"} url={"https://www.linkedin.com/in/floris-van-zeeland-807587103/"} text={"Responsible for the website and software support of the event"}/>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card name={"Muyango Gael Shema"} img={"./assets/images/team/gael.jpg"} position={"Sales & Marketing"} url={"https://www.linkedin.com/in/muyango-gael-shema-113542142/"} text={"Handle marketing, sales and social media support"}/>
            </Grid>
          </Grid>
          <Grid container spacing={3} className='teamInfo'>
            <Grid item xs={12} lg={7}>
              <div className='teamHead'>
              <img src="./assets/images/team/team.jpg" className='teamIMG' alt="" height="100%"></img>
              </div>
            </Grid>
            <Grid item xs={12} lg={5}>
            <h1 className='title-who'>Who are we?</h1>
            <p className='whoAreWeText'>We are second and third year highly motivated students of Fontys University. We are happy to answer all your questions and ready to make your visit to our event unforgettably great. Don’t hesitate to contact us.</p>
            </Grid>
          </Grid>
          <div className="buttonContainer">
            <Button className="button" href='mailto:hugeleap@fontys.nl'>Get in touch</Button>
          </div>
        </div>
        <div className='footerSpace'>
          <Footer />
        </div>
      </div>
    )
  }
}