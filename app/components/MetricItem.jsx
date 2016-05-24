import React from 'react';
import MetricDisplay from './MetricDisplay.jsx';
import MetricControl from './MetricControl.jsx';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Panel>
            <Grid>
                <Row><p>MetricItem</p></Row>
                <Row>
                    <Col xs={12} md={8}>
                        <MetricDisplay
                            data={this.props.data}
                        ></MetricDisplay>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <MetricControl
                            data={this.props.data}
                        ></MetricControl>
                    </Col>
                </Row>
            </Grid>
        </Panel>
    }
}