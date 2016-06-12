import React, {Component, PropTypes} from 'react';
import VisibleMetricItemList from '../containers/VisibleMetricItemList';

import { connect } from 'react-redux'
import { updateItemList, testUpdateItemList } from '../actions'


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    //dispatch(updateItemList());
    dispatch(testUpdateItemList());
  }

  render() {
    return < VisibleMetricItemList />;
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(App)