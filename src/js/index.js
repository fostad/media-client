import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter, IndexRoute } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import Movies from "./components/Movies";
import Movie from "./components/Movie";
import Layout from "./components/Layout";

const app = document.getElementById('root');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Layout >
          <Route exact path='/' component={Movies}/>
          <Route exact path='/movies' component={Movies}/>
          <Route exact path='/movie' component={Movie}/>
        </Layout >
      </Switch>
    </BrowserRouter>
  </Provider>, app);
