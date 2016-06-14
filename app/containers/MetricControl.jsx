import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateMetric} from '../actions';
import Switch from 'react-bootstrap-switch';
import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';

import {Grid, Row, Col, Panel} from 'react-bootstrap'


class MetricControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let inputNode;
    switch (this.props.itemConfig.type) {
      case 'switch':
        inputNode = <Switch onChange={this._handleSwitchChange.bind(this)}
                            state={this.props.latestData === 0? false: true}></Switch>;
        break;
      case 'number':
        inputNode = <input type="number" value={this.props.latestData} disabled="true"/>;
        break;
      case 'dimmer':
        inputNode = <ReactSliderNativeBootstrap
          handleChange={this._handleDimmerChange.bind(this)}
          step={1}
          min={0}
          value={this.props.latestData}
          max={100}/>;
        break;
    }

    return <Panel>
      <p>Latest Value: {this.props.latestData}</p>
      {inputNode}
    </Panel>
  }

  _handleSwitchChange(state) {
    console.log("switch value: ", state);
    this.props.handleControlChange(this.props.itemKey, state ? 1 : 0);
  }

  _handleDimmerChange(event) {
    console.log("slider: ", event.target.value);
    this.props.handleControlChange(this.props.itemKey, parseInt(event.target.value, 10));
  }

  handleInputChange(event) {
    var newValue = event.target.value;
    this.setState({latest: newValue});
    this.props.dispatch(updateMetric(this.state.key, parseInt(newValue, 10)));
  }
}

const mapStateToProps = (state, ownProps) => {
  let latestData = 0;
  if (Array.isArray(ownProps.data.data) && ownProps.data.data.length) {
    latestData = ownProps.data.data[ownProps.data.data.length - 1][1];
  }
  return {
    itemKey: ownProps.itemKey,
    data: ownProps.data,
    itemConfig: ownProps.itemConfig,
    latestData: latestData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleControlChange: (itemKey, value) => {
      dispatch(updateMetric(itemKey, value))
    }
  };
};

MetricControl.propTypes = {
  data: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MetricControl)
