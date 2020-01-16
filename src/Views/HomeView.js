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
import Card from "../Components/SpeakerCard"
import Companies from "../Components/Companies"
import Schedule from "../Components/Schedule"
import Ticket from "../Components/TicketCreator"

export default class HomeView extends React.Component {
  
  render(){
    return (
      <div className='home-view'>
        <Header />
        <div className='content'>
          <div className='root'>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                  <img className='slides' src="./assets/images/slide1.jpg" alt="" height="100%" width="100%"></img>
              </Grid>
              <Grid item xs={12} lg={6}>
                <h1 className='title'>What is the Huge Leap Week</h1>
                <p className='whatIs'>The Huge Leap Week is 3 days of awesome talks and workshops given by external companies and fontys teachers. It's a great place to hear about and discover things you might have not known about before</p>
              </Grid>
            </Grid>
            <br></br>
            <br></br>
            <h1 className='title-speakers'>MC & Speakers</h1>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={3}>
                <Card name={"MC"} img={"./assets/images/speakers/mc.png"} position={"Michel van Zeist"} url={"https://www.linkedin.com/in/muyango-gael-shema-113542142/"} text={"In the session the students will be introduced to the world of GANs (Generative Adverserial Networks) which are known by their application in deep fakes but are applicable to all sorts of problems."}/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Card name={"Cybersecurity and GDPR"} img={"./assets/images/speakers/Capgemini-Ana.png"} position={"Ana-Isabel Llacayo & Alex Verbiest"} url={"https://www.linkedin.com/in/artemiy-chervinskyy-0465a2193/"} text={"The presentation will combine an introduction to the cybersecurity aspect of the EU General Data Protection Regulation (GDPR) and a live hacking demo."}/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Card name={"An Introduction to 5G"} img={"./assets/images/speakers/Sioux-Andrei.png"} position={"Andrei Novikov"} url={"https://www.linkedin.com/in/floris-van-zeeland-807587103/"} text={"5G definition, general feature overview, applications, comparison with previous generation. 5G/NR network architecture, frame structure, and current state of the technology."}/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Card name={"Infinite Machine Creativity"} img={"./assets/images/speakers/Sogeti-Thijs.png"} position={"Thijs Pepping"} url={"https://www.linkedin.com/in/muyango-gael-shema-113542142/"} text={"Many industries are starting to use GANs as a catalyst in creative processes such as designing shoes or cars and finding new molecules for medicines or materials."}/>
              </Grid>
            </Grid>
            </div>
            <div className="buttonContainer">
              <Button className="button" href='/speakers'>See our other speakers</Button>
            </div>
            <h1 className='title-speakers'>Companies</h1>
            <Companies />
            <h1 className='title-speakers'>Schedule</h1>
            <Schedule />
            <Ticket />
        </div>
        <div className='footerSpace'>
          <Footer />
        </div>
      </div>
    )
  }
}