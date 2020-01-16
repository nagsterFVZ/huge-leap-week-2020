
const { red, blue, green } = require('@material-ui/core/colors');

import React from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class Landingpopup extends React.Component {
  
  constructor(props) 
    { 
        super(props); 
        this.state = { open : true }; 
        this.classes = {
          card: {
            maxWidth: 500,
          },
          media: {
            height: 240,
          },
        }
    } 

  render(){

    return (
        <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <AutoRotatingCarousel
          label='To Site'
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          onStart={() => this.setState({ open: false })}
          style={{ position: 'absolute' }}
        >
          <Card className={this.classes.card}>
      <CardActionArea>
        <CardMedia
          className={this.classes.media}
          image="https://elements-video-cover-images-0.imgix.net/files/250680177/preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=e47913a88f97c57e2f696df5018e9cbf"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Offered say visited elderly and. Waited period are played family man formed. He ye body or made on pain part meet. You one delay nor begin our folly abode. By disposed replying mr me unpacked no. As moonlight of my resolving unwilling. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </AutoRotatingCarousel>
      </div>
    )
  }
}