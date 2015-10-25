import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as jukeActions from '../actions/jukeActions';

import TrackList from './TrackList';
import Selected from './Selected';
import TrackPreview from './TrackPreview';

class Dashboard extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      jukeActions.addLocation(position);
    })
  }

  render() {
    console.log(this.props.currentLocation);
    // if ('geolocation' in navigator) {
    //   jukeActions.getLocation();
    // }

    let rightContent;
    if (this.props.currentTrack) {
      rightContent = (
        <TrackPreview
          track={this.props.currentTrack}
          addSelected={this.props.addSelected} />
      );
    } else {
      rightContent = (
        <Selected
          selected={this.props.selected.playlist}
          addSavedPlaylist={this.props.addSavedPlaylist} />
      )
    }

    return (
      <div className='container' style={{marginTop: 20}}>
        <div className='row'>
          <div className='col m6 s12'>
            <TrackList
              results={this.props.results}
              fetchTracks={this.props.fetchTracks}
              addCurrentTrack={this.props.addCurrentTrack} />
          </div>
          <div className='col m6 s12'>
            {rightContent}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results,
    selected: state.selected,
    saved: state.saved,
    currentTrack: state.currentTrack
  };
}

export const DashboardContainer = connect(
  mapStateToProps,
  jukeActions
)(Dashboard);
