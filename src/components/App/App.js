import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LandingHeader from '../Landing_Header/Landing_Header';
import LandingMain from '../Landing_Main/Landing_Main';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Dashboard_Header from '../Dashboard_Header/Dashboard_Header';
import Dashboard_Main from '../Dashboard_Main/Dashboard_Main';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [],
      tours: []
    };
  }

  componentDidMount() {
    this.getShows();
  }

  getShows() {
    const url = 'https://peaceful-fortress-94581.herokuapp.com';
    fetch(`${url}/api/shows`)
      .then(response => response.json())
      .then(data => this.updateShowState(data));
  }

  updateShowState(showList) {
    this.setState({shows: showList});
  }

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
        <Route path="/home/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard_Main} />
      </main>
    </div>
    )
  }
}


