import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblesPage from './components/BubblePage';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path='/bubbles' component={BubblesPage} />
          <Route exact path="/" component={Login} />
          <Route comonent={Login} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
