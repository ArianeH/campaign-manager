import React, { Component } from 'react';
import DisplayGoalOptions from './DisplayGoalOptions.js';

export class DisplayGoalSection extends Component {

  render() {

    if (this.props.goal !== null) {
      return ( <div> Goal: {this.props.goal} </div> )
    } else {
      return ( <DisplayGoalOptions goal={this.props.goal}/> )
    }

  }

}

export default DisplayGoalSection;
