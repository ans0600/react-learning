import React from 'react';
import {Line} from 'react-chartjs';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class DataVisualizaion extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
  }

  _utcSecondsToString(utcSeconds) {
    let d = new Date(0);
    d.setUTCMilliseconds(utcSeconds);
    return d.toLocaleTimeString() + " " + d.toLocaleDateString();
  }
  
  _normalizeChartData() {
    let chartData = {};
    let labels = [], currentData = [];
    // debugger;
    if (Array.isArray(this.props.data.data)) {
      this.props.data.data.forEach((item) => {
        let time = item[0];
        let value = item[1];
        labels.push(this._utcSecondsToString(time));
        currentData.push(value);
      });
    }

    return {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          data: currentData,
          fill: false,
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)"
        }
      ]
    }
  }

  render() {
    return <Line data={this._normalizeChartData()} options={{responsive: true, maintainAspectRatio: false}} height="200"></Line>
  }
}
