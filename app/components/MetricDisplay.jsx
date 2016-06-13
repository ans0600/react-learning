import React from 'react';
import DataVisualizaion from '../components/DataVisualizaion.jsx';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Panel className="metricDisplay">
      <DataVisualizaion
        data={this.props.data}></DataVisualizaion>
    </Panel>
  }
}
