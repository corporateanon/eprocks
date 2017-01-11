import React, { Component } from 'react';
import 'bootstrap/less/bootstrap.less';
import './App.css';
import Directory from './containers/Directory';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const middleware = [ promiseMiddleware() ];

const store =  createStore(reducer, {}, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

class App extends Component {
  render() {
    return (
      <Provider {...{store}}>
        <Directory />
      </Provider>
    );
  }
}

export default App;
