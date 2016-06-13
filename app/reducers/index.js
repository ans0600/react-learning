import {combineReducers} from 'redux'



function metricList(state = {}, action) {
  switch (action.type) {
    case "RECEIVE_ITEM_LIST":
      return Object.assign({}, state, action.data);
    case "UPDATE_METRIC":
      let currentState = Object.assign({}, state);
      currentState[action.index].data.push(action.newValue);
      currentState[action.index].latest = action.newValue;
      return currentState;
    default:
      return state;
  }
}

function thingConfig(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_THING_CONFIG':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  metricList,
  thingConfig
});

export default rootReducer
