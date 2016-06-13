import { connect } from 'react-redux'
import MetricItemList from '../components/MetricItemList'

const mapStateToProps = (state) => {
  return {
    itemList: state.metricList.data || {},
    thingConfig: state.thingConfig
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