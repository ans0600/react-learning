import { connect } from 'react-redux'
import MetricItemList from '../components/MetricItemList'

const mapStateToProps = (state) => {
  //debugger;
  return {
    itemList: state.metricList || []
  }
  
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const VisibleMetricItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MetricItemList);

export default VisibleMetricItemList