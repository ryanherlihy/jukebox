import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as jukeActions from '../actions/jukeActions';

import Navigation from './Navigation';

class App extends Component {
  componentDidMount() {
    if (navigator.geolocation && !this.props.currentLocation) {
      this.props.fetchLocation();
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

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps,
  jukeActions
)(App);
