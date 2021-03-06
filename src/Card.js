import React, { Component } from 'react';
import DisplayGoalSection from './DisplayGoalSection.js';

export class Card extends Component {

  render() {
    return (
      <div className="card-box">
        <h3>{this.props.title} </h3>
          {DisplayTotalDays(this.props.days)}
          {DisplayTime(this.props.startDate, this.props.endDate)}
        <h5 className="goal-info">
          <DisplayGoalSection goal={this.props.goal}/>
        </h5>
        {DisplayResults(this.props.reach, this.props.views, this.props.captureRate, this.props.interactions, this.props.interactionRate)}
        {DisplayConversion(this.props.leadConversionAmount, this.props.leadConversionValueCents, this.props.salesConversionAmount, this.props.salesConversionValueCents)}
      </div>
    );
  }
}

function DisplayTotalDays(days) {
  if (days === 1) {
    return (
    <span className="time-component">{days} Day</span>
    )
  } else if (days !== null) {
    return (
    <span className="time-component">{days} Days</span>
    )
  }
}

function DisplayTime(startDate, endDate) {
  if ((startDate !== null) && (endDate !== null)) {
    return (
      <span>
        <span className="time-label">Start</span>
        <span className="time-component">{startDate}</span>
        <span className="time-label">End</span>
        <span className="time-component">{endDate}</span>
      </span>
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
      <div className="no-data-info">No data yet.</div>
    )
  }
}

function DisplayConversion(leadConversionAmount, leadConversionValueCents, salesConversionAmount, salesConversionValueCents) {
  if ((leadConversionAmount > 0) && (leadConversionValueCents > 0) && (salesConversionAmount > 0) && (salesConversionValueCents > 0)) {
    return (
      <div>
        <div className="lead-conversion">
          <span className="lead-conversion-title">Lead Conversion</span>
          <span className="conversion-box">
            <div className="conversion-lable">Amount</div>
            <div className="conversion-amount">{leadConversionAmount}</div>
          </span>
          <span className="conversion-box">
            <div className="conversion-lable">Value Cents</div>
            <div className="conversion-amount">{leadConversionValueCents}</div>
          </span>
        </div>
        <div className="sales-conversion">
          <span className="sales-conversion-title">Sales Conversion</span>
          <span className="conversion-box">
            <div className="conversion-lable">Amount</div>
            <div className="conversion-amount">{salesConversionAmount}</div>
          </span>
          <span className="conversion-box">
            <div className="conversion-lable">Value Cents</div>
            <div className="conversion-amount">{salesConversionValueCents}</div>
          </span>
        </div>
      </div>
    )
  }
}

export default Card;
