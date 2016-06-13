require('./main.scss');

import 'babel-polyfill'
import React from 'react';
import {render} from 'react-dom'
import App from './containers/App.jsx';
import appReducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'


const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension && window.devToolsExtension()
);

let store = createStore(
  appReducers,
  undefined,
  enhancer
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
