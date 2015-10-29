import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute} from 'react-router';

import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

import App from './components/App';
import {DashboardContainer} from './components/Dashboard';
import {PlaylistsContainer} from './components/Playlists';
import Login from './components/Login';

import thunkMiddleWare from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleWare
)(createStore);

let store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Login} />
          <Route path='dashboard' component={DashboardContainer} />
          <Route path='playlists' component={PlaylistsContainer} />
        </Route>
      </Router>
    </Provider>
), document.getElementById('app'));
