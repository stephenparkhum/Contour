import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LandingHeader from '../Landing_Header/Landing_Header';
import LandingMain from '../Landing_Main/Landing_Main';
import Login from '../Login/Login';
import Signup from '../SignUp/SignUp';
import Dashboard_Header from '../Dashboard_Header/Dashboard_Header';
import Dashboard_Main from '../Dashboard_Main/Dashboard_Main';

export default class App extends Component {

  render() {
    return (
      <div className="App">
      <Switch>
        <Redirect from="/" to="/home"/>
      </Switch>
      <Route path="/home" component={LandingHeader}/>
      <Route path="/dashboard" component={Dashboard_Header}/>
      <main>
        <Route exact path="/home" component={LandingMain} />
        <Route path="/home/login" component={Login} />
        <Route path="/home/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard_Main} />
      </main>
    </div>
    )
  }
}


