import React from 'react';
import ReactDOM from 'react-dom';
// Capital P because Provider is a component in the react-redux library.
import { Provider } from 'react-redux';
// createStore is a function in the redux library.
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>
  , document.querySelector('#root')
);
  