import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkedinIcon from 'svg-react-loader?name=Icon!../Assets/Icons/logo-linkedin.svg';
//icons8-linkedin

export default class TeamCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active? this.props.active : false
    };
  }
  render() {
    return (
    <Card className='card'>
      <CardActionArea>
      <CardMedia
          component="img"
          alt={this.props.name}
          height="500"
          image={this.props.img}
          title={this.props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {this.props.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
          {this.props.position}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='actions'>
        <Button size="small" color="default" href={this.props.url}>
          <LinkedinIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
}