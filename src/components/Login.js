import React, {Component} from 'react';

import {Link} from 'react-router';

class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col m6 s12 offset-m3'>
            <div className='card' style={{marginTop: 20}}>
              <div className='card-content'>
                <div className='container'>
                  <div className='row'>
                    <Link to='/playlists'><button className='btn col m12 s12'>
                      Login
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
