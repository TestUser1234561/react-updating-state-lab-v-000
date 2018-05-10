import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  click = () => {
    this.click({
      timesClicked: this.state.timesClicked++,
    });
  }

  render() {
    return (
      <button onClick={this.click}>{this.state.timesClicked}</button>
    );
  }
}
