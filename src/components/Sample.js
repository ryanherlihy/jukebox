import React, {Component} from 'react';

class Sample extends Component {
  render() {
    return (
      <table>
        <tr>
          <td style= {{width: '30%'}}>
            <img className="newappIcon" src="images/newapp-icon.png" />
          </td>
          <td>
            <h1>Yo there!</h1>
            <p>
              Thanks for creating a <span className = "blue">NodeJS Starter Application</span>. Get started by reading our <a href = "https://www.ng.bluemix.net/docs/#starters/nodejs/index.html#nodejs">documentation</a> or use the Start Coding guide under your app in your dashboard.
            </p>
          </td>
        </tr>
      </table>
    )
  }
}

export default Sample;
