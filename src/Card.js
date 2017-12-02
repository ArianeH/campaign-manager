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
        <div>Lead Conversation Amount: {this.props.leadConversationAmount}</div>
        <div>Lead Conversation Value Cents: {this.props.leadConversationValueCents}</div>
        <div>Sales Conversation Amount: {this.props.salesConversationAmount}</div>
        <div>Sales Conversation Value Cents: {this.props.salesConversationValueCents}</div>
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
  if ((reach !== null) && (views !== null) && (captureRate !== null) && (interactions !== null) && (interactionRate !== null)) {
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
  }
}

export default Card;
