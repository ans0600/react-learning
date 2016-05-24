import React from 'react';
var MetricItemStore = require('../stores/MetricItemStore');

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricDisplay extends React.Component {
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
            <p>MetricDisplay</p>
            <p>Data List: {this.state.data.join(', ')}</p>
            <p>Latest Value: {this.state.latest}</p>
        </Panel>
    }
    _onMetricDataChange(metricItemStore) {
        console.log('In Metric Display', metricItemStore.getItemData());
        this.setState(metricItemStore.getItemData());
    }
}