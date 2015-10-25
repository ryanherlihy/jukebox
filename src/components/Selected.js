import React, {Component} from 'react';

class Selected extends Component {
  render() {
    let selected = this.props.selected.map((item, index) => {
      return (
        <li key={index}>
          <div className='collapsible-header'>{item.name}</div>
        </li>
      )
    });

    return (
      <div>
        <ul className='collapsible popout' data-collapsible="accordion">
          {selected}
        </ul>
      </div>
    )
  }
}

export default Selected;
