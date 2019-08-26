import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Landing_Header_Desktop.css';
import './Landing_Header_Mobile.css';

export default class LandingHeader extends Component {
  render() {
    return (
      <header>
          <div>
              <h1><Link to="/">Contour</Link></h1>
          </div>
          <nav>
              <ul className="nav-links">
                  <li><NavLink exact to="/home" activeClassName="nav-link-active">About</NavLink></li>
                  <li><NavLink to="/home/login" activeClassName="nav-link-active">Login</NavLink></li>
                  <li><NavLink to="/home/signup" activeClassName="nav-link-active">Sign Up</NavLink></li>
                  <li><NavLink to="/dashboard" activeClassName="nav-link-active">Demo</NavLink></li>
              </ul>
          </nav>
      </header>
    )
  }
}
