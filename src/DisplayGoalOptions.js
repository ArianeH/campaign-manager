import React, { Component } from 'react';

export class DisplayGoalOptions extends Component {
  constructor() {
    super();

    this.state = { value: "select" };

    this.change = this.change.bind(this);
  }

  change(event) {
    this.setState({value: event.target.value})
  }

  render() {

    return (
      <div>

        <div><span>Goal: </span><span>{this.state.value}</span></div>

        <select className="goal-selection-menu" onChange={this.change} value={this.state.value}>
          <option selected disabled className="hide-option" value="select">Select Goal</option>
          <option value="awareness">Awareness</option>
          <option value="consideration">Consideration</option>
          <option value="conversions">Conversions</option>
        </select>

      </div>
    );
  }

}


export default DisplayGoalOptions;
