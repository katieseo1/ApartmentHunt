import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import SearchContainer from './components/searchContainer';
import ListContainer from './components/listContainer';
import RemovedListContainer from './components/removedListContainer';;

import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { saveState } from './components/localStorage';

store.subscribe(() => {
  saveState(store.getState());
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={SearchContainer} />
        <Route path="/saved" component={ListContainer} />
        <Route path="/removed" component={RemovedListContainer} />

      </Router>
    </Provider>,
    document.getElementById('app'));
  });
