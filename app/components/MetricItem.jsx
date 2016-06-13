import React from 'react';
import MetricDisplay from './MetricDisplay.jsx';
import MetricControl from '../containers/MetricControl.jsx';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return <Panel ref={(ref) => {this.metricItemPanel = ref}}>
      <Grid>
        <Row><p>MetricItem: {this.props.itemKey}</p></Row>
        <Row>
          <Col>
            <MetricDisplay
              ref={(ref) => {this.metricDisplay = ref}}
              data={this.props.data}
            ></MetricDisplay>
          </Col>
        </Row>
        <Row>
          <Col>
            <MetricControl
              data={this.props.data}
              itemConfig={this.props.itemConfig}
            ></MetricControl>
          </Col>
        </Row>
      </Grid>
    </Panel>
  }
}
