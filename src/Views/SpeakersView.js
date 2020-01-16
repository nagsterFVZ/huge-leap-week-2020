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
import Ticket from "../Components/TicketCreator"


export default class SpeakersView extends React.Component {
  
  render(){
    return (
      <div className='speakers-view'>
        <div className='content'>
          <div className='root'>
            <br />
            <h1 className='title-speakers'>Speakers & Workshops</h1>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={3}>
                <Card name={"Cybersecurity and GDPR"} img={"./assets/images/speakers/Capgemini-Ana.png"} position={"Ana-Isabel Llacayo & Alex Verbiest"} url={""} text={"The presentation will combine an introduction to the cybersecurity aspect of the EU General Data Protection Regulation (GDPR) and a live hacking demo."}/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Card name={"JW Player: An Introduction"} img={"./assets/images/speakers/JW-Jeroen.png"} position={"Jeroen Wijering"} url={""} text={"JW Player pioneered video on the web over a decade ago and con2nue to innovate as the world’s largest network-independent plaSorm for video delivery and intelligence."}/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Card name={"An Introduction to 5G"} img={"./assets/images/speakers/Sioux-Andrei.png"} position={"Andrei Novikov"} url={""} text={"5G definition, general feature overview, applications, comparison with previous generation. 5G/NR network architecture, frame structure, and current state of the technology."}/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Card name={"Infinite Machine Creativity"} img={"./assets/images/speakers/Sogeti-Thijs.png"} position={"Thijs Pepping"} url={""} text={"Many industries are starting to use GANs as a catalyst in creative processes such as designing shoes or cars and finding new molecules for medicines or materials."}/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Card name={"GANDHI"} img={"./assets/images/speakers/Volksbank-Marjolein.png"} position={"Marjolein van Nuland & Wouter Poncin"} url={""} text={"In the session the students will be introduced to the world of GANs (Generative Adverserial Networks) which are known by their application in deep fakes but are applicable to all sorts of problems."}/>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Card name={"Managing Cloud Security"} img={"./assets/images/speakers/SecureLink-Timl.png"} position={"Tim Lemmob"} url={""} text={"The Cloud represents a growing platform for malicious parties who utilize increasingly smarter methods to exfiltrate information and / or make information (permanently) unavailable."}/>
              </Grid>
            </Grid>
            <br />
            <br />
            <p className='speakerSearch'>Not all the speakers are shown here, don't worry there are plenty more check the schedule for a full lineup of lectures.</p>
          </div>
          {/*<div className="buttonContainer">
            <Button className="button" href='mailto:a.chervinskyy@student.fontys.nl'>Get in touch</Button>
          </div>*/}
        </div>
        <Ticket />
        <div className='footerSpace'>
          <Footer />
        </div>
      </div>
    )
  }
}