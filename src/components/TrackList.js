import React, {Component} from 'react';

import TrackSearch from './TrackSearch';
import Result from './Result';

class TrackList extends Component {

  render() {
    let results = this.props.results.map((item, index) => {
      console.log(item);
      return (
        <Result
          key={index}
          item={item}
          addCurrentTrack={this.props.addCurrentTrack} />
      )
    });

    return (
      <div className='card'>
        <div className='card-content'>
          <TrackSearch addResults={this.props.addResults}/>
          <ul style={{marginTop: 10}}>
            {results}
          </ul>
        </div>
      </div>
    )
  }
}

export default TrackList;
