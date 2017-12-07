import React, { Component } from 'react';
import './App.scss';
import Card from './Card.js';
import Pagination from './Pagination';
import campaignsData from './campaigns.json';

class App extends Component {
  constructor() {
    super();

    var campaignsArray = [];
    Object.keys(campaignsData).forEach(function(key) {
      campaignsArray.push(campaignsData[key])
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
          <h1 className="page-heading">Event Analytics </h1>
          <div className="card-wrapper">
            {this.state.pageOfItems.map(item =>
            <Card title={item.title} goal={item.goal} days={item.days}
            startDate={item.start_date} endDate={item.end_date}
            reach={item.reach} captureRate={item.capture_rate} views={item.views}
            interactionRate={item.interaction_rate} interactions={item.interactions}
            leadConversionAmount={item.lead_conversion_amount}
            leadConversionValueCents={item.lead_conversion_value_cents}
            salesConversionAmount={item.sales_conversion_amount}
            salesConversionValueCents={item.sales_conversion_value_cents} />)
          }
          </div>
          <Pagination className="page-change-bar" items={this.state.campaignsArray} onChangePage={this.onChangePage} />
        </div>
      );
  }
}

export default App;
