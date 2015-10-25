import React, {Component} from 'react';

class TrackSearch extends Component {

  handleSearch() {
    if (this.searchBox.value) {
      this.props.fetchTracks(this.searchBox.value)
    }
    this.searchBox.value = '';
  }

  render() {
    return (
      <div>
        <input
          ref={(ref) => this.searchBox = ref}
          className='input-field'
          type='text'
          placeholder='Search Tracks' />
        <button className='btn col m12' style={{marginBottom:10}} onClick={this.handleSearch.bind(this)}>Find Track</button>
      </div>
    )
  }
}

export default TrackSearch;
