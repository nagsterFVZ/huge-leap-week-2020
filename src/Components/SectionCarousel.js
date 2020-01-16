import React from "react";
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
import Card from "./SpeakerCard";
import Button from '@material-ui/core/Button';

export default class SectionCarousel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='carosel'>
      <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Card />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card />
            </Grid>
      </Grid>
      <div className='moreSpeakers'>
      <Button variant="contained" color="default" className="moreSpeakers">
      Primary
     </Button>
     </div>
     </div>
    );
  }
}