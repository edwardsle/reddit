import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from "./components/layout/LoginPage";
import RegisterPage from "./components/layout/RegisterPage";
import HomePage from './components/layout/HomePage';

class App extends Component {
  render() {
    return (
      <>
        <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
            </Switch>
        </Router>
      </>
    );
  }
}

export default App;
