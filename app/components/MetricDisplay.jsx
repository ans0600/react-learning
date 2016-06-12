import React from 'react';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
        if (!Array.isArray(this.state.data)) {
            this.state.data = [];
        }
    }
    render() {
        return <Panel>
            <p>MetricDisplay</p>
            <p>Data List: {this.state.data.join(', ')}</p>
            <p>Latest Value: {this.state.latest}</p>
        </Panel>
    }
}