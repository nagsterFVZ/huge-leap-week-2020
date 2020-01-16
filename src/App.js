import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';

/** Views */
import AppView from './Views/AppView';

require('./Styles/base.scss');

export class App extends React.Component {
  constructor(props) {
    super( props );
  }

  render() {
    return ( 
      <AppView />
    )
  }
}

render(<App />, document.getElementById('app'));

FastClick.attach(document.body);