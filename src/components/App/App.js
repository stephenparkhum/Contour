import React, { Component } from 'react';
import LandingHeader from '../Landing_Header/Landing_Header';
import LandingMain from '../Landing_Main/Landing_Main';

export default class App extends Component {

  render() {
    return (
      <div className="App">
      <LandingHeader />
      <main>
        <LandingMain />
      </main>
    </div>
    )
  }
}


