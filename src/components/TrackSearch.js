import React, {Component} from 'react';

class TrackSearch extends Component {
  constructor() {
    super();

    this.state = {
      type: ''
    }
  }

  handleSearch() {
    if (this.searchBox.value) {
      this.props.addResults(this.searchBox.value)
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
        <button className='btn' onClick={this.handleSearch.bind(this)}>Find Track</button>
      </div>
    )
  }
}

export default TrackSearch;
