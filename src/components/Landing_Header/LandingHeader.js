import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Landing_Header_Desktop.css';
import './Landing_Header_Mobile.css';

export default class LandingHeader extends Component {
  render() {
    return (
      <header>
          <div>
              <h1><Link to="/">Con<span className="logo-color">tour</span></Link></h1>
          </div>
          <nav>
              <ul className="nav-links">
                  <li><NavLink exact to="/" activeClassName="nav-link-active">About</NavLink></li>
                  <li><NavLink to="/dashboard" activeClassName="nav-link-active">Demo</NavLink></li>
              </ul>
          </nav>
      </header>
    )
  }
}
