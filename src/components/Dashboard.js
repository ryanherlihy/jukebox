import React, {Component} from 'react';

import TrackList from './TrackList';
import Selected from './Selected';
import TrackPreview from './TrackPreview';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      selected: [],
      currentTrack: null
    }

    this.addResults = this.addResults.bind(this);
    this.addSelected = this.addSelected.bind(this);
    this.addCurrentTrack = this.addCurrentTrack.bind(this);
  }

  onChange(newState) {
    this.setState({
      results: newState
    })
  }

  addResults(query) {
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'track'
      },
      success: function (response) {
        this.onChange(response.tracks.items)
      }.bind(this)
    });
  }

  addSelected() {
    this.setState({
      selected: this.state.selected.concat(this.state.currentTrack),
      currentTrack: null
    })
  }

  addCurrentTrack(track) {
    this.setState({
      currentTrack: track
    })
  }

  render() {
    let rightContent;
    if (this.state.currentTrack) {
      rightContent = (
        <TrackPreview
          track={this.state.currentTrack}
          addSelected={this.addSelected} />
      );
    } else {
      rightContent = (
        <Selected
          selected={this.state.selected} />
      )
    }

    return (
      <div className='container' style={{marginTop: 20}}>
        <div className='row'>
          <div className='col m6'>
            <TrackList
              results={this.state.results}
              addResults={this.addResults}
              addCurrentTrack={this.addCurrentTrack} />
          </div>
          <div className='col m6'>
            {rightContent}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
