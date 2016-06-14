import React from 'react';
import {connect} from 'react-redux';
import DataVisualizaion from '../components/DataVisualizaion.jsx';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

class MetricDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Panel className="metricDisplay">
      <DataVisualizaion
        chartData={this.props.chartData}></DataVisualizaion>
    </Panel>
  }
}

const utcSecondsToString = (utcSeconds) => {
  let d = new Date(0);
  d.setUTCMilliseconds(utcSeconds);
  return d.toLocaleTimeString() + " " + d.toLocaleDateString();
};

const mapStateToProps = (state, ownProps) => {

  let labels = [], currentData = [];
  if (Array.isArray(ownProps.data.data)) {
    ownProps.data.data.forEach((item) => {
      let time = item[0];
      let value = item[1];
      labels.push(utcSecondsToString(time));
      currentData.push(value);
    });
  }

  return {
    chartData: {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MetricDisplay)
