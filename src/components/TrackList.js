import React, {Component} from 'react';

import TrackSearch from './TrackSearch';
import Result from './Result';

class TrackList extends Component {

  render() {
    let results = this.props.results.map((item, index) => {
      return (
        <Result
          key={index}
          item={item}
          addSelected={this.props.addSelected} />
      )
    });

    return (
      <div>
        <TrackSearch addResults={this.props.addResults}/>
        <ul className='collapsible popout' data-collapsible="accordion">
          {results}
        </ul>
      </div>
    )
  }
}

export default TrackList;
