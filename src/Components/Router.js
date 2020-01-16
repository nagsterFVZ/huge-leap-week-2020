import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Moment from 'moment';
import { SHA256 } from 'crypto-js';

//Services
import UserService from '../Services/UserService';

//State
import { State } from '../State';

import Navigation from '../Components/Navigation';

import HomeView from '../Views/HomeView';
import SpeakersView from '../Views/SpeakersView';
import ScheduleView from '../Views/ScheduleView';
import RecapView from '../Views/RecapView';
import TeamView from '../Views/TeamView';

module.exports.RouterActions = {
  navigate( route ){
    //Go to route
    module.exports.BrowserRouter.history.push( route );

    //Reset scroll
    window.scrollTo(0, 0);
  },
  navigateBackwards(){
    module.exports.BrowserRouter.history.pop();

    //Reset scroll
    window.scrollTo(0, 0);
  },
  currentRoute(){ 
    return module.exports.BrowserRouter.history.location.pathname; 
  }
}

export default class Router extends React.Component {
    
  constructor( props ){
    super( props );

    this.state = {
      isLoading: true
    };
  }

  componentDidMount(){
    module.exports.BrowserRouter = this.refs.browserRouter;

    //Get authentication values.
    //Get browser id. This Id is based on the browser navigator.
    State.authentication.bid = localStorage.getItem('bid');
    //Get uid and sid.
    State.authentication.uid = localStorage.getItem('uid');
    State.authentication.sid = localStorage.getItem('sid');
    
    //If browser id does not exist, generate browser id.
    if(State.authentication.bid == null) {
      State.authentication.bid = SHA256(Moment().format()).toString();
      localStorage.setItem('bid', State.authentication.bid);
    }

    if(State.authentication.uid != null && State.authentication.sid != null) {

      let userService = new UserService();
      userService.getMe()
        .then((response) => {

          //Set logged in user.
          State.user = response.data;

          //If current route is login, redirect to index.
          if(module.exports.BrowserRouter.history.location.pathname === '/login') {
            module.exports.BrowserRouter.history.push('/');
          }

          //Set loading false.
          this.setState({isLoading: false});

        })
        .catch((err) => {
          //Clear all authentication variables.
          this.clearAutenticationVariables();

          //Redirect to login
          //module.exports.BrowserRouter.history.push('/login');

          //Set loading false.
          this.setState({isLoading: false});
        });

    } else {

      //If one of the two authentication variables is set, reset all.
      if(State.authentication.uid != null || State.authentication.sid != null) {
        this.clearAutenticationVariables();
      }

      //Redirect to login
      //module.exports.BrowserRouter.history.push('/login');

      //Set loading false.
      this.setState({isLoading: false});
    }
  }

  clearAutenticationVariables() {
    State.authentication.uid = null;
    State.authentication.sid = null;
    localStorage.removeItem('uid');
    localStorage.removeItem('sid');
  }

  render(){
    return (
      <BrowserRouter
          ref='browserRouter'>
          {!this.state.isLoading &&
            <div className='router'>
              <Navigation />
              <Switch>

                {/*<Route exact path='/login' component={LoginView} />*/}
                <Route exact path='/' component={HomeView} />
                <Route exact path='/speakers' component={SpeakersView} />
                <Route exact path='/schedule' component={ScheduleView} />
                <Route exact path='/recap' component={RecapView} />
                <Route exact path='/team' component={TeamView} />
                {/*<Route exact path='/' component={HomeView} />*/}
                
                {/*If no correct route found, go to index.*/}
                <Redirect to="/" />

              </Switch>

            </div>
          }
      </BrowserRouter>
    )
  }
}