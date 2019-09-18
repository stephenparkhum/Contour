import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LandingHeader from '../Landing_Header/LandingHeader';
import LandingMain from '../Landing_Main/Landing_Main';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Dashboard_Header from '../Dashboard_Header/Dashboard_Header';
import Dashboard_Main from '../Dashboard_Main/Dashboard_Main';
import ContourContext from './AppContext';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [],
      tours: [],
      todaysDate: '',
    };
  }

  componentDidMount() {
    this.getShows();
    this.getTours();
  }

  getShows() {
    const url = 'https://peaceful-fortress-94581.herokuapp.com';
    fetch(`${url}/api/shows`)
      .then(response => response.json())
      .then(data => this.updateShowState(data))
      .then(a => {if (this.state.shows !== []){console.log(this.state.shows)}});
  }

  getTours() {
    const url = 'https://peaceful-fortress-94581.herokuapp.com';
    fetch(`${url}/api/tours`)
      .then(response => response.json())
      .then(data => this.updateTourState(data))
      .then(a => {if (this.state.tours !== []){console.log(this.state.tours)}});
  }

  updateShowState(showList) {
    this.setState({shows: showList.shows});
  }

  updateTourState(tourList) {
    this.setState({tours: tourList.tours});
  }

  // addShowFetch(postData) {
    
  // }

  addShowSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:8000/api/shows';
    fetch(url, {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(event)
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {

    const contextValue = {
      shows: this.state.shows,
      tours: this.state.tours,
      addShowSubmit: this.addShowSubmit
    };

    return (

      <ContourContext.Provider value={contextValue}>
        <div className="App">
        <Route exact path="/" component={LandingHeader}/>
        <Route path="/dashboard" component={Dashboard_Header}/>
        <main>
            <Route exact path="/" component={LandingMain} />
            <Route path="/home/login" component={Login} />
            <Route path="/home/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard_Main} />
        </main>
    </div>
      </ContourContext.Provider>
      
    )
  }
}


