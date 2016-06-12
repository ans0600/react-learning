import React from 'react';
import MetricItem from './MetricItem.jsx';

import {Grid, Row, Col, Panel} from 'react-bootstrap'

const MetricItemList = ({itemList}) => (
  <Panel>
    <p>Metric Item List</p>
    {itemList.map(function (value, key) {
      return <MetricItem
        key={key}
        data={value}></MetricItem>
    })}
  </Panel>
);

export default MetricItemList
