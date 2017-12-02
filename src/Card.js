import React, { Component } from 'react';
import App from './App.js';

export class Card extends Component {
  render() {
    return (
      <div className="card-box">
        <h3>{this.props.title} </h3>
        <h5>
          {DisplayGoal(this.props.goal)}
        </h5>
        {DisplayTime(this.props.days, this.props.startDate, this.props.endDate)}
        {DisplayResults(this.props.reach, this.props.views, this.props.captureRate, this.props.interactions, this.props.interactionRate)}
        <div>Lead Conversion Amount: {this.props.leadConversionAmount}</div>
        <div>Lead Conversion Value Cents: {this.props.leadConversionValueCents}</div>
        <div>Sales Conversion Amount: {this.props.salesConversionAmount}</div>
        <div>Sales Conversion Value Cents: {this.props.salesConversionValueCents}</div>
      </div>
    );
  }
}

function DisplayGoal(goal) {
  if (goal !== null) {
    return (<div>Goal: {goal.charAt(0).toUpperCase() + goal.slice(1)}</div>)
  } else {
    return (<div>
      Goal: No goal yet.
    </div>)
  }
}

function DisplayTime(days, startDate, endDate) {
  if ((days !== null) && (startDate !== null) && (endDate !== null)) {
    return (
      <p>
      <div>Total Amount of Days: {days}</div>
      <span className="start-date">Start Date: {startDate}</span>
      <span>End Date: {endDate}</span>
      </p>
      )
  }
}

function DisplayResults(reach, views, captureRate, interactions, interactionRate) {
  if ((reach > 0) && (views > 0) && (captureRate > 0) && (interactions > 0) && (interactionRate > 0)) {
    return (
        <div className="bar-diagram">
        <dd className={"result result-" + ((parseFloat(reach))/1000).toFixed(0)}>
        <span className="text">Reach: {reach}</span>
        </dd>
        <dd className={"result result-" + ((parseFloat(views))/1000).toFixed(0)} >
        <span className="text">Views: {views}</span>
        <span className="capture-rate">Capture Rate: {parseFloat(captureRate).toFixed(2)}%</span>
        </dd>
        <dd className={"result result-" + ((parseFloat(interactions))/1000).toFixed(0)}>
        <span className="text">Interactions: {interactions}</span>
        <div className="interaction-rate">Interaction Rate: {parseFloat(interactionRate).toFixed(2)}%</div>
        </dd>
        </div>
      )
  } else {
    return (
      <div className="no-data-info">No data yet.</div>)
  }
}

export default Card;
