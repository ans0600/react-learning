import React, {Component, PropTypes} from 'react';
import VisibleMetricItemList from '../containers/VisibleMetricItemList';

import { connect } from 'react-redux'
import { fetchItemList, fetchThingConfig } from '../actions'


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchThingConfig());
    dispatch(fetchItemList());
  }

  render() {
    return < VisibleMetricItemList />;
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(App)