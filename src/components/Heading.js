import React, {Component} from 'react';

class Heading extends Component {
  render() {
    return (
      <div className='card indigo'>
        <div className='card-content'>
          <h5 className='white-text'>{this.props.text}</h5>
        </div>
      </div>
    )
  }
}

export default Heading;
