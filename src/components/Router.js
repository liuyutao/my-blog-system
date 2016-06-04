/**
 * Created by user on 16/6/4.
 */
import 'react'
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, Redirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../stores/configureStore';

import App from './App';
import SignInComponent from './SignInComponent';
import ArticleListComponent from './ArticleListComponent';
import ArticleComponent from './ArticleComponent';
import ArticleAddComponent from './ArticleAddComponent';
import ArticleEditComponent from './ArticleEditComponent';


const store = configureStore(hashHistory);

let AppRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="blog" component={App}>
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
)

export default AppRouter;

