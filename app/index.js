require('./main.css');

import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom'
import App from './containers/App.jsx';
import appReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(appReducers, undefined, window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
