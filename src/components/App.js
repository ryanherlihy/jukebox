import React, {Component} from 'react';

import {getLocation} from '../actions/jukeActions';

import Navigation from './Navigation';

class App extends Component {
  componentDidMount() {
    // getLocation();
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

export default App;
