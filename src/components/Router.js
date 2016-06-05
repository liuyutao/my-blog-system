/**
 * Created by user on 16/6/4.
 */
import React from 'react'
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../stores/configureStore';

import AppComponent from './App';
import SignInComponent from './SignInComponent';
import ArticleListComponent from './ArticleListComponent';
import ArticleAddComponent from './ArticleAddComponent';
import ArticleEditComponent from './ArticleEditComponent';


const store = configureStore(hashHistory);


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

let AppRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppComponent}>
        <Route path="blog" component={ArticleListComponent}>
          <IndexRedirect to="/blog/list/1/"/>
          <Route path="add" component={ArticleAddComponent}/>
          <Route path="edit" component={ArticleEditComponent}>

          </Route>
          <Route path="list" component={ArticleListComponent}>
            <Route path=":page" component={ArticleListComponent}>
            </Route>
          </Route>
        </Route>
        <Route path="signin" component={SignInComponent}/>
      </Route>
    </Router>
  </Provider>
);

export default AppRouter;

