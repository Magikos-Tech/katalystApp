import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.10.0';

// pages for this product
import Components from 'views/Components/Components.js';
import BuildAndSell from 'views/BuildAndSell/BuildAndSellForm';
import HomePage from 'views/homePage/homePage';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path='/build-and-sell' exact component={HomePage} />
      <Route path='/components' exact component={Components} />
      <Route path='/' exact component={BuildAndSell} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// "build": "react-scripts build && gulp licenses",
