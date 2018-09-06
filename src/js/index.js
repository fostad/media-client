import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/search";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const app = document.getElementById('root');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Search/>
  </Provider>, app);
