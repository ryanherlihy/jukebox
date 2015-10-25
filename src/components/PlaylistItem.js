import React, {Component} from 'react';

class PlaylistItem extends Component {
  handleAddCurrentPlaylist() {
    this.props.addCurrentPlaylist(this.props.playlist);
  }

  render() {
    return (
      <li
        className='collection-item'
        onClick={this.handleAddCurrentPlaylist.bind(this)}>
        {this.props.playlist.title}
      </li>
    )
  }
}

export default PlaylistItem;
