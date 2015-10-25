import React, {Component} from 'react';

import TrackSearch from './TrackSearch';
import Result from './Result';

class TrackList extends Component {

  render() {
    let results
    if (this.props.results) {
      results = this.props.results.map((item, index) => {
        return (
          <Result
            key={index}
            item={item}
            addCurrentTrack={this.props.addCurrentTrack} />
        )
      });
    }

    return (
      <div className='card' style={{minHeight: 200}}>
        <div className='card-content'>
          <TrackSearch fetchTracks={this.props.fetchTracks}/>
          <ul style={{marginTop: 10}}>
            {results}
          </ul>
        </div>
      </div>
    )
  }
}

export default TrackList;
