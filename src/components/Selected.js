import React, {Component} from 'react';

class Selected extends Component {

  handleAddSavedPlaylist() {
    if (this.playlistTitle.value) {
      this.props.addSavedPlaylist(
        this.playlistTitle.value,
        this.props.selected.playlist,
        this.props.loc
      );
    } else {
      alert('You must enter a title for the playlist');
    }
    this.playlistTitle.value = '';
  }

  render() {
    console.log(this.props);
    let selected = this.props.selected.playlist.map((item, index) => {
      return (
        <li key={index}>
          <div className='collapsible-header'>{item.name}</div>
        </li>
      )
    });

    let empty;
    if (this.props.selected.playlist.length === 0) {
      empty = <p>Empty Playlist</p>;
    } else {
      empty = (
        <div className='container' style={{marginTop: 10}}>
          <div className='row'>
            <button onClick={this.handleAddSavedPlaylist.bind(this)} className='btn col m12 s12'>Save And Create Playlist</button>
          </div>
        </div>
      )
    }

    return (
      <div className='card' style={{minHeight: 200}}>
        <div className='card-content'>
          <input
            ref={(ref) => this.playlistTitle = ref}
            className='input-field'
            type='text'
            placeholder='Enter Playlist Title' />
          <ul>
            {selected}
          </ul>
          {empty}
        </div>
      </div>
    )
  }
}

export default Selected;
