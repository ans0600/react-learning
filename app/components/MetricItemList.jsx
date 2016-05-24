import React from 'react';
import MetricItem from './MetricItem.jsx';
import MetricListStore from '../stores/MetricListStore';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

export default class MetricItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'itemList': []
        }
    }

    componentDidMount() {
        MetricListStore.listen(this._onMetricListChange.bind(this));
    }

    componentWillUnmount() {
        MetricListStore.unlisten(this._onMetricListChange.bind(this));
    }

    render() {
        var metricItemNodes = this.state.itemList.map(function (value, key) {
            return <MetricItem
                key={key}
                data={value}></MetricItem>
        });
        return <Panel>
            <p>Metric Item List</p>
            {metricItemNodes}
        </Panel>
    }

    _onMetricListChange(itemListStore) {
        console.log('MetricItemList, _onMetricListChange', itemListStore);
        this.setState({
            'itemList': itemListStore.getItemListData()
        });
    }
}