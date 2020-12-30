import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from "./components/layout/LoginPage";
import RegisterPage from "./components/layout/RegisterPage";
import HomePage from './components/layout/HomePage';
import SinglePostPage from './components/layout/SinglePostPage';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/post" component={SinglePostPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
            </Switch>
        </Router>
      </>
    );
  }
}

export default App;
