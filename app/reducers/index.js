import {combineReducers} from 'redux'

function metricList(state=[], action) {
  switch(action.type) {
    case "RECEIVE_ITEM_LIST":
      return Object.assign([], state, action.data);
    case "UPDATE_METRIC":
      let currentState = Object.assign([], state);
    //  debugger;
    //   currentState.push({
    //     data: [9, 8, 999],
    //     latest: 999,
    //     key: 2
    //   });
      currentState[action.index].data.push(action.newValue);
      currentState[action.index].latest = action.newValue;
      return currentState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  metricList
});

export default rootReducer
