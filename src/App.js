import React, { Component } from 'react';
import './App.scss';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import campaignsData from './campaigns.json';

class App extends Component {
  constructor() {
    super();

    var campaigns = {campaignsData};
    var campaignsArray = [];
    Object.keys(campaignsData).forEach(function(key) {
      campaignsArray.push(campaignsData[key])
      console.log(campaignsArray)
    });

    this.state = {
      campaignsArray: campaignsArray,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
      this.setState({ pageOfItems: pageOfItems });
    }

  render() {
      return (
        <div className="container">
          <h1 className="page-heading">Events Analytics </h1>
          <div className="card-wrapper">
            {this.state.pageOfItems.map(item =>
            <Card title={item.title} goal={item.goal} days={item.days}
            startDate={item.start_date} endDate={item.end_date}
            reach={item.reach} captureRate={item.capture_rate} views={item.views}
            interactionRate={item.interaction_rate} interactions={item.interactions}
            leadConversationAmount={item.lead_conversion_amount}
            leadConversationValueCents={item.lead_conversion_value_cents}
            salesConversationAmount={item.sales_conversion_amount}
            salesConversationValueCents={item.sales_conversion_value_cents} />)
          }
          <Pagination className="page-change-bar" items={this.state.campaignsArray} onChangePage={this.onChangePage} />
          </div>
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
      <GoalSelectionDropdown />
    </div>)
  }
}

export class Card extends Component {
  render() {
    return (
      <div className="card-box">
        <h3>{this.props.title} </h3>
        <h5>
          {DisplayGoal(this.props.goal)}
        </h5>
        <div>Total Amount of Days: {this.props.days}</div>
        <span>Start Date: {this.props.startDate} </span>
        <span>End Date: {this.props.endDate}</span>
        <div>Reach: {this.props.reach}</div>
        <div>Capture Rate: {parseFloat(this.props.captureRate).toFixed(2)}</div>
        <div>Views: {this.props.views}</div>
        <div>Interaction Rate: {parseFloat(this.props.interactionRate).toFixed(2)}</div>
        <div>Interactions: {this.props.interactions}</div>
        <div>Lead Conversation Amount: {this.props.leadConversationAmount}</div>
        <div>Lead Conversation Value Cents: {this.props.leadConversationValueCents}</div>
        <div>Sales Conversation Amount: {this.props.salesConversationAmount}</div>
        <div>Sales Conversation Value Cents: {this.props.salesConversationValueCents}</div>
      </div>
    );
  }
}

export class GoalSelectionDropdown extends Component {
  constructor (props) {
    super(props);
    this.changeGoal = this.changeGoal.bind(this);
  }

  changeGoal () {
    this.refs.dropdown.hide()
  }

  render () {
    return (
      <Dropdown className="goal-dropdown" ref="dropdown">

        <DropdownTrigger>
          <span className="goal-dropdown-name">Select Goal</span>
        </DropdownTrigger>

        <DropdownContent>
          <ul className="goal-dropdown-quick-links goal-dropdown-segment">
            <li className="goal-dropdown-link">
              <a className="goal-dropdown-link-anchor" onClick={this.changeGoal}>
                Awareness
              </a>
            </li>
            <li className="goal-dropdown-link">
              <a className="goal-dropdown-link-anchor" onClick={this.changeGoal}>
                Consideration
              </a>
            </li>
            <li className="goal-dropdown-link">
              <a className="goal-dropdown-link-anchor" onClick={this.changeGoal}>
                Conversion
              </a>
            </li>
          </ul>
        </DropdownContent>

      </Dropdown>
    );
  }
}

export default App;
