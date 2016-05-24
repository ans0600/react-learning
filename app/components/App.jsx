import React from 'react';
import MetricItemList from './MetricItemList.jsx';
var WebAPIUtils = require('../utils/WebAPIUtils');

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //WebAPIUtils.loadTestItem();
        WebAPIUtils.loadTestItemList();
    }
    render() {
        return < MetricItemList />;
    }
}