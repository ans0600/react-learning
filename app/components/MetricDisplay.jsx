import React from 'react';
var MetricListStore = require('../stores/MetricListStore');

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
        if (!Array.isArray(this.state.data)) {
            this.state.data = [];
        }
    }
    componentDidMount() {
        MetricListStore.listen(this._onMetricDataChange.bind(this));
    }
    componentWillUnmount() {
        MetricListStore.unlisten(this._onMetricDataChange.bind(this));
    }
    render() {
        return <Panel>
            <p>MetricDisplay</p>
            <p>Data List: {this.state.data.join(', ')}</p>
            <p>Latest Value: {this.state.latest}</p>
        </Panel>
    }
    _onMetricDataChange(metricListStore) {
        console.log('In Metric Display', metricListStore.getItemDataByKey(this.state.key));
        this.setState(metricListStore.getItemDataByKey(this.state.key));
    }
}