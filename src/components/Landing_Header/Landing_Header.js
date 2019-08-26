import React, { Component } from 'react';
import './Landing_Header_Desktop.css';
import './Landing_Header_Mobile.css';

export default class LandingHeader extends Component {
  render() {
    return (
      <header>
          <div>
              <h1>Contour</h1>
          </div>
          <nav>
              <ul className="nav-links">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Demo</a></li>
                  <li><a href="#">Github</a></li>
              </ul>
          </nav>
      </header>
    )
  }
}
