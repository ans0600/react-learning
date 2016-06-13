import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateMetric} from '../actions';
import Switch from 'react-bootstrap-switch';
import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';

import {Grid, Row, Col, Panel} from 'react-bootstrap'


class MetricControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestData: 0
    };
  }

  componentDidMount() {
    // todo
    this.setState({latestData: this._getLatestData()})
  }

  _getLatestData() {
    if (Array.isArray(this.props.data.data) && this.props.data.data.length) {
      let latestData = this.props.data.data[this.props.data.data.length - 1][1];
      return latestData;
    }
    return 0;
  }

  render() {
    let inputNode;
    switch(this.props.itemConfig.type) {
      case 'switch':
        inputNode = <Switch onChange={this._handleSwitchChange.bind(this)}></Switch>;
        break;
      case 'number':
        inputNode = <input type="number" value={this._getLatestData()} disabled="true"/>;
        break;
      case 'dimmer':
        inputNode = <ReactSliderNativeBootstrap
          handleChange={this._handleDimmerChange.bind(this)}
          step={1}
          min={0}
          value={this.state.latestData}
          max={100}/>;
        break;
    }

    return <Panel>
      <p>Latest Value: {this._getLatestData()}</p>
      {inputNode}
    </Panel>
  }

  _handleSwitchChange(state) {
    console.log("switch value: ", state);
  }

  _handleDimmerChange(event) {
    this.setState({ latestData: event.target.value });
    console.log("slider: ", event.target.value);
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
