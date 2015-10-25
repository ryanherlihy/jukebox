import React, {Component} from 'react';

class Result extends Component {
  handleSelect() {
    this.props.addSelected(this.props.item);
  }

  render() {
    return (
      <li onClick={this.handleSelect.bind(this)}>
        <div className='collapsible-header'>{this.props.item.name}</div>
      </li>
    )
  }
}

export default Result;
