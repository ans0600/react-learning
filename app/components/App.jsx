import React from 'react';
import MetricItem from './MetricItem.jsx';
var WebAPIUtils = require('../utils/WebAPIUtils');

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        WebAPIUtils.loadTestItem();
    }
    render() {
        return < MetricItem />;
    }
}