import React, { Component } from 'react';
import DisplayGoalOptions from './DisplayGoalOptions.js';

export class DisplayGoalSection extends Component {
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
      { this.props.goal !== null &&
        <div> Goal: {this.props.goal} </div>
      }
      { this.props.goal == null &&
          <DisplayGoalOptions goal={this.props.goal}/>
      }

      </div>
    );
  }

}

// function evaluateGoal(goal) {
//   if (goal !== null) {
//     return (<div>Goal: {goal}</div>)
//   } else {
//     // TODO
//   }
// }

export default DisplayGoalSection;
