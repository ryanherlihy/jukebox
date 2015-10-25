import React, {Component} from 'react';

import TrackList from './TrackList';
import Selected from './Selected';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      selected: []
    }

    this.addResults = this.addResults.bind(this);
    this.addSelected = this.addSelected.bind(this);
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
        type: 'artist'
      },
      success: function (response) {
        this.onChange(response.artists.items)
      }.bind(this)
    });
  }

  addSelected(item) {
    this.setState({
      selected: this.state.selected.concat(item)
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col m6'>
            <div className='card'>
              <div className='card-content'>
                <TrackList
                  results={this.state.results}
                  addResults={this.addResults}
                  addSelected={this.addSelected} />
              </div>
            </div>
          </div>
          <div className='col m4'>
            <div className='card'>
              <div className='card-content'>
                <Selected
                  selected={this.state.selected} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
