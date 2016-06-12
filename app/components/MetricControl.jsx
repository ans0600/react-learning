import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateMetric} from '../actions';

import {Grid, Row, Col, Panel} from 'react-bootstrap'


class MetricControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }

  render() {
    return <Panel>
      <p>MetricControl</p>
      <p>Latest Value: {this.state.latest}</p>
      <input type="number" data-current-value={this.state.latest} value={this.state.latest}
             onChange={this.handleInputChange.bind(this)}/>
    </Panel>
  }

  handleInputChange(event) {
    var newValue = event.target.value;
    this.setState({latest: newValue});
    this.props.dispatch(updateMetric(this.state.key, parseInt(newValue, 10)));
  }
}

MetricControl.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default connect()(MetricControl)