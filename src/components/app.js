import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import Admin from './pages/admin';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgot-password';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Admin}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
          </Switch>
        </Router>
    );
  }
}

export default App;