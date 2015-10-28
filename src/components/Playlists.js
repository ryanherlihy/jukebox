import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as jukeActions from '../actions/jukeActions';

import PlaylistItem from './PlaylistItem';
import TrackPreview from './TrackPreview';

class Playlists extends Component {
  componentDidMount() {
    this.props.fetchPlaylists();

    $('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }

  isPlaylistInRange(coords, currentLocation) {
    console.log('prop', this.props);
    let latDiff = Math.abs(currentLocation.coords.latitude - coords.lat);
    let lngDiff = Math.abs(currentLocation.coords.longitude - coords.lng);
    console.log(latDiff, lngDiff);
    if (latDiff < 0.0001 && lngDiff < 0.0001) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let playlists = [];
    let empty;
    if (!this.props.playlists) {
      empty = (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      );
    } else if (this.props.playlists.length === 0) {
      empty = <p>No playlists available</p>;
    } else {
      playlists = Object.keys(this.props.playlists).map((key, index) => {
        if (this.isPlaylistInRange(this.props.playlists[key].coords, this.props.currentLocation)) {
          return (
            <PlaylistItem
              key={index}
              playlist={this.props.playlists[key]}
              addCurrentPlaylist={this.props.addCurrentPlaylist} />
          )
        }
      })
    }

    let rightContent;
    if (this.props.currentPlaylist) {
      rightContent = (
        <div className='card'>
          <div className='card-content'>
            <h5>{this.props.currentPlaylist.title}</h5>
            <ul className='collapsible popout' dataCollapsible='accordion'>
              {this.props.currentPlaylist.playlist.map((item, index) => {
                return (
                  <li key={index}>
                    <div className='collapsible-header'>{item.name}</div>
                    <div className='collapsible-body'>
                      <TrackPreview
                        track={item} />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className='container' style={{marginTop: 20}}>
        <div className='row'>
          <div className='col m6 s12'>
            <div className='card'>
              <div className='card-content'>
                <h5>Created Playlists</h5>
                {empty}
                <ul className='collection'>
                  {playlists}
                </ul>
              </div>
            </div>
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
    playlists: state.saved,
    currentPlaylist: state.currentPlaylist,
    currentLocation: state.currentLocation
  }
}

export const PlaylistsContainer = connect(
  mapStateToProps,
  jukeActions
)(Playlists);
