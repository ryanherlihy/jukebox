import React, {Component} from 'react';

class Result extends Component {
  handleSelect() {
    this.props.addSelected(this.props.item);
  }

  render() {
    return (
      <li onClick={this.handleSelect.bind(this)}>
        <div className='collapsible-header'>{this.props.item.name}</div>
        <div className='collapsible-body'>
          <img src={
              this.props.item.images.length > 0 ? this.props.item.images[0].url : ''
            } />
        </div>
      </li>
    )
  }
}

export default Result;
