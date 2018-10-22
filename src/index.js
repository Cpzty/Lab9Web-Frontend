import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import chismes from './reducers/chismes';
import './index.css';
import App from './components/App';

const store = createStore(chismes);

render(
  <Provider store ={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)
