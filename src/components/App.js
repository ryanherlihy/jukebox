import React, {Component} from 'react';

import {addLocation} from '../actions/jukeActions';

import Navigation from './Navigation';

class App extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        addLocation(position);
      }, function() {
        console.log('Error getting location.');
      });
    }
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
