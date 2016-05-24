import React from 'react';
var MetricItemStore = require('../stores/MetricItemStore');
var MetricItemActions = require('../actions/MetricActions');

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        MetricItemStore.listen(this._onMetricDataChange.bind(this));
    }
    componentWillUnmount() {
        MetricItemStore.unlisten(this._onMetricDataChange.bind(this));
    }
    render() {
        return <Panel>
            <p>MetricControl</p>
            <input type="number" value={this.state.latest} onChange={this.handleInputChange}/>
        </Panel>
    }
    handleInputChange(event) {
        var newValue = event.target.value;
        MetricItemActions.newItemData(newValue);
    }
    _onMetricDataChange(metricItemStore) {
        console.log('In Metric Control', metricItemStore.getItemData());
        this.setState(metricItemStore.getItemData());
    }
}