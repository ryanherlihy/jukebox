import React, {Component} from 'react';

import {Link} from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <nav className='nav-wrapper indigo'>
        <ul className='right hide-on-med-and-down'>
          <li><Link to='/playlists'>Playlists</Link></li>
          <li><Link to='/'>Create Playlist</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
