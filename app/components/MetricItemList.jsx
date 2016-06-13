import React from 'react';
import MetricItem from './MetricItem.jsx';

import {Grid, Row, Col, Panel} from 'react-bootstrap'


export default class MetricItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let metricItemNodes;
    const thingConfig = this.props.thingConfig;
    const itemList = this.props.itemList;
    if (thingConfig.data) {
      metricItemNodes = Object.keys(thingConfig.data).map((objectKey) => {
        return <MetricItem
          key={objectKey}
          itemKey={objectKey}
          itemConfig={thingConfig.data[objectKey]}
          data={itemList[objectKey] || {}}></MetricItem>
      });
    }
    return <Panel>
      <p>Metric Item List</p>
      {metricItemNodes}
      </Panel>
  }
}

export default MetricItemList
