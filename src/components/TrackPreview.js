import React, {Component} from 'react';

class TrackPreview extends Component {
  render() {
    if (this.props.track) {
      let image;
      if (this.props.track) {
        image = <img src={this.props.track.album.images[0].url} className='responsive-img' />;
      }

      let artists;
      if (this.props.track) {
        artists = this.props.track.artists.map((artist, index) => {
          return (
            <span style={{display: "inline"}}
              key={index}>
              {artist.name} </span>
          )
        });
      }

      return (
        <div className='card' style={{minHeight: 200}}>
          <div className='card-content'>
            {image}
            <h5>{this.props.track.name}</h5>
            <p>By: {artists}</p>
            <p>Album: {this.props.track.album.name}</p>
            <p>Duration: {Math.floor((this.props.track.duration_ms / 1000) / 60)}:{Math.floor((this.props.track.duration_ms / 1000) % 60)}</p>
            <div className='container' style={{marginTop: 10}}>
              <div className='row'>
                <button onClick={this.props.addSelected} className='btn col m12 s12'>Add Track To Playlist</button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default TrackPreview;
