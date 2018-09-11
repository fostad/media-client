import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import Search from "./components/search";
import Movie from "./components/Movie";

const app = document.getElementById('root');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Search}/>
        <Route exact path='/movie' component={Movie}/>
      </Switch>
    </BrowserRouter>
  </Provider>, app);
