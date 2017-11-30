import React, { Component } from 'react';
import './App.css';
import campaignsData from './campaigns.json';

class App extends Component {
  render() {
      var campaigns = {campaignsData};
      var campaignsArray = [];
      Object.keys(campaignsData).forEach(function(key) {
        campaignsArray.push(campaignsData[key])
      });
      return (
        <div className="container">
          <h1 className="page-heading">Events Analytics </h1>
          <div className="card-wrapper">{
            campaignsArray.map(item =>
              <Card title={item.title} goal={item.goal} days={item.days}
              startDate={item.start_date} endDate={item.end_date}
              reach={item.reach} captureRate={item.capture_rate} views={item.views}
              interactionRate={item.interaction_rate} interactions={item.interactions}
              leadConversationAmount={item.lead_conversion_amount}
              leadConversationValueCents={item.lead_conversion_value_cents}
              salesConversationAmount={item.sales_conversion_amount}
              salesConversationValueCents={item.sales_conversion_value_cents} />)
          }
          </div>;
        </div>
      );
  }
}

export class Card extends Component {
  render() {
    return (
      <div className="card-box">
        <h3>{this.props.title} </h3>
        <h5>Goal: {this.props.goal}</h5>
        <div>Total Amount of Days: {this.props.days}</div>
        <span>Start Date: {this.props.startDate} </span>
        <span>End Date: {this.props.endDate}</span>
        <div>Reach: {this.props.reach}</div>
        <div>Capture Rate: {this.props.captureRate}</div>
        <div>Views: {this.props.views}</div>
        <div>Interaction Rate: {this.props.interactionRate}</div>
        <div>Interactions: {this.props.interactions}</div>
        <div>Lead Conversation Amount: {this.props.leadConversationAmount}</div>
        <div>Lead Conversation Value Cents: {this.props.leadConversationValueCents}</div>
        <div>Sales Conversation Amount: {this.props.salesConversationAmount}</div>
        <div>Sales Conversation Value Cents: {this.props.salesConversationValueCents}</div>
      </div>
    );
  }
}

export default App;
