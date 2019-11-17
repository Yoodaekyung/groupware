import React from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";

import Main from './Main/Main';
import Page from './Sub/Page/Page';
import NotFound from './NotFound/NotFound';
import "./style.scss";
import Login from './Member/Login';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route path="/sub/Page" component={Page} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
