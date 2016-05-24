import React from 'react';
var MetricListStore = require('../stores/MetricListStore');
var MetricListActions = require('../actions/MetricListActions');

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
    }
    componentDidMount() {
        MetricListStore.listen(this._onMetricDataChange.bind(this));
    }
    componentWillUnmount() {
        MetricListStore.unlisten(this._onMetricDataChange.bind(this));
    }
    render() {
        return <Panel>
            <p>MetricControl</p>
            <input type="number" value={this.state.latest} onChange={this.handleInputChange.bind(this)}/>
        </Panel>
    }
    handleInputChange(event) {
        var newValue = event.target.value;

        MetricListActions.newItemData({
            key: this.state.key,
            newValue: newValue
        });
    }
    _onMetricDataChange(metricListStore) {
        console.log('In Metric Control', metricListStore.getItemDataByKey(this.state.key));
        this.setState(metricListStore.getItemDataByKey(this.state.key));
    }
}