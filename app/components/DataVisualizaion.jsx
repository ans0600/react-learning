import React from 'react';
import {Line} from 'react-chartjs';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class DataVisualizaion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Line data={this.props.chartData} options={{responsive: true, maintainAspectRatio: false}} height="200"></Line>
  }
}
