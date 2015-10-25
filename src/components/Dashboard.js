import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as jukeActions from '../actions/jukeActions';

import TrackList from './TrackList';
import Selected from './Selected';
import TrackPreview from './TrackPreview';

class Dashboard extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  //   this.state = {
  //     results: [],
  //     selected: {
  //       title: '',
  //       playlist: []
  //     },
  //     saved: [],
  //     currentTrack: null
  //   }
  //
  //   this.addResults = this.addResults.bind(this);
  //   this.addSelected = this.addSelected.bind(this);
  //   this.addCurrentTrack = this.addCurrentTrack.bind(this);
  //   this.addSavedPlaylist = this.addSavedPlaylist.bind(this);
  // }
  //
  // onChange(newState) {
  //   this.setState({
  //     results: newState
  //   })
  // }
  //
  // addResults(query) {
  //   $.ajax({
  //     url: 'https://api.spotify.com/v1/search',
  //     data: {
  //       q: query,
  //       type: 'track'
  //     },
  //     success: function (response) {
  //       this.onChange(response.tracks.items)
  //     }.bind(this)
  //   });
  // }
  //
  // addSelected() {
  //   this.setState({
  //     selected: {
  //       playlist: this.state.selected.playlist.concat(this.state.currentTrack)
  //     },
  //     currentTrack: null
  //   })
  // }
  //
  // addCurrentTrack(track) {
  //   this.setState({
  //     currentTrack: track
  //   })
  // }
  //
  // addSavedPlaylist(title) {
  //   this.setState({
  //     saved: {
  //       title: title,
  //       playlist: this.state.saved.concat(this.state.selected)
  //     },
  //     selected: {
  //       playlist: []
  //     }
  //   })
  // }

  render() {
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
